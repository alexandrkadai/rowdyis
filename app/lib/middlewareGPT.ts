// middleware.js
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // const url = req.nextUrl.clone();
  let uuid = req.cookies.get('uuid')?.value;

  if (!uuid || uuid === undefined) {
    uuid = uuidv4();
    const response = NextResponse.next();
    response.cookies.set('uuid', uuid, { httpOnly: true, path: '/' });
    return response;
  }

  console.log(uuid);
  return NextResponse.next();
}

export const config = {
  matcher: '/shop',
};
