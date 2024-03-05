import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import CredentialsProvider from '@auth/core/providers/credentials'
import { validateUser } from "./lib/prismaQueries"


export default {
  providers: [GitHub, CredentialsProvider({
    name: 'credentials',
    credentials: {
      email: { label: 'email', type: 'text', placeholder: 'email@example.com' },
      password: { label: 'Password', type: 'password', placeholder: '********' },
    },
    async authorize(credentials, req): Promise<any | null> {
      //conditional to reduce the number of types infered by
      if (typeof credentials.email !== 'string' || typeof credentials.password !== 'string') {
        throw new Error('Invalid Credentials')
      }
      if (credentials) {
        const user = await validateUser({ email: credentials.email, password: credentials.password })
        if (user.value) {
          return user.user
        } else {
          return null
        }
      }

    }

  })],
  pages: {
    signIn: '/login'
  }
} satisfies NextAuthConfig