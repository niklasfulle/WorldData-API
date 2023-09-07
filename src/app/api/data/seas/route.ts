import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
import { seaCreateSchema } from "@/lib/db/schema/sea.schema";
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


    const Sea = mongoDb.Sea;

    const sea = seaCreateSchema.parse(await req.json());

    const lastSea = await Sea.findOne().sort({ id: -1 }).limit(1);

    sea.id = lastSea?.id ? lastSea.id + 1 : 1;

    await Sea.create(sea);

    return NextResponse.json({ message: "Sea created succsesful", success: true }, { status: 201 })
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

    const Sea = mongoDb.Sea;

    const sea = seaCreateSchema.parse(body.sea);

    const id = body.id;

    await Sea.updateOne({ id: id }, sea);

    return NextResponse.json({ message: "Sea updated succsesful", success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}