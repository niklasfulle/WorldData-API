import { db } from '@/lib/db/prisma';
import { withAuth } from 'next-auth/middleware'
import { getSession } from 'next-auth/react';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server'

export default withAuth(
  async function middleware(req) {
    // relative path
    const pathname = req.nextUrl.pathname

    // get session token
    const sessionToken = req.cookies.get('next-auth.session-token')

    // Manage route protection
    const isAuth = !!sessionToken

    // Manage protected routes
    const sensitiveRoutes = ['/dashboard', '/change-password', '/admin']
    const notWithSession = ['/login', '/register', '/forgot-password', '/confirm-email']

    // Check if user is authenticated and trying to access a sensitive route
    if (
      !isAuth &&
      sensitiveRoutes.some((route) => pathname.startsWith(route))
    ) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    // Check if user is authenticated and trying to access a route that is not allowed with session
    if (
      isAuth &&
      notWithSession.some((route) => pathname.startsWith(route))
    ) {
      return NextResponse.redirect(new URL('/', req.url))
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
  matcher: ['/', '/admin', '/change-password', '/login', '/register', '/forgot-password/:path*', '/confirm-email/:path*', '/dashboard/:path*', '/api/:path*'],
}