import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"
import { PersistentBackground } from "@/components/persistent-background"
import "./globals.css"

export const metadata: Metadata = {
  title: "John Doe Smith - Portfolio",
  description: "Product designer and frontend engineer portfolio",
  generator: "v0.app",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PersistentBackground>
            <PageTransition>
              {children}
            </PageTransition>
          </PersistentBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}
