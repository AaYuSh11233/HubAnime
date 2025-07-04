import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HubAnime - Premium Anime Marketplace",
  description:
    "Discover unique anime merchandise from talented creators worldwide. Premium figures, custom art, clothing, and collectibles.",
  keywords: "anime, marketplace, figures, art, clothing, collectibles, otaku, manga, custom, handmade",
  authors: [{ name: "HubAnime Team" }],
  creator: "HubAnime",
  publisher: "HubAnime",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hubanime.com",
    siteName: "HubAnime",
    title: "HubAnime - Premium Anime Marketplace",
    description: "Discover unique anime merchandise from talented creators worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HubAnime - Premium Anime Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HubAnime - Premium Anime Marketplace",
    description: "Discover unique anime merchandise from talented creators worldwide.",
    images: ["/og-image.jpg"],
    creator: "@hubanime",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8B5CF6",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
