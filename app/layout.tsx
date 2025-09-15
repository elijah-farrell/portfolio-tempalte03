import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Minimal Portfolio Website Template",
  description: "Product designer and frontend engineer portfolio",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/minimal.png", type: "image/png", sizes: "32x32" },
      { url: "/minimal.png", type: "image/png", sizes: "16x16" }
    ],
    shortcut: "/minimal.png",
    apple: "/minimal.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning className="font-inter">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PortfolioNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
