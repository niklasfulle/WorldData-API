/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
import { continentCreateSchema } from "@/lib/db/schema/continent.schema";
import { getUserWithouPassword } from "@/lib/helpers/user-functions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function POST(
  req: Request
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) return NextResponse.json({
      error: 'Unauthorized to perform this action.', success: false
    }, { status: 401 })

    const user = await getUserWithouPassword(session?.user?.email)

    if (!user || user.role !== "admin") return NextResponse.json({
      error: 'Unauthorized to perform this action.', success: false
    }, { status: 401 })


    const Continent = mongoDb.Continent;

    const continent = continentCreateSchema.parse(await req.json());

    const lastContinent = await Continent.findOne().sort({ id: -1 }).limit(1);

    continent.id = lastContinent?.id ? lastContinent.id + 1 : 1;

    await Continent.create(continent);

    return NextResponse.json({ message: "Continent created succsesful", success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}

export async function PUT(
  req: Request
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) return NextResponse.json({
      error: 'Unauthorized to perform this action.', success: false
    }, { status: 401 })

    const user = await getUserWithouPassword(session?.user?.email)

    if (!user || user.role !== "admin") return NextResponse.json({
      error: 'Unauthorized to perform this action.', success: false
    }, { status: 401 })


    return NextResponse.json({ session }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}

export async function GET(
  req: Request
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) return NextResponse.json({
      error: 'Unauthorized to perform this action.', success: false
    }, { status: 401 })

    const user = await getUserWithouPassword(session?.user?.email)

    if (!user || user.role !== "admin") return NextResponse.json({
      error: 'Unauthorized to perform this action.', success: false
    }, { status: 401 })


    return NextResponse.json({ session }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}

export async function DELETE(
  req: Request
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) return NextResponse.json({
      error: 'Unauthorized to perform this action.', success: false
    }, { status: 401 })

    const user = await getUserWithouPassword(session?.user?.email)

    if (!user || user.role !== "admin") return NextResponse.json({
      error: 'Unauthorized to perform this action.', success: false
    }, { status: 401 })


    return NextResponse.json({ session }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}