"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import "@/styles/Profile.scss";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="loading">Загрузка...</p>;
  if (!session) return <p className="loading">Вы не вошли в систему</p>;

  return (
    <div className="profile-page">
      <h1>Профиль пользователя</h1>
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
        <p><span>Имя:</span> {session.user?.name || "Не указано"}</p>
        <p><span>Email:</span> {session.user?.email || "Не указано"}</p>
      </div>
      <button className="logout-btn" onClick={() => signOut({ callbackUrl: "/" })}>
        Выйти
      </button>
    </div>
  );
}