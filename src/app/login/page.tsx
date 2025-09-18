"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import "@/styles/Login.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("email", { email, redirect: false, callbackUrl: "/profile" });
    setLoading(false);
    alert(res?.ok ? "Проверь почту — ссылка отправлена." : "Ошибка, попробуйте снова.");
  };

  const signInProvider = async (provider: any) => signIn(provider, { callbackUrl: "/profile" });

  return (
    <div className="login-page">
      <h1>Вход</h1>
      <div className="providers">
        <button onClick={() => signInProvider("google")}>Google</button>
        <button onClick={() => signInProvider("github")}>GitHub</button>
        <button onClick={() => signInProvider("facebook")}>Facebook</button>
      </div>
      <form onSubmit={onEmail}>
        <label>
          Email
          <input type="email" placeholder="you@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit" disabled={loading}>{loading ? "Отправляем..." : "Войти по email"}</button>
      </form>
    </div>
  );
}