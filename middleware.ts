import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {cookies} from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies()
  const token = cookieStore.get('auth_token')

  if (!token && !request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};