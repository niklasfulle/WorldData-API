import { z } from 'zod';
import bcrypt from 'bcrypt';
import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';

const registerUserSchema = z.object({
  username: z.string().regex(/^[a-zA-Z0-9]{3,15}$/g, 'Invalid username'),
  email: z.string().email('Invalid email'),
  password: z.string().min(5, 'Password should be minimum 5 characters'),
});

export async function POST(
  req: Request
) {
  try {

    const body = await req.json()
    const { username, email, password } = registerUserSchema.parse(body);

    const user = await db.user.findUnique({
      where: { email },
    });

    if (user !== null) return NextResponse.json({ message: 'User already exists', success: false }, { status: 409 })

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const userDb = await db.user.create({
      data: {
        name: username,
        email,
        password: hashedPassword,
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

    return NextResponse.json({ message: "User created", success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}