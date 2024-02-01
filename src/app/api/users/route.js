import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET() {
     const data = users;
     return NextResponse.json(data)
}


export async function POST(request) {
     const data = await request.json();
     console.log(data);
     return NextResponse.json({result: "Test"})
}