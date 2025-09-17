import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: [],
  authors: [{ name: "" }],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "",
    description: "",
    url: "https://example.com",
    siteName: "",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: ""
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    title: "",
    description: "",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    shortcut: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png"
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  category: "",
  alternates: {
    canonical: "https://example.com",
    languages: {
      "en-US": "https://example.com/en"
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
        <meta name="application-name" content="" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  )
};