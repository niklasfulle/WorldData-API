import { authOptions } from '@/lib/auth/auth'
import { db } from '@/lib/db/prisma'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    const user = await db.user.findFirst({
      where: { email: session?.user?.email },
      include: { apiKey: true },
    })

    if (!user) {
      return NextResponse.json({
        error: 'Unauthorized to perform this action.',
        success: false,
      }, { status: 401 })
    }

    const userApiKeys = await db.apiKey.findMany({
      where: { userId: user.id },
    })

    if (userApiKeys.length === 0) {
      return NextResponse.json({
        error: 'You do not have a valid API key.',
        success: false,
      }, { status: 400 })
    }

    // clear history
    userApiKeys.forEach(async (apiKey) => {
      await db.apiRequest.deleteMany({
        where: { apiKeyId: apiKey.id },
      })
    })

    return NextResponse.json({ error: null, success: true }, { status: 200 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}