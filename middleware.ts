import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { publicRoutes, protectedRoutes, defaultLogInRedirect, accessDenied } from "./routes";
import { getToken } from "next-auth/jwt";

const { auth } = NextAuth(authConfig);

export default auth((req)=>{
  const isLogged = !!req.auth
 

})


export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
