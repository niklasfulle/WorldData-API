import { NextAuthOptions } from "next-auth"
import { db } from "@/lib/db/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import { compare } from "bcrypt"
import { z } from "zod"
import { randomUUID } from "crypto"
import { cookies } from "next/headers"
import { decode } from "next-auth/jwt"
import { getGithubCredentials, getGoogleCredentials } from "@/lib/auth/get-credentials"

const loginUserSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(5, 'Password should be minimum 5 characters'),
});

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().googleClientId,
      clientSecret: getGoogleCredentials().googleClientSecret,
    }),
    GitHubProvider({
      clientId: getGithubCredentials().githubClientId,
      clientSecret: getGithubCredentials().githubClientSecret,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = loginUserSchema.parse(credentials);

        const user = await db.user.findUnique({
          where: {
            email,
          }
        });

        if (!user) {
          throw new Error("Password or Email not correct");
        }

        const passwordsMatch = await compare(
          password,
          user?.password!
        );

        if (!passwordsMatch) {
          throw new Error("Password or Email not correct");
        }

        if (!user.emailVerified) {
          throw new Error("Email not verified");
        }

        return user as any;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {

        if (user) {
          const sessionToken = randomUUID();
          const sessionExpiry = new Date(
            Date.now() + 60 * 60 * 24 * 30 * 1000
          );

          await db.session.create({
            data: {
              sessionToken,
              userId: user.id,
              expires: sessionExpiry,
            },
          });

          cookies().set("next-auth.session-token", sessionToken, {
            expires: sessionExpiry,
          });
        }
      } else if (account?.provider === "google" || account?.provider === "github") {
        const { email } = user as any;

        const dbUser = await db.user.findUnique({
          where: {
            email,
          },
        });

        const accountDb = await db.account.findFirst({
          where: {
            userId: dbUser?.id,
          },
        });

        if (accountDb?.provider == "credentials" && email == dbUser?.email) {
          return false
        }
      }

      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl + "/dashboard";
    },
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    encode: async () => {

      const cookie = cookies().get("next-auth.session-token");

      if (cookie) return cookie.value;
      return "";

    },
    decode: async (arg) => {
      return decode(arg);
    },
  },
  events: {
    async signOut({ session }) {
      const { sessionToken = "" } = session as unknown as {
        sessionToken?: string;
      };

      if (sessionToken) {
        await db.session.deleteMany({
          where: {
            sessionToken: sessionToken,
          },
        });
      }
    },
  },
}