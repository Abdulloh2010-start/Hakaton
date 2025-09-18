import { NextResponse } from "next/server";

export async function GET() {
  const redirectUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXTAUTH_URL}/api/auth/google/callback&response_type=code&scope=email profile`;
  return NextResponse.redirect(redirectUrl);
}