"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import "@/styles/Profile.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfileComponent() {
  const { data: session, status } = useSession();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferred =
      saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  if (status === "loading") return <p className="loading">Загрузка...</p>;
  if (!session)
    return (
      <p className="loading">
        Вы не вошли в систему <Link href="/">На главную</Link>
      </p>
    );

  return (
    <div className="profile-page">
      <h1>
        Профиль пользователя <Link href="/">Home</Link>
      </h1>
      <div className="user-info">
        {session.user?.image && (
          <Image
            className="avatar"
            src={session.user.image}
            alt="Аватар"
            width={100}
            height={100}
            priority
          />
        )}
        <p>
          <span>Имя:</span> {session.user?.name || "Не указано"}
        </p>
        <p>
          <span>Email:</span> {session.user?.email || "Не указано"}
        </p>
      </div>
      <div className="actions">
        <button className="logout-btn" onClick={() => signOut({ callbackUrl: "/" })}>
          Выйти
        </button>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️ Светлая" : "🌙 Тёмная"}
        </button>
      </div>
    </div>
  );
};