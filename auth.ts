import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { prisma } from "@/lib/prisma";
import { getUser } from "./lib/prismaQueries";
import { DefaultSession } from "next-auth";
import { Role } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: Role;
  id: String;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    /*    async redirect({ url, baseUrl }) {
      return baseUrl
    }, */

    async session({ session, user, token }) {
      if (!token.sub || !token.email) {
        return session;
      }

      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }

      session.user.name = token.name;
      session.user.email = token.email;
      session.user.id=token.id as string 

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (!token.sub) {
        return token;
      }

      const findUser = await getUser({ type: "id", value: token.sub });

      if (!findUser) {
        return token;
      }

      token.role = findUser.role;
      token.name = findUser.userName;
      token.id=findUser.id

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
