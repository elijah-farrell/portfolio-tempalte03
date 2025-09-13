"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { ThemeToggleButton, useThemeTransition } from "@/components/ui/theme-toggle-button"

const DarkModeToggle = React.memo(() => {
  const { theme, setTheme } = useTheme()
  const { startTransition } = useThemeTransition()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = React.useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light"
    
    startTransition(() => {
      setTheme(newTheme)
    })
  }, [theme, setTheme, startTransition])

  const currentTheme = mounted && theme ? (theme === "light" ? "light" : "dark") : "light"

  return (
    <ThemeToggleButton
      theme={currentTheme}
      onClick={mounted ? handleThemeChange : () => {}}
      variant="circle-blur"
      start="top-right"
      className="bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-800 border-none"
    />
  )
})

DarkModeToggle.displayName = 'DarkModeToggle'

export { DarkModeToggle }
