"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props}
      defaultTheme="system"
      enableSystem={true}
      storageKey="theme"
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  )
}
