import { NextResponse } from "next/server"
import { continentsLimiter } from "@/limit/limiter"
import { db } from '@/lib/db'
import { z } from "zod"

export async function GET(req: Request) {
  const apiKey = req.headers.get("authorization")

  if (!apiKey) {
    return NextResponse.json({ error: 'Unauthorized', success: false }, { status: 401 })
  }

  try {
    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    })

    if (!validApiKey) {
      return NextResponse.json({ error: 'Unauthorized', success: false }, { status: 401 })
    }

    const start = new Date()

    const remaining = await continentsLimiter.removeTokens(1)

    if (remaining < 0) {
      return NextResponse.json({ error: 'Too many requests', success: false }, { status: 429 })
    }

    return NextResponse.json({ "endpoint": "cities" }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}