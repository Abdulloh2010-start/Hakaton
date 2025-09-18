import "@/styles/Home.scss";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная | Hakaton",
  description: "Добро пожаловать на сайт Hakaton! 🚀",
  keywords: ["Hakaton", "главная", "проект", "Next.js", "PWA"],
  openGraph: {
    title: "Главная | Hakaton",
    description: "Добро пожаловать на сайт Hakaton! 🚀",
    url: "https://hakaton.vercel.app/",
    siteName: "Hakaton",
    images: ["/icon512_rounded.png"],
  },
};

export default function Home() {
  return (
    <div className="home-page">
      <h1>Добро пожаловать!</h1>
      <p>Выберите действие ниже, чтобы продолжить.</p>
      <div className="buttons">
        <Link href="/login" className="btn">Войти</Link>
        <Link href="/profile" className="btn outline">Профиль</Link>
      </div>
    </div>
  );
}