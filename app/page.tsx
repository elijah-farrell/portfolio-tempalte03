"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { TestimonialsDemo } from "@/components/testimonials-demo"
import { BlogSection } from "@/components/blog-section"
import { ExternalLink, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import { Card as HeroCard, CardHeader, CardFooter, Button as HeroButton } from "@heroui/react"
import Image from "next/image"

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors border-none">
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-5xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[15px] border-l-[15px] md:border-r-[30px] md:border-l-[30px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />
        
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
          </div>

          {/* Project Cards - 3 Columns on Desktop, 1 on Mobile */}
          <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-3 mb-8">
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web Design</p>
                <h4 className="text-white font-semibold text-xl">Modern Dashboard</h4>
              </CardHeader>
              <Image
                alt="Modern dashboard design"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>
            
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Mobile App</p>
                <h4 className="text-white font-semibold text-xl">iOS Interface</h4>
              </CardHeader>
              <Image
                alt="Mobile app interface"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>
            
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web Design</p>
                <h4 className="text-white font-semibold text-xl">Portfolio Site</h4>
              </CardHeader>
              <Image
                alt="Portfolio website"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/portfolio.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>
          </div>

          <div className="max-w-2xl">
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
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Senior Frontend Engineer • March 2024 - Present
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
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
                <img src="/google-g-2015.svg" alt="Google" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Microsoft */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Microsoft</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Software Engineer • June 2022 - February 2024
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Airbnb */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Airbnb</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Frontend Developer • January 2021 - May 2022
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
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
                <img src="/airbnb-1.svg" alt="Airbnb" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Shopify */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Shopify</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Frontend Web Developer • March 2020 - December 2020
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
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
              <div className="flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/shopify.svg" alt="Shopify" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* Adobe */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Adobe</h3>
                </div>
                <p className="text-xs sm:text-sm text-black dark:text-white mb-2">
                  Frontend Product Consultant • September 2019 - November 2020
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
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
              <div className="flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/adobe-pure.svg" alt="Adobe" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* Testimonials Section */}
        <section className="py-8 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">People love my work</h2>
          </div>
          <div className="w-full">
            <TestimonialsDemo />
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Want to work together on your next project? Whether you need a consultation or want to say hi, I'd love to
              hear from you.
            </p>
            <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent">
              <Mail className="w-4 h-4 mr-2" />
              Send Inquiry
            </Button>
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
