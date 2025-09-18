import type { Metadata } from "next";
import PaymentComponent from "./payment";

export const metadata: Metadata = {
  title: "Оплата | Hakaton",
  description: "Оплатите доступ к платным функциям и контенту на Hakaton.",
  keywords: ["оплата", "payment", "Hakaton", "платеж", "подписка"],
  openGraph: {
    title: "Оплата | Hakaton",
    description: "Оплатите доступ к платным функциям и контенту на Hakaton.",
    url: "https://hakaton.vercel.app/payment",
    siteName: "Hakaton",
    images: ["/icon512_rounded.png"],
  },
};

export default function Payment() {
    return <PaymentComponent /> ;
};