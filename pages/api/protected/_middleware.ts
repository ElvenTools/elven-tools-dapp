// This middleware is to protect the proxied api to be called only by the same host
// In the future it could get more logic, for example JWT tokens, etc.

import { NextRequest, NextResponse } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const authorization = req.headers.get('authorization');

  const errorRes = new NextResponse(
    JSON.stringify({ error: 'Unauthorized!' }),
    {
      headers: {
        'content-type': 'application/json',
      },
      status: 401,
    }
  );

  if (!authorization) return errorRes;

  try {
    const payload = jwt.verify(
      authorization.split('Bearer ')[1],
      process.env.JWT_SECRET ?? 'jsonwebtokensecret'
    );

    return NextResponse.next().cookie(
      'address',
      (payload as JwtPayload)?.address
    );
  } catch (error) {
    return errorRes;
  }
}
