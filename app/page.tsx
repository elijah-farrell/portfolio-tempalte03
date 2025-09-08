"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TestimonialsDemo } from "@/components/testimonials-demo"
import { BlogSection } from "@/components/blog-section"
import { ExternalLink, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { PortfolioNavbar } from "@/components/portfolio-navbar"

export default function Portfolio() {

  return (
    <>
      {/* Framer Motion Navbar */}
      <PortfolioNavbar />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">John Doe Smith</h1>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a product designer and frontend engineer focused on creating beautiful, functional experiences that
              solve real problems for people.
            </p>

            {/* Project Thumbnails */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                <img src="/dark-modern-dashboard.png" alt="Project 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-video bg-orange-100 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                <img src="/orange-mobile-app-interface.png" alt="Project 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                <img src="/clean-web-application-design.png" alt="Project 3" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View resume
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">Experience</h2>
          <div className="space-y-8 sm:space-y-12">
            {/* Google */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Google</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Senior Frontend Engineer • April 2022 - Present
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  Working on Google Cloud Platform's web console, building engineering web tools, optimizing performance
                  and user experience.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    Node.js
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/google-logo.png" alt="Google" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Microsoft */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Microsoft</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Software Engineer • August 2020 - May 2022
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  Developed and maintained Azure web applications, engineering web tools, optimizing performance and
                  user experience.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    C#
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    Azure
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    React
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/microsoft-logo.png" alt="Microsoft" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Airbnb */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Airbnb</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Frontend Developer • January 2019 - July 2020
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  Implemented user-facing web development of Airbnb's booking platform.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    CSS
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/airbnb-logo-inspired-abstract.png" alt="Airbnb" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Shopify */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Shopify</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Frontend Web Developer • March 2018 - December 2018
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  Developed and maintained Shopify themes for enterprise clients with advanced technical requirements.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    Liquid
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    Shopify
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/shopify-logo.png" alt="Shopify" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Adobe */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Adobe</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Frontend Product Consultant • September 2016 - November 2018
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  Consulted on the design and development of Adobe's Creative Cloud web applications.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    CSS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300"
                  >
                    HTML
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/adobe-logo.png" alt="Adobe" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">People love my work</h2>
          <TestimonialsDemo />
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Want to work together on your next project? Whether you need a consultation or want to say hi, I'd love to
              hear from you.
            </p>
            <Button className="mb-8 bg-gray-100 dark:bg-[#2a2a2a] text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#1a1a1a]">
              <Mail className="w-4 h-4 mr-2" />
              Send Inquiry
            </Button>
            <div className="flex items-center justify-center gap-4">
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
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#2a2a2a]">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Built by Elijah Farrell
              </p>
            </div>
          </div>
        </footer>
    </>
  )
}
