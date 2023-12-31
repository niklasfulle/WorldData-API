import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
import { oceanCreateSchema } from "@/lib/db/schema/ocean.schema";
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


    const Ocean = mongoDb.Ocean;

    const ocean = oceanCreateSchema.parse(await req.json());

    const lastOcean = await Ocean.findOne().sort({ id: -1 }).limit(1);

    ocean.id = lastOcean?.id ? lastOcean.id + 1 : 1;

    await Ocean.create(ocean);

    return NextResponse.json({ message: "Ocean created succsesful", success: true }, { status: 201 })
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

    const Ocean = mongoDb.Ocean;

    const ocean = oceanCreateSchema.parse(body.ocean);

    const id = body.id;

    await Ocean.updateOne({ id: id }, ocean);

    return NextResponse.json({ message: "Ocean updated succsesful", success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}