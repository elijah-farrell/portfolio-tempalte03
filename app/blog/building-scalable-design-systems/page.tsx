"use client"

import { Button } from "@/components/ui/button"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import { ArrowLeft, Calendar, Clock, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors border-none">
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-5xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[15px] border-l-[15px] md:border-r-[30px] md:border-l-[30px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />
        
        {/* Framer Motion Navbar */}
        <PortfolioNavbar />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">Building Scalable Design Systems</h1>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-6 leading-relaxed">
              How I approach creating design systems that grow with your product and team. Lessons learned from building systems at Google and Microsoft.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Sep 3, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#2a2a2a] dark:to-[#3a3a3a] rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-[#4a4a4a] dark:to-[#5a5a5a] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">DS</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Design Systems</p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-6 pb-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Design systems are more than just a collection of components and guidelines. They're living, breathing ecosystems that evolve with your product and team. After building design systems at both Google and Microsoft, I've learned that scalability isn't just about technical implementation—it's about creating systems that people actually want to use.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Start with Principles, Not Components</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The biggest mistake I see teams make is jumping straight into building components without establishing clear design principles. At Google, we spent months defining our design language before writing a single line of code. This foundation became our north star, guiding every decision from color choices to interaction patterns.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Documentation is Your Secret Weapon</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              A design system without documentation is like a library without a catalog. At Microsoft, we learned that comprehensive documentation wasn't just helpful—it was essential for adoption. We included usage guidelines, accessibility considerations, and real-world examples for every component.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Build for Change</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The only constant in design systems is change. Products evolve, teams grow, and requirements shift. Building flexibility into your system from day one will save you countless hours of refactoring later. Version your components, maintain backward compatibility, and always have a migration path.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Creating scalable design systems is an ongoing journey, not a destination. The key is to start small, iterate often, and always keep your users—both designers and developers—at the center of your decisions.
            </p>
          </div>
        </article>

        {/* Back to Blog */}
        <section className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="max-w-2xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Built by Elijah Farrell
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
