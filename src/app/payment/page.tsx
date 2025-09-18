import "@/styles/Payment.scss";
import type { Metadata } from "next";

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
  return (
    <div className="payment-page">
      <h1>Оплата</h1>
      <p>Выберите способ оплаты и следуйте инструкциям.</p>
      <div className="payment-buttons">
        <button>Payme</button>
        <button>Click</button>
      </div>
    </div>
  );
}