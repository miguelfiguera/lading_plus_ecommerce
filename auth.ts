import NextAuth from "next-auth"
import GitHub from "@auth/core/providers/github"
import Credentials from "@auth/core/providers/credentials"
import Google from "@auth/core/providers/google"


export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [GitHub,Credentials,Google],
})