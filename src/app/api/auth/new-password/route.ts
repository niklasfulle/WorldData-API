import { db } from "@/lib/db/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt';

const newPasswordSchema = z.object({
  token: z.string().min(128, 'Invalid token').max(128, 'Invalid token'),
  password: z.string().min(5, 'Password should be minimum 5 characters'),
});

export async function POST(
  req: Request
) {
  try {
    const body = await req.json()
    const { token, password } = newPasswordSchema.parse(body);

    // check if the user has a forgot password token
    const forgotPassword = await db.forgotPassword.findFirst({
      where: { token },
    })

    if (forgotPassword === null) return NextResponse.json({ message: 'Invalid token', success: false }, { status: 409 })

    // check if the token is expired
    if (forgotPassword.expires < new Date()) return NextResponse.json({ message: 'Token expired', success: false }, { status: 409 })

    const hashedPassword = bcrypt.hashSync(password, 10);

    // update the user's password
    await db.user.update({
      where: { id: forgotPassword.userId },
      data: {
        password: hashedPassword,
      },
    })

    // delete the token
    await db.forgotPassword.delete({
      where: { token },
    })

    return NextResponse.json({ message: 'Password updated', success: true }, { status: 200 })

  } catch (error) { }
}