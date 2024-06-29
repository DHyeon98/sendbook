import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "./firebase/firebase";

export default function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;
  const path = nextUrl.pathname;
  const hasToken = cookies.has("token");

  // 정적 파일 요청 필터링
  if (
    path.startsWith("/_next/") ||
    path.startsWith("/images/") ||
    path.startsWith("/fonts/") ||
    path === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // if (!hasToken) {
  //   return NextResponse.redirect(new URL("/signin", request.nextUrl));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
