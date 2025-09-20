"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import "@/styles/Login.scss";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState<"login" | "register" | "verify">("login");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (mode === "login" || mode === "register") {
      const res = await signIn("email", {
        email,
        redirect: true,
        callbackUrl: "/profile",
      });
      setLoading(false);

      if (res?.ok) {
        setMode("verify");
      } else {
        alert("Ошибка, попробуйте снова");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>
          {mode === "login"
            ? "Вход"
            : mode === "register"
            ? "Регистрация"
            : "Подтверди email"}
        </h1>

        {mode !== "verify" && (
          <form onSubmit={onSubmit} className="auth-form">
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
              {loading
                ? "Отправляем..."
                : mode === "login"
                ? "Войти"
                : "Зарегистрироваться"}
            </button>
          </form>
        )}

        {mode === "verify" && (
          <p className="verify-msg">
            Мы отправили ссылку для входа на <b>{email}</b>. Проверь почту ✉️
          </p>
        )}

        {mode !== "verify" && (
          <div className="switch-mode">
            {mode === "login" ? (
              <p>
                Нет аккаунта?{" "}
                <button onClick={() => setMode("register")}>Регистрация</button>
              </p>
            ) : (
              <p>
                Уже есть аккаунт?{" "}
                <button onClick={() => setMode("login")}>Войти</button>
              </p>
            )}
          </div>
        )}

        <div className="providers">
          <button onClick={() => signIn("google", { callbackUrl: "/profile" })}>
            Войти через Google
          </button>
          <button onClick={() => signIn("github", { callbackUrl: "/profile" })}>
            Войти через GitHub
          </button>
          <button
            onClick={() => signIn("facebook", { callbackUrl: "/profile" })}
          >
            Войти через Facebook
          </button>
        </div>

        <Link href="/">← На главную</Link>
      </div>
    </div>
  );
}