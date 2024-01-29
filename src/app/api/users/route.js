import { NextResponse } from "next/server";

export function GET(request) {
     return NextResponse.json({fname: 'sayem',lname: 'ijaz', age: 23, gender: 'male'})
}