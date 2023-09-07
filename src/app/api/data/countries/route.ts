import { authOptions } from "@/lib/auth/auth";
import { mongoDb } from "@/lib/db/mogodb";
import { countryCreateSchema } from "@/lib/db/schema/country.schema";
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


    const Country = mongoDb.Country;

    const country = countryCreateSchema.parse(await req.json());

    const lastCountry = await Country.findOne().sort({ id: -1 }).limit(1);

    country.id = lastCountry?.id ? lastCountry.id + 1 : 1;

    await Country.create(country);

    return NextResponse.json({ message: "Country created succsesful", success: true }, { status: 201 })
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

    const Country = mongoDb.Country;

    const country = countryCreateSchema.parse(body.country);

    const id = body.id;

    await Country.updateOne({ id: id }, country);

    return NextResponse.json({ message: "Country updated succsesful", success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}