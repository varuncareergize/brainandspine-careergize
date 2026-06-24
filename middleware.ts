import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the session cookie we set during login
  const session = request.cookies.get('is_admin_logged_in')?.value

  const { pathname } = request.nextUrl

  // 1. If trying to access dashboard WITHOUT a session -> Redirect to Login
  if (pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 2. If already logged in and trying to access Login -> Redirect to Dashboard
  if (pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// This "matcher" tells Next.js exactly which routes to run this code on
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}