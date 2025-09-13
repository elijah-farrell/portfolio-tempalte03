"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function DiagonalStripes() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use CSS custom properties to prevent flash
  // Always render with CSS variables that will be updated by the theme
  const displayTheme = mounted ? currentTheme : 'light'
  
  // Colors - white stripes with gray borders
  const lightBackColor = '#ffffff'
  const lightForeColor = '#ffffff'
  const darkBackColor = '#ffffff'
  const darkForeColor = '#ffffff'
  
  const backColor = displayTheme === 'dark' ? darkBackColor : lightBackColor
  const foreColor = displayTheme === 'dark' ? darkForeColor : lightForeColor
  
  // Create darker shade function
  const shadeColor = (color: string, percent: number) => {
    const num = parseInt(color.replace("#", ""), 16)
    const amt = Math.round(2.55 * percent)
    const R = (num >> 16) - amt
    const G = (num >> 8 & 0x00FF) - amt
    const B = (num & 0x0000FF) - amt
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)
  }
  
  const backShade = shadeColor(backColor, 10)
  const foreShade = shadeColor(foreColor, 10)
  
  return (
    <>
      {/* Left diagonal stripes */}
      <div 
        className="absolute -left-[19px] md:-left-[31px] top-0 w-[19px] md:w-[31px] h-full border-l border-r overflow-hidden z-[70] diagonal-stripes-left"
        style={{
          willChange: 'auto'
        }}
      />
      
      {/* Right diagonal stripes */}
      <div 
        className="absolute -right-[19px] md:-right-[31px] top-0 w-[19px] md:w-[31px] h-full border-l border-r overflow-hidden z-[70] diagonal-stripes-right"
        style={{
          willChange: 'auto'
        }}
      />
    </>
  )
}