/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string,
      role: string,
      provider: string,
    } & DefaultSession
  }

  interface User extends DefaultUser {
    role: string,
  }
}