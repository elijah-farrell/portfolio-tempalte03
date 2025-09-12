"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const DarkModeToggle = React.memo(() => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [theme, setTheme])

  // Show moon icon by default, or based on theme
  const isLight = theme === "light"

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="w-9 h-9 p-0 relative overflow-hidden"
      >
        <div className="relative w-4 h-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <Sun className="h-4 w-4" />
          </div>
        </div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleThemeChange}
      className="w-9 h-9 p-0 relative overflow-hidden hover:scale-105 transition-transform duration-200"
    >
      <div className="relative w-4 h-4">
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          isLight ? "opacity-100" : "opacity-0"
        }`}>
          <Sun className="h-4 w-4" />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          !isLight ? "opacity-100" : "opacity-0"
        }`}>
          <Moon className="h-4 w-4" />
        </div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
})

DarkModeToggle.displayName = 'DarkModeToggle'

export { DarkModeToggle }
