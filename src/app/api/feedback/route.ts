import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const formSubmitUrl = "https://formsubmit.io/send/sobirjonova757@gmail.com";

    const urlSearchParams = new URLSearchParams(formData as any);
    const body = urlSearchParams.toString();

    const res = await fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: body,
    });

    if (!res.ok) {
      console.error(`FormSubmit.io error: ${res.status} ${await res.text()}`);
      return NextResponse.json({ error: "Ошибка при отправке" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Серверная ошибка:", err);
    return NextResponse.json({ error: "Серверная ошибка" }, { status: 500 });
  }
}