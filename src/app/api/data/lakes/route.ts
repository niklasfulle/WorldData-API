import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
import { lakeCreateSchema } from "@/lib/db/schema/lake.schema";
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


    const Lake = mongoDb.Lake;

    const lake = lakeCreateSchema.parse(await req.json());

    const lastLake = await Lake.findOne().sort({ id: -1 }).limit(1);

    lake.id = lastLake?.id ? lastLake.id + 1 : 1;

    await Lake.create(lake);

    return NextResponse.json({ message: "Lake Bodie created succsesful", success: true }, { status: 201 })
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

    const Lake = mongoDb.Lake;

    const lake = lakeCreateSchema.parse(body.lake);

    const id = body.id;

    await Lake.updateOne({ id: id }, lake);

    return NextResponse.json({ message: "Lake updated succsesful", success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}