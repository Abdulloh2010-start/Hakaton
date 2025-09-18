import "@/styles/NotFound.scss";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link href="/" className="btn">На главную</Link>
    </div>
  );
}