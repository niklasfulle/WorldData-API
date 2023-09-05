/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
import { celestialBodieCreateSchema } from "@/lib/db/schema/celestialBodie.schema";
import { cityCreateSchema } from "@/lib/db/schema/city.schema";
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


    const CelestialBodie = mongoDb.CelestialBodie;

    const celestialBodie = celestialBodieCreateSchema.parse(await req.json());

    const lastCelestialBodie = await CelestialBodie.findOne().sort({ id: -1 }).limit(1);

    celestialBodie.id = lastCelestialBodie?.id ? lastCelestialBodie.id + 1 : 1;

    await CelestialBodie.create(celestialBodie);

    return NextResponse.json({ message: "Celestiel Bodie created succsesful", success: true }, { status: 201 })
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

    const body: any = await req.json();

    const CelestialBodie = mongoDb.CelestialBodie;

    const celestialBodie = celestialBodieCreateSchema.parse(body.celestialBodie);

    const id = body.id;

    await CelestialBodie.updateOne({ id: id }, celestialBodie);

    return NextResponse.json({ message: "Celestiel Bodie updated succsesful", success: true }, { status: 200 })
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