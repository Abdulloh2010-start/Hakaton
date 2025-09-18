import ProfileComponent from "./profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Профиль | Hakaton",
  description: "Управляйте своим профилем, настройками и аккаунтом.",
  keywords: ["профиль", "аккаунт", "пользователь", "Hakaton"],
  openGraph: {
    title: "Профиль | Hakaton",
    description: "Управляйте своим профилем, настройками и аккаунтом.",
    url: "https://hakaton.vercel.app/profile",
    siteName: "Hakaton",
    images: ["/icon512_rounded.png"],
  },
};

export default function Profile() {
    return <ProfileComponent />;
};