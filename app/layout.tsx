import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import LenisScroll from "@/components/lenis-scroll"
import ReduxProvider from "@/components/redux-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HBJ Syndicate - Premium Web Development & Digital Solutions",
  description:
    "Transform your digital presence with HBJ Syndicate's expert web development, e-commerce solutions, and cutting-edge digital services. Based in Mumbai, serving clients globally.",
  keywords: "web development, e-commerce, digital solutions, Mumbai, India, responsive design, SEO, web applications",
  authors: [{ name: "HBJ Syndicate" }],
  creator: "HBJ Syndicate",
  publisher: "HBJ Syndicate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hbjsyndicate.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HBJ Syndicate - Premium Web Development & Digital Solutions",
    description: "Transform your digital presence with expert web development and cutting-edge digital solutions.",
    url: "https://hbjsyndicate.com",
    siteName: "HBJ Syndicate",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HBJ Syndicate - Web Development Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HBJ Syndicate - Premium Web Development",
    description: "Transform your digital presence with expert web development solutions.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <LenisScroll>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <WhatsAppWidget />
              <Toaster />
            </LenisScroll>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
