"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { ThemeToggleButton, useThemeTransition } from "@/components/ui/theme-toggle-button"

const DarkModeToggle = React.memo(() => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(true) // Start as true to prevent shifting
  const { startTransition } = useThemeTransition()

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

  // Always render the same button structure to prevent layout shifts
  const currentTheme = mounted && theme ? (theme === "light" ? "light" : "dark") : "light"

  return (
    <ThemeToggleButton
      theme={currentTheme}
      onClick={mounted ? handleThemeChange : () => {}}
      size="sm"
      variant="circle"
      start="top-right"
      className="bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-800"
    />
  )
})

DarkModeToggle.displayName = 'DarkModeToggle'

export { DarkModeToggle }
