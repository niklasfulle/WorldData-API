import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { CreateApiData } from '@/types/api/key'
import { nanoid } from 'nanoid'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(): Promise<NextResponse<CreateApiData>> {
  try {
    const user = await getServerSession(authOptions).then((res) => res?.user)

    if (!user) {
      return NextResponse.json({
        error: 'Unauthorized to perform this action.',
        createdApiKey: null,
      }, { status: 401 })
    }

    const existingApiKey = await db.apiKey.findFirst({
      where: { userId: user.id, enabled: true },
    })

    if (existingApiKey) {
      return NextResponse.json({
        error: 'You already have a valid API key.',
        createdApiKey: null,
      }, { status: 400 })
    }

    const createdApiKey = await db.apiKey.create({
      data: {
        userId: user.id,
        key: nanoid(32),
      },
    })

    return NextResponse.json({ error: null, createdApiKey }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, createdApiKey: null }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', createdApiKey: null }, { status: 500 })
  }
}
