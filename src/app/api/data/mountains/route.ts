import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
import { mountainCreateSchema } from "@/lib/db/schema/mountain.schema";
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


    const Mountain = mongoDb.Mountain;

    const mountain = mountainCreateSchema.parse(await req.json());

    const lastMountain = await Mountain.findOne().sort({ id: -1 }).limit(1);

    mountain.id = lastMountain?.id ? lastMountain.id + 1 : 1;

    await Mountain.create(mountain);

    return NextResponse.json({ message: "Mountain Bodie created succsesful", success: true }, { status: 201 })
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

    const Mountain = mongoDb.Mountain;

    const mountain = mountainCreateSchema.parse(body.mountain);

    const id = body.id;

    await Mountain.updateOne({ id: id }, mountain);

    return NextResponse.json({ message: "Mountain updated succsesful", success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}