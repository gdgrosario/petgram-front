import { NextRequest, NextResponse } from 'next/server';
import { protectedRoutes } from '../routes/protected.routes';
import jwt from '@tsndr/cloudflare-worker-jwt';

const secretJWT = process.env.JWT_SECRET

export default function middleware (req:NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const { cookies } = req

  const userToken = cookies.user_token

  if (pathname.includes('/Auth/SignIn') || pathname.includes('/Auth/SignUp')) {
    try {
     if(userToken) {
       jwt.verify(userToken, secretJWT)
       return NextResponse.redirect(`${origin}/`)
      }
      else return NextResponse.next()
    } catch (error) {
      return NextResponse.next()
    }
  }

  for (const protectedRoute of protectedRoutes) {
    if (pathname.includes(protectedRoute)) {
      try {
        if(userToken) {
          jwt.verify(userToken, secretJWT)
          return NextResponse.next()
        }else {
          return NextResponse.redirect(`${origin}/Auth/SignIn`)
        }
      } catch (err) {
        return NextResponse.redirect(`${origin}/Auth/SignIn`)
      }
    }
  }

  return NextResponse.next()
}
