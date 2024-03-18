import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import {
  protectedRoutes,
  defaultLogInRedirect,
  denied,
} from "@/routes";
import { Role } from "@prisma/client";

//middleware done as stablished by https://www.youtube.com/watch?v=wRstTmn0y_c

export default async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { nextUrl } = req;
  const role: Role | null = (session?.role as Role) || null;
  const isProtected: boolean = protectedRoutes.includes(nextUrl.pathname);

  if (isProtected) {
    if (!session) {
      return NextResponse.redirect(new URL(defaultLogInRedirect, nextUrl));
    }
    if (
      (nextUrl.pathname.startsWith("/admin") && role === Role.USER)
    ) {
      return NextResponse.redirect(new URL(denied, nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
