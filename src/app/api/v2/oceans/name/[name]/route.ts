import { NextResponse } from "next/server"
import { limiterV2 } from "@/lib/limiter"
import { db as prisma } from '@/lib/db/prisma'
import { mongoDb } from "@/lib/db/mogodb"
import { z } from "zod"
import { oceanBody, oceanV2Schema } from "@/lib/db/schema/ocean.schema"
import { createApiRequest } from "@/lib/helpers/data-helper"

type Props = {
  params: {
    name: string;
  }
}

export async function GET(req: Request, { params: { name } }: Props) {
  const apiKey = req.headers.get("authorization")

  if (!apiKey) {
    return NextResponse.json({ error: 'Unauthorized', success: false }, { status: 401 })
  }

  try {
    const validApiKey = await prisma.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    })

    if (!validApiKey) {
      return NextResponse.json({ error: 'Unauthorized', success: false }, { status: 401 })
    }

    const start = new Date()

    const remaining = await limiterV2.removeTokens(1)

    if (remaining < 0) {
      const duration = new Date().getTime() - start.getTime()

      const url = new URL(req.url as string).pathname

      // Persist request
      createApiRequest(duration, req.method as string, url, 429, validApiKey.id, validApiKey.key, "Too many requests")

      return NextResponse.json({ error: 'Too many requests', success: false }, { status: 429 })
    }

    try {
      const Ocean = mongoDb.Ocean;

      const ocean: oceanBody | null = await Ocean.findOne({ name })

      const url = new URL(req.url as string).pathname

      if (!ocean) {
        const duration = new Date().getTime() - start.getTime()

        // Persist request
        createApiRequest(duration, req.method as string, url, 404, validApiKey.id, validApiKey.key, "Not Found")

        return NextResponse.json({ error: 'Not Found', success: false }, { status: 404 })
      }

      const oceanValidated = oceanV2Schema.parse(ocean)

      const duration = new Date().getTime() - start.getTime()

      // Persist request
      createApiRequest(duration, req.method as string, url, 200, validApiKey.id, validApiKey.key, "Success")

      return NextResponse.json(oceanValidated, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
    }

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}