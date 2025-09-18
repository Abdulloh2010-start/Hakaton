import "@/styles/Home.scss";
import Link from "next/link";

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