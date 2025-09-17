import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Payment",
  description: "Оплата на сайте",
  keywords: ["payment", "оплата", "checkout"],
  authors: [{ name: "YourName" }],
  metadataBase: new URL("https://hakaton-iota.vercel.app"),
  openGraph: {
    title: "Payment",
    description: "Оплата на сайте",
    url: "https://hakaton-iota.vercel.app/payment",
    siteName: "Hakaton App",
    images: [
      {
        url: "https://hakaton-iota.vercel.app/og-payment.png",
        width: 1200,
        height: 630,
        alt: "Payment preview"
      }
    ],
    locale: "ru_RU",
    type: "website"
  }
}

export default function Payment() {
  return (
    <>
      <h1>Payment</h1>
    </>
  )
}