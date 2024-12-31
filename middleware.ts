import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuthToken } from './lib/user-service';

export function middleware(request: NextRequest) {
    const authToken = getAuthToken();
    if (!authToken) {
        return NextResponse.redirect(new URL('/user/login', request.url));
    }   
}

export const config = {
    matcher: '/home/:path*',
};
