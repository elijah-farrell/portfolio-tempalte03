import type React from "react"
import type { Metadata } from "next"
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
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=satoshi:300,400,500,600,700" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-satoshi">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PortfolioNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
