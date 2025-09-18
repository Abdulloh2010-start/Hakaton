import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) return NextResponse.json({ error: "Нет кода" }, { status: 400 });

  const res = await fetch("https://graph.facebook.com/v17.0/oauth/access_token?" + new URLSearchParams({
    client_id: process.env.FACEBOOK_CLIENT_ID!,
    client_secret: process.env.FACEBOOK_CLIENT_SECRET!,
    redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/facebook/callback`,
    code,
  }));

  const data = await res.json();
  return NextResponse.json(data);
}