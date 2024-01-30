import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(requset, {params}) {
     const data = users;
     const filted_data = data.filter((item) => item.id == params.id);
     return NextResponse.json(filted_data.length == 0 ? {users : [] , status: 404} :  { users: filted_data, status: 200});
}