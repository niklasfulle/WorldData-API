import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { db } from './lib/prisma'

export default withAuth(
  async function middleware(req) {
    const pathname = req.nextUrl.pathname // relative path
    // get session token
    const sessionToken = req.cookies.get('next-auth.session-token')

    // Manage route protection
    //const token = await getToken({ req })
    const isAuth = !!sessionToken

    const sensitiveRoutes = ['/dashboard']

    if (
      !isAuth &&
      sensitiveRoutes.some((route) => pathname.startsWith(route))
    ) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/', '/login', '/dashboard/:path*', '/api/:path*'],
}