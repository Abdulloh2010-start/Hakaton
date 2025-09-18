import { NextResponse } from "next/server";

export async function GET() {
  const redirectUrl = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${process.env.YAHOO_CLIENT_ID}&redirect_uri=${process.env.NEXTAUTH_URL}/api/auth/yahoo/callback&response_type=code&scope=openid%20email%20profile`;
  return NextResponse.redirect(redirectUrl);
}