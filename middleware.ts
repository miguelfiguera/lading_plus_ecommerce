import authConfig from "@/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

//middleware should be fixed because it gives an error on /api/auth/[...nextauth]
//[auth][error] UnknownAction: Cannot parse action at /session .Read more at https://errors.authjs.dev#unknownaction



export default auth((req) => {
  const isLoggedIn = !!req.auth;

/*   
  console.log("ROUTE: ", req.nextUrl.pathname)*/
  console.log("Logged ? ", isLoggedIn); 
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
