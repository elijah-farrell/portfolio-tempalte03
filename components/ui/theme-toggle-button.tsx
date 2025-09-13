"use client"

import React, { useCallback, useEffect, useState } from "react"
import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

type Theme = 'light' | 'dark'

type Variant = 'circle' | 'circle-blur' | 'polygon' | 'gif-mask'
type StartPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'

interface ThemeToggleButtonProps {
  theme: Theme
  onClick: () => void
  variant?: Variant
  start?: StartPosition
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const useThemeTransition = () => {
  const startTransition = useCallback((callback: () => void) => {
    if (!document.startViewTransition) {
      callback()
      return
    }

    document.startViewTransition(callback)
  }, [])

  return { startTransition }
}

export const ThemeToggleButton = React.memo(({
  theme,
  onClick,
  variant = 'circle',
  start = 'center',
  className,
  size = 'md'
}: ThemeToggleButtonProps) => {
  const [mounted, setMounted] = useState(true) // Start as true to prevent layout shifts
  const { startTransition } = useThemeTransition()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = useCallback(() => {
    startTransition(onClick)
  }, [onClick, startTransition])

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-12 h-12'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  // Always render the same button structure to prevent layout shifts
  // if (!mounted) {
  //   return (
  //     <button
  //       className={cn(
  //         "relative rounded-full bg-background hover:bg-accent transition-colors",
  //         sizeClasses[size],
  //         className
  //       )}
  //       disabled
  //     >
  //       <Sun className={cn("text-foreground", iconSizes[size])} />
  //     </button>
  //   )
  // }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "theme-toggle-classic",
        className
      )}
      style={{
        viewTransitionName: `theme-toggle-${variant}-${start}`
      }}
      data-theme-toggle="true"
      data-theme={theme}
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun 
          className={cn(
            "absolute text-foreground transition-opacity duration-200",
            iconSizes[size],
            theme === 'light' 
              ? "opacity-100" 
              : "opacity-0"
          )}
        />
        <Moon 
          className={cn(
            "absolute text-foreground transition-opacity duration-200",
            iconSizes[size],
            theme === 'dark' 
              ? "opacity-100" 
              : "opacity-0"
          )}
        />
      </div>
    </button>
  )
})

ThemeToggleButton.displayName = 'ThemeToggleButton'

export { useThemeTransition }
