"use client"

import { DiagonalStripes } from "@/components/diagonal-stripes"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import { Card as HeroCard, CardHeader } from "@heroui/react"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Projects() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors border-none">
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-5xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[15px] border-l-[15px] md:border-r-[30px] md:border-l-[30px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />
        
        {/* Framer Motion Navbar */}
        <PortfolioNavbar />

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-12">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">Projects</h1>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference.
            </p>
          </div>

          {/* Project Cards - 3 Columns on Desktop, 1 on Mobile */}
          <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-3 mb-8">
            {/* Project 1 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web Design</p>
                <h4 className="text-white font-semibold text-xl">Modern Dashboard</h4>
                <p className="text-white/70 text-sm">Modern dashboard design</p>
              </CardHeader>
              <Image
                alt="Modern dashboard design"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/dark-modern-dashboard.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>
            
            {/* Project 2 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Mobile App</p>
                <h4 className="text-white font-semibold text-xl">iOS Interface</h4>
                <p className="text-white/70 text-sm">Mobile app interface</p>
              </CardHeader>
              <Image
                alt="Mobile app interface"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/orange-mobile-app-interface.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>
            
            {/* Project 3 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider drop-shadow-lg">Web App</p>
                <h4 className="text-white font-semibold text-xl drop-shadow-lg">Clean Design</h4>
                <p className="text-white/70 text-sm drop-shadow-md">Clean web application</p>
              </CardHeader>
              <Image
                alt="Clean web application"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/clean-web-application-design.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-5" />
            </HeroCard>

            {/* Project 4 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">E-commerce</p>
                <h4 className="text-white font-semibold text-xl">Online Store</h4>
                <p className="text-white/70 text-sm">E-commerce platform design</p>
              </CardHeader>
              <Image
                alt="E-commerce platform"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/placeholder.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>

            {/* Project 5 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">SaaS</p>
                <h4 className="text-white font-semibold text-xl">Analytics Tool</h4>
                <p className="text-white/70 text-sm">Data visualization dashboard</p>
              </CardHeader>
              <Image
                alt="Analytics dashboard"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/placeholder.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>

            {/* Project 6 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Mobile App</p>
                <h4 className="text-white font-semibold text-xl">Fitness Tracker</h4>
                <p className="text-white/70 text-sm">Health and wellness app</p>
              </CardHeader>
              <Image
                alt="Fitness tracking app"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/placeholder.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>

            {/* Project 7 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web Design</p>
                <h4 className="text-white font-semibold text-xl">Portfolio Site</h4>
                <p className="text-white/70 text-sm">Creative portfolio website</p>
              </CardHeader>
              <Image
                alt="Portfolio website"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/placeholder.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>

            {/* Project 8 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Web App</p>
                <h4 className="text-white font-semibold text-xl">Task Manager</h4>
                <p className="text-white/70 text-sm">Productivity application</p>
              </CardHeader>
              <Image
                alt="Task management app"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/placeholder.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>

            {/* Project 9 */}
            <HeroCard className="col-span-1 h-[380px] group cursor-pointer relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold tracking-wider">Mobile App</p>
                <h4 className="text-white font-semibold text-xl">Social Media</h4>
                <p className="text-white/70 text-sm">Social networking platform</p>
              </CardHeader>
              <Image
                alt="Social media app"
                fill
                className="z-0 object-cover group-hover:scale-105 transition-transform duration-500"
                src="/placeholder.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />
            </HeroCard>
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
