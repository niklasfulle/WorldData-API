import { db } from "@/lib/db/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import { compare, hash } from "bcrypt"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import { getUser } from "@/lib/helpers/user-functions";

const changePasswordSchema = z.object({
  oldPassword: z.string().min(8, 'Password must be at least 8 characters'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
});

export async function POST(
  req: Request
) {
  try {
    const session = await getServerSession(authOptions);
    const user = await getUser(session?.user?.email);

    if (!user) {
      return NextResponse.json({
        error: 'Unauthorized to perform this action.',
        success: false,
      }, { status: 401 })
    }

    const { oldPassword, newPassword } = changePasswordSchema.parse(await req.json());

    // check if the user has a credentials account
    const account = await db.account.findFirst({
      where: { userId: user.id },
    });

    if (account?.provider !== 'credentials') return NextResponse.json({ message: 'Wrong Provider', success: false }, { status: 409 })

    // check if the old password is correct
    const passwordsMatch = await compare(
      oldPassword,
      user?.password!
    );

    if (!passwordsMatch) return NextResponse.json({ message: 'Wrong Password', success: false }, { status: 409 })

    // update the password
    const hashedPassword = await hash(newPassword, 10);

    await db.user.update({
      where: { email: user.email! },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Password succsesful changed", success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}
