
import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';


export async function GET(
  req: Request
) {
  try {
    


  } catch (error) {


    return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 })
  }
}