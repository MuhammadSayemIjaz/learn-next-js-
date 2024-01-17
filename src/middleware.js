import { NextResponse } from "next/server";

const middleware = (request) => {
     // console.log(new URL("/login",request.url)
     const userName = "testuser";
     if (userName != "testuser") {
          return NextResponse.redirect(new URL("/login", request.url))

     }
}

export const config = {
     matcher: "/studentslist/:path*"
}
export default middleware