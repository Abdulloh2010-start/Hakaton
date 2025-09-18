import "@/styles/NotFound.scss";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена | Hakaton",
  description: "Упс! Страница, которую вы ищете, не существует.",
  keywords: ["404", "not found", "страница не найдена", "Hakaton"],
  openGraph: {
    title: "Страница не найдена | Hakaton",
    description: "Упс! Страница, которую вы ищете, не существует.",
    url: "https://hakaton.vercel.app/not-found",
    siteName: "Hakaton",
    images: ["/icon512_rounded.png"],
  },
};

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link href="/" className="btn">На главную</Link>
    </div>
  );
}