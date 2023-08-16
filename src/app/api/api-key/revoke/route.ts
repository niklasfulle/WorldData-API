import { authOptions } from '@/lib/auth'
import { db } from '@/lib/prisma'
import { RevokeApiData } from '@/types/api/key'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(): Promise<NextResponse<RevokeApiData>> {
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

    const validApiKey = await db.apiKey.findFirst({
      where: { userId: user.id, enabled: true },
    })

    if (!validApiKey) {
      return NextResponse.json({
        error: 'You do not have a valid API key.',
        success: false,
      }, { status: 400 })
    }

    // invalidate API key
    await db.apiKey.update({
      where: { id: validApiKey.id },
      data: {
        enabled: false,
      },
    })

    // remove API key from user
    await db.user.update({
      where: { id: user.id },
      data: { apiKeyId: null },
    })

    return NextResponse.json({ error: null, success: true }, { status: 200 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}