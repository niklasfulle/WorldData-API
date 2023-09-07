import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
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


    const City = mongoDb.City;

    const city = cityCreateSchema.parse(await req.json());

    const lastCity = await City.findOne().sort({ id: -1 }).limit(1);

    city.id = lastCity?.id ? lastCity.id + 1 : 1;

    await City.create(city);

    return NextResponse.json({ message: "City created succsesful", success: true }, { status: 201 })
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

    const City = mongoDb.City;

    const city = cityCreateSchema.parse(body.city);

    const id = body.id;

    await City.updateOne({ id: id }, city);

    return NextResponse.json({ message: "City updated succsesful", success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}