import type { NextAuthConfig } from "next-auth";
import Credentials from "@auth/core/providers/credentials";
import { validateUser } from "@/lib/prismaQueries";
import { logAction } from "./lib/ServerLogAction";

export default {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials): Promise<any | null> {
        //conditional to reduce the number of types infered by
        if (
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          return null;
        }
        const { user, value } = await validateUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (!value) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;
