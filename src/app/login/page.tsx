"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import "@/styles/Login.scss";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("email", {
      email,
      redirect: false,
      callbackUrl: "/profile",
    });

    setLoading(false);

    if (res?.ok) {
      alert("Проверь почту — ссылка отправлена.");
    } else {
      alert("Ошибка, попробуйте снова.");
    }
  };

  const signInProvider = async (provider: "google" | "github" | "facebook") => {
    await signIn(provider, { callbackUrl: "/profile" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

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
          <input
            type="email"
            placeholder="you@mail.com"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Отправляем..." : "Войти по email"}
        </button>
      </form>
    </div>
  );
}