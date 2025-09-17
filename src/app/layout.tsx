import type { Metadata } from "next"

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hakaton App Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@hakaton",
    creator: "@hakaton",
    title: "Hakaton App",
    description: "Веб-приложение для хакатона: быстрый доступ, PWA поддержка и удобный интерфейс.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: [
      { url: "/icon192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon512_rounded.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/icon512_rounded.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/icon512_maskable.png"
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  category: "app",
  alternates: {
    canonical: "https://hakaton-iota.vercel.app",
    languages: {
      "en-US": "https://hakaton-iota.vercel.app/en"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Hakaton App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hakaton App" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  )
}