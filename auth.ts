import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import credentials from "next-auth/providers/credentials"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [GitHub,credentials],
})