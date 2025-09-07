"use client"

import { useEffect } from "react"

export function ElementMover({ isScrolled }: { isScrolled: boolean }) {
  useEffect(() => {
    const animateElements = () => {
      // Get original elements
      const originalProfile = document.getElementById('original-profile')
      const originalToggle = document.getElementById('original-toggle')
      const originalAbout = document.getElementById('original-about')
      const originalProjects = document.getElementById('original-projects')
      const originalBlog = document.getElementById('original-blog')
      const originalContact = document.getElementById('original-contact')

      if (isScrolled) {
        // Hide original elements when navbar appears
        const elements = [originalProfile, originalToggle, originalAbout, originalProjects, originalBlog, originalContact]
        elements.forEach((element) => {
          if (element) {
            element.style.opacity = '0'
            element.style.transition = 'opacity 0.3s ease-out'
          }
        })
      } else {
        // Show original elements when navbar disappears
        const elements = [originalProfile, originalToggle, originalAbout, originalProjects, originalBlog, originalContact]
        elements.forEach((element) => {
          if (element) {
            element.style.opacity = '1'
            element.style.transition = 'opacity 0.3s ease-out'
          }
        })
      }
    }

    // Small delay to ensure DOM is ready
    setTimeout(animateElements, 10)
  }, [isScrolled])

  return null
}