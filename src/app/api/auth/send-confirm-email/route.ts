import { sendConfirmMail } from "@/lib/helpers/send-mail";
import { db } from "@/lib/db/prisma";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getUserWithouPassword } from "@/lib/helpers/user-functions";

const sendConfirmMailSchema = z.object({
  email: z.string().email('Invalid email'),
});

export async function POST(
  req: Request
) {
  try {
    const { email } = sendConfirmMailSchema.parse(await req.json());

    const userDb = await getUserWithouPassword(email);

    if (userDb == null) return NextResponse.json({ message: 'No user found', success: false }, { status: 409 })

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

    return NextResponse.json({ message: "Email send succsesful", success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}