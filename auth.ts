import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "@/auth.config"
import {prisma} from '@/lib/prisma'
import { getUser } from "./lib/prismaQueries"

//const prismaClient = new PrismaClient()

export const { handlers:{GET,POST}, auth,signIn,signOut } = NextAuth({
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
 /*    async redirect({ url, baseUrl }) {
      return baseUrl
    }, */
    async session({ session, user, token }) {

      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if(!token.sub){
        return token
      }

      const findUser = await getUser({type:'id',value:token.sub})

      if(!findUser){return token}

      token.role=findUser.role
      token.name=findUser.userName

      return token
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})