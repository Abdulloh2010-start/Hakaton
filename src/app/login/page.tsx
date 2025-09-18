import LoginComponent from "./login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход | Hakaton",
  description: "Войдите в систему с помощью Google, GitHub, Facebook или Email.",
  keywords: ["вход", "login", "auth", "next-auth", "Hakaton"],
  openGraph: {
    title: "Вход | Hakaton",
    description: "Войдите в систему с помощью Google, GitHub, Facebook или Email.",
    url: "https://hakaton.vercel.app/login",
    siteName: "Hakaton",
    images: ["/icon512_rounded.png"],
  },
};

export default function Login() {
    return <LoginComponent />;
};