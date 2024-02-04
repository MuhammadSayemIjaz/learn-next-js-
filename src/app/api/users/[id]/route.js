import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(requset, { params }) {
     const data = users;
     const filted_data = data.filter((item) => item.id == params.id);
     return NextResponse.json(filted_data.length == 0 ? { users: [], status: 404 } : { users: filted_data, status: 200 });
}

export async function PUT(request, content) {
     const payload = await request.json();
     console.log(content);
     return NextResponse.json({ result: "user data updated successfully", success: true }, { status: 200 })
}