import { sendResetPasswordMail } from "@/lib/helpers/send-mail";
import { db } from "@/lib/db/prisma";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { z } from "zod";
import { resetPassword } from "../../../../lib/limiter";
import { getUserWithouPassword } from "@/lib/helpers/user-functions";

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email'),
});

export async function POST(
  req: Request
) {
  try {
    // check if the user has too many requests
    const remaining = await resetPassword.removeTokens(1)

    if (remaining < 0) {
      return NextResponse.json({ message: 'Too many requests', success: false }, { status: 429 })
    }

    const { email } = forgotPasswordSchema.parse(await req.json());

    // check if the user exists
    const userDb = await getUserWithouPassword(email);

    if (userDb == null) return NextResponse.json({ message: 'No user found', success: false }, { status: 409 })

    // check if the user has a credentials account
    const account = await db.account.findFirst({
      where: { userId: userDb.id },
    });

    if (account?.provider !== 'credentials') return NextResponse.json({ message: 'Wrong Provider', success: false }, { status: 409 })

    // create a token
    const token = nanoid(128);

    // check if the user has a forgot password token
    const forgotPassword = db.forgotPassword.findFirst({
      where: { email },
    })

    // delete the old token
    if (forgotPassword !== null) {
      await db.forgotPassword.deleteMany({
        where: { userId: userDb.id },
      })
    }

    // create a new token
    await db.forgotPassword.create({
      data: {
        userId: userDb.id,
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
        email: userDb.email!,
      },
    })

    // send the email
    await sendResetPasswordMail(userDb.email!, token);

    return NextResponse.json({ message: "Email send succsesful", success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}
