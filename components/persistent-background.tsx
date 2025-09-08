"use client"

import { DiagonalStripes } from "@/components/diagonal-stripes"

interface PersistentBackgroundProps {
  children: React.ReactNode
}

export function PersistentBackground({ children }: PersistentBackgroundProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors border-none">
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-5xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[15px] border-l-[15px] md:border-r-[30px] md:border-l-[30px] relative">
        <DiagonalStripes />
        {children}
      </div>
    </div>
  )
}
