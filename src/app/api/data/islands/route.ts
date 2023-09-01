/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
import { islandCreateSchema } from "@/lib/db/schema/island.schema";
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


    const Island = mongoDb.Island;

    const island = islandCreateSchema.parse(await req.json());

    const lastIsland = await Island.findOne().sort({ id: -1 }).limit(1);

    island.id = lastIsland?.id ? lastIsland.id + 1 : 1;

    await Island.create(island);

    return NextResponse.json({ message: "Island Bodie created succsesful", success: true }, { status: 200 })
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