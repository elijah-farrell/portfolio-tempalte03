"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function DiagonalStripes() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Force re-render when theme changes to prevent pattern breaking
  useEffect(() => {
    if (mounted) {
      // Small delay to ensure theme has fully applied
      const timer = setTimeout(() => {
        setScrollProgress(prev => prev) // Trigger re-render
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentTheme, mounted])

  if (!mounted) {
    return null
  }
  
  // Colors - white stripes with gray borders
  const lightBackColor = '#ffffff'
  const lightForeColor = '#ffffff'
  const darkBackColor = '#ffffff'
  const darkForeColor = '#ffffff'
  
  const backColor = currentTheme === 'dark' ? darkBackColor : lightBackColor
  const foreColor = currentTheme === 'dark' ? darkForeColor : lightForeColor
  
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
      {/* Left diagonal stripes with scroll animation */}
      <div 
        className="absolute -left-[32px] top-0 w-[32px] h-full border-l border-r shadow-sm overflow-hidden z-50"
        style={{
          borderLeftColor: currentTheme === 'dark' ? '#2a2a2a' : '#f5f5f5',
          borderRightColor: currentTheme === 'dark' ? '#2a2a2a' : '#f5f5f5',
          boxShadow: currentTheme === 'dark' 
            ? 'inset 1px 0 0 rgba(42, 42, 42, 0.3), inset -1px 0 0 rgba(42, 42, 42, 0.3)'
            : 'inset 1px 0 0 rgba(229, 231, 235, 0.3), inset -1px 0 0 rgba(229, 231, 235, 0.3)',
          backgroundImage: currentTheme === 'dark' 
            ? 'linear-gradient(45deg, #2a2a2a 7.14%, #171717 7.14%, #171717 50%, #2a2a2a 50%, #2a2a2a 57.14%, #171717 57.14%, #171717 100%)'
            : 'linear-gradient(45deg, #f5f5f5 7.14%, #ffffff 7.14%, #ffffff 50%, #f5f5f5 50%, #f5f5f5 57.14%, #ffffff 57.14%, #ffffff 100%)',
          backgroundSize: '9.90px 9.90px'
        }}
      >
        {/* Animated progress overlay */}
        <div 
          className="absolute top-0 left-0 w-full transition-all duration-300 ease-out"
          style={{
            height: `${scrollProgress * 100}%`,
            backgroundColor: currentTheme === 'dark' ? 'rgba(42, 42, 42, 0.2)' : 'rgba(229, 231, 235, 0.2)'
          }}
        />
      </div>
      
      {/* Right diagonal stripes with scroll animation */}
      <div 
        className="absolute -right-[32px] top-0 w-[32px] h-full border-l border-r shadow-sm overflow-hidden z-50"
        style={{
          borderLeftColor: currentTheme === 'dark' ? '#2a2a2a' : '#f5f5f5',
          borderRightColor: currentTheme === 'dark' ? '#2a2a2a' : '#f5f5f5',
          boxShadow: currentTheme === 'dark' 
            ? 'inset 1px 0 0 rgba(42, 42, 42, 0.3), inset -1px 0 0 rgba(42, 42, 42, 0.3)'
            : 'inset 1px 0 0 rgba(229, 231, 235, 0.3), inset -1px 0 0 rgba(229, 231, 235, 0.3)',
          backgroundImage: currentTheme === 'dark' 
            ? 'linear-gradient(45deg, #2a2a2a 7.14%, #171717 7.14%, #171717 50%, #2a2a2a 50%, #2a2a2a 57.14%, #171717 57.14%, #171717 100%)'
            : 'linear-gradient(45deg, #f5f5f5 7.14%, #ffffff 7.14%, #ffffff 50%, #f5f5f5 50%, #f5f5f5 57.14%, #ffffff 57.14%, #ffffff 100%)',
          backgroundSize: '9.90px 9.90px'
        }}
      >
        {/* Animated progress overlay */}
        <div 
          className="absolute top-0 left-0 w-full transition-all duration-300 ease-out"
          style={{
            height: `${scrollProgress * 100}%`,
            backgroundColor: currentTheme === 'dark' ? 'rgba(42, 42, 42, 0.2)' : 'rgba(229, 231, 235, 0.2)'
          }}
        />
      </div>
    </>
  )
}
