"use client";

import Link from "next/link";
import "@/styles/Error.scss";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="error-page">
      <h1>500 – Что-то пошло не так</h1>
      <p>{error.message || "Неизвестная ошибка"}</p>
      <div className="actions">
        <button onClick={() => reset()}>Попробовать снова</button>
        <Link href="/">На главную</Link>
      </div>
    </div>
  );
};