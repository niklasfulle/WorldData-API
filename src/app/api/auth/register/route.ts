import { z } from 'zod';
import { db } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { sendConfirmMail } from '@/lib/helpers/send-mail';
import { hash } from 'bcrypt';
import { getUserWithouPassword } from '@/lib/helpers/user-functions';

const registerUserSchema = z.object({
  username: z.string().regex(/^[a-zA-Z0-9]{3,15}$/g, 'Invalid username'),
  email: z.string().email('Invalid email'),
  password: z.string().min(5, 'Password should be minimum 5 characters'),
});

export async function POST(
  req: Request
) {
  try {
    const { username, email, password } = registerUserSchema.parse(await req.json());

    const user = await getUserWithouPassword(email);

    if (user !== null) return NextResponse.json({ message: 'User already exists', success: false }, { status: 409 })

    const hashedPassword = await hash(password, 10);

    // Create user
    const userDb = await db.user.create({
      data: {
        name: username,
        email,
        password: hashedPassword,
        emailVerified: false,
      },
    });

    // Create Account
    await db.account.create({
      data: {
        userId: userDb.id,
        type: "oauth",
        provider: "credentials",
        providerAccountId: userDb.id,
      },
    });

    const token = nanoid(128);

    // Create ConfirmEmail
    await db.confirmEmail.create({
      data: {
        userId: userDb.id,
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
        email: userDb.email!,
      },
    })

    // Send email
    await sendConfirmMail(userDb.email!, token);

    return NextResponse.json({ message: "User created", success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}