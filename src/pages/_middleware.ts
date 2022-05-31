import { NextRequest, NextResponse } from 'next/server';
import { protectedRoutes } from '../routes/protected.routes';
import jwt from 'jsonwebtoken'

const secretJWT = process.env.JWT_SECRET

export default function middleware (req:NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const { cookies } = req

  const userToken = cookies.user_token

  if (pathname.includes('/Auth/SignIn') && userToken) {
    return NextResponse.redirect(`${origin}/`)
  }

  for (const protectedRoute of protectedRoutes) {
    if (pathname.includes(protectedRoute)) {
      try {
        jwt.verify(userToken, secretJWT)
        return NextResponse.next()
      } catch (err) {
        return NextResponse.redirect(`${origin}/Auth/SignIn`)
      }
    }
  }

  return NextResponse.next()
}
