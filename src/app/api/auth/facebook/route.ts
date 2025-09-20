import { NextResponse } from "next/server";

export async function GET() {
  const redirectUri = `${process.env.NEXTAUTH_URL}/api/auth/callback/facebook`;

  if (!process.env.FACEBOOK_CLIENT_ID) {
    return NextResponse.json({ error: "Missing FACEBOOK_CLIENT_ID" }, { status: 500 });
  }

  const redirectUrl = `https://www.facebook.com/v17.0/dialog/oauth?` +
    `client_id=${encodeURIComponent(process.env.FACEBOOK_CLIENT_ID)}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `response_type=code&` +
    `scope=${encodeURIComponent("email,public_profile")}`;

  return NextResponse.redirect(redirectUrl);
}