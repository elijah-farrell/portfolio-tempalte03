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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">Transitioning from Frontend to Full-Stack</h1>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-6 leading-relaxed">
              My journey from focusing solely on frontend development to becoming a full-stack engineer. Tips and resources that helped along the way.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Aug 15, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-green-100 to-green-200 dark:from-[#1a3a2a] dark:to-[#2a4a3a] rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 dark:from-[#3a5a4a] dark:to-[#4a6a5a] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🚀</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Full-Stack Journey</p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-6 pb-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The transition from frontend to full-stack development wasn't just about learning new technologies—it was about changing my entire mindset. As a frontend developer, I was focused on user experience and visual design. Becoming full-stack meant thinking about data flow, system architecture, and the entire user journey.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Start with Node.js</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Node.js was my gateway to backend development. Since I already knew JavaScript, it felt like a natural progression. I started with Express.js for building APIs and gradually moved to more complex frameworks like Next.js for full-stack applications.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Database Fundamentals</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Understanding databases was the biggest learning curve. I started with MongoDB because of its JSON-like structure, which felt familiar coming from JavaScript. Later, I learned SQL and PostgreSQL, which gave me a deeper understanding of data relationships and optimization.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">The Full-Stack Mindset</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The biggest shift was learning to think about the entire application architecture. Frontend developers often focus on the user interface, but full-stack developers need to consider performance, security, scalability, and maintainability across the entire stack.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The journey from frontend to full-stack is challenging but incredibly rewarding. It opens up new opportunities and gives you a deeper understanding of how web applications work. Start small, build projects, and don't be afraid to make mistakes—that's how you learn.
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
