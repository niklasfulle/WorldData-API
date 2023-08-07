import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const apiKey = headers().get("authorization")

  if (!apiKey) {
    return NextResponse.json({ error: 'Unauthorized', success: false }, { status: 401 })
  }

  return NextResponse.json({ "endpoint": "countries" }, { status: 200 })
}