import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import "./globals.css"

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PortfolioNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
