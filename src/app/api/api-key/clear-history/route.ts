import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { RevokeApiData } from '@/types/api/key'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { z } from 'zod'


export async function POST() {
  try {
    const user = await getServerSession(authOptions).then((res) => res?.user)

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

    // clear history
    await db.apiRequest.deleteMany({
      where: { apiKeyId: validApiKey.id },
    })

    return NextResponse.json({ error: null, success: true }, { status: 200 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}