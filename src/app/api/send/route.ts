import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to, subject, text } = await req.json();

    console.log("Email send request:", { to, subject, text });

    return NextResponse.json({ success: true, message: "Здесь будет отправка email" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}