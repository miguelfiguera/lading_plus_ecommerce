import authConfig from "@/auth.config"
import NextAuth from "next-auth"

const {auth} = NextAuth(authConfig)

export default auth((req) => {
const isLoggedIn=!!req.auth
console.log("ROUTE: ", req.nextUrl.pathname)
console.log("Logged ? ", isLoggedIn)

})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}