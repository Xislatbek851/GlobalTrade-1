import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "GLOBARA - Global Trade & Import Export Solutions",
  description:
    "GLOBARA provides comprehensive international trade solutions, connecting businesses worldwide with high-quality industrial supplies, agricultural products, and commodities. Expert import-export services from Miami to the world.",
  keywords: "import export, international trade, global sourcing, logistics, commodities trading, agricultural products, industrial supplies, Miami trade company",
  authors: [{ name: "GLOBARA" }],
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/favicon.ico",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "GLOBARA - Global Trade & Import Export Solutions",
    description: "Expert import-export services connecting businesses worldwide with high-quality products and reliable logistics solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`font-sans`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
