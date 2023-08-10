import { NextResponse } from "next/server"
import { citiesLimiter } from "@/limit/limiter"
import { db as prisma } from '@/lib/prisma'
import clientPromise from "@/lib/mogodb"
import { z } from "zod"

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

    const remaining = await citiesLimiter.removeTokens(1)

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

      const city = await db.collection("continents").findOne({ name })

      const duration = new Date().getTime() - start.getTime()

      const url = new URL(req.url as string).pathname

      if (!city) {
        await prisma.apiRequest.create({
          data: {
            duration,
            method: req.method as string,
            path: url,
            status: 404,
            apiKeyId: validApiKey.id,
            usedApiKey: validApiKey.key,
            response: "Not Found"
          },
        })
        return NextResponse.json({ error: 'Not Found', success: false }, { status: 404 })
      }

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

      return NextResponse.json(city, { status: 200 })
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