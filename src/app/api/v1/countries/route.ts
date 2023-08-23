import { NextResponse } from "next/server"
import { countriesLimiterV1 } from "@/app/api/config/limiter"
import { db as prisma } from '@/lib/db/prisma'
import clientPromise from "@/lib/db/mogodb"
import { z } from "zod"

export async function GET(req: Request) {
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

    const remaining = await countriesLimiterV1.removeTokens(1)

    if (remaining < 0) {
      const duration = new Date().getTime() - start.getTime()

      const url = new URL(req.url as string).pathname

      await prisma.apiRequest.create({
        data: {
          duration,
          method: req.method as string,
          path: url,
          status: 429,
          apiKeyId: validApiKey.id,
          usedApiKey: validApiKey.key,
          response: "Too many requests"
        },
      })

      return NextResponse.json({ error: 'Too many requests', success: false }, { status: 429 })
    }

    try {
      const client = await clientPromise;
      const db = client.db("worlddata");

      const countries = await db.collection("countries").find().toArray();

      const duration = new Date().getTime() - start.getTime()

      const url = new URL(req.url as string).pathname

      // Persist request
      await prisma.apiRequest.create({
        data: {
          duration,
          method: req.method as string,
          path: url,
          status: 200,
          apiKeyId: validApiKey.id,
          usedApiKey: validApiKey.key,
          response: "Success"
        },
      })

      return NextResponse.json(countries, { status: 200 })
    } catch (error) {
      console.log(error)
      return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues, success: false }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}