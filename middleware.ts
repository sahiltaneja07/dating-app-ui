import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('accessToken');

    if (request.nextUrl.pathname.startsWith('/home')) {
        if (!accessToken) {
            return NextResponse.redirect(new URL('/user/login', request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith('/user')) {
        if (accessToken) {
            return NextResponse.redirect(new URL('/home/recommendations', request.url));
        }
    }
}
