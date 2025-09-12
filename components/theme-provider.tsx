"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props}
      defaultTheme="system"
      enableSystem={true}
      storageKey="portfolio-theme"
      // Enhanced fallback configuration
      forcedTheme={undefined} // Allow theme switching
      enableColorScheme={true} // Enable CSS color-scheme
      disableTransitionOnChange={false} // Smooth transitions
    >
      {children}
    </NextThemesProvider>
  )
}
