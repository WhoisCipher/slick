import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(NextRequest) {
    const token = req.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect('/login');
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:path*',
};
