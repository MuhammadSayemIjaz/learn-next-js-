import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET() {
     const data = users;
     return NextResponse.json(data)
}


export async function POST(request) {
     const payload = await request.json();
     // console.log(payload);
     return NextResponse.json({result: "user created successfully", success: true}, {status: 201})
}