import type { Metadata } from "next";
import ClientSessionProvider from "@/app/providers/ClientSessionProvider";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Hakaton App",
  description: "Веб-приложение для хакатона: быстрый доступ, PWA поддержка и удобный интерфейс.",
  keywords: ["hakaton", "pwa", "next.js", "app"],
  authors: [{ name: "Hakaton Team" }],
  metadataBase: new URL("https://hakaton-iota.vercel.app"),
  openGraph: {
    title: "Hakaton App",
    description: "Веб-приложение для хакатона: быстрый доступ, PWA поддержка и удобный интерфейс.",
    url: "https://hakaton-iota.vercel.app",
    siteName: "Hakaton App",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hakaton App Preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hakaton",
    creator: "@hakaton",
    title: "Hakaton App",
    description: "Веб-приложение для хакатона: быстрый доступ, PWA поддержка и удобный интерфейс.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon512_rounded.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon512_rounded.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon512_maskable.png",
  },
  appleWebApp: { title: "Hakaton App", statusBarStyle: "black-translucent" },
  category: "app",
  alternates: {
    canonical: "https://hakaton-iota.vercel.app",
    languages: { "en-US": "https://hakaton-iota.vercel.app/en" },
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet" />
      </head>
      <body>
        <ClientSessionProvider>
          {children}
          <Chatbot />
        </ClientSessionProvider>
      </body>
    </html>
  );
};