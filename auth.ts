import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "@/auth.config"
import {prisma} from '@/lib/prisma'

//const prismaClient = new PrismaClient()

export const { handlers:{GET,POST}, auth,signIn,signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})