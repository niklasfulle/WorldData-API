import { NextAuthOptions } from "next-auth"
import { db } from "@/lib/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import { compare } from "bcrypt"
import { z } from "zod"
import { randomUUID } from "crypto"
import { cookies } from "next/headers"
import { decode } from "next-auth/jwt"
import { getGithubCredentials, getGoogleCredentials } from "@/helpers/get-credentials"

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
        try {
          const { email, password } = loginUserSchema.parse(credentials);

          const user = await db.user.findUnique({
            where: {
              email,
            }
          });

          if (!user) {
            throw new Error("User account does not exist");
          }

          const passwordsMatch = await compare(
            password,
            user?.password!
          );

          if (!passwordsMatch) {
            throw new Error("Password is not correct");
          }

          return user as any;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, credentials }) {

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
      }

      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
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
        const sessiondb = await db.session.findUnique({
          where: {
            sessionToken: sessionToken,
          },
        });

        await db.session.deleteMany({
          where: {
            userId: sessiondb?.userId,
          },
        });
      }
    },
  },
}