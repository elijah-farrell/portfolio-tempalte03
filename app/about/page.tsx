"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DiagonalStripes } from "@/components/diagonal-stripes"
import { Mail, Github, Linkedin, Twitter, Download, MapPin, Calendar, Code, Palette, Users } from "lucide-react"
import Image from "next/image"
import { DraggableCardDemo } from "@/components/draggable-card-demo"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0A] transition-colors border-none">
      <div className="border-gray-200 dark:border-[#2a2a2a] min-h-screen max-w-5xl mx-auto bg-white dark:bg-[#171717] shadow-sm border-r-[15px] border-l-[15px] md:border-r-[30px] md:border-l-[30px] relative" style={{ position: 'relative' }}>
        <DiagonalStripes />

         {/* Hero Section */}
         <section className="max-w-4xl mx-auto px-6 bg-white dark:bg-[#171717] pt-20 pb-4">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">About Me</h1>
            <p className="text-xl text-black dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate product designer and frontend engineer with over 5 years of experience creating beautiful, functional experiences that solve real problems for people.
            </p>
          </div>

          {/* Basic Info with Profile Picture */}
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start mb-12">
            {/* Profile Picture and Content */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 xl:gap-8 w-full xl:w-auto">
              {/* Image and Description */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 xl:gap-8 items-start sm:items-center xl:items-center">
                {/* Profile Picture */}
                <div className="flex-shrink-0 mx-auto sm:mx-0 xl:mx-0">
                  <div className="w-24 h-32 sm:w-20 sm:h-28 md:w-24 md:h-32 xl:w-28 xl:h-40 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/pfp.jpg"
                      alt="Profile picture"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4 min-w-0 text-center sm:text-left xl:text-left">
                  {/* Location and Availability - responsive layout */}
                  <div className="flex flex-col sm:flex-row xl:flex-row items-center sm:items-start xl:items-start gap-2 sm:gap-4 xl:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Available for freelance</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    I specialize in creating user-centered designs and building scalable web applications. 
                    My approach combines technical expertise with creative problem-solving to deliver 
                    products that users love and businesses need.
                  </p>
                  {/* Buttons - responsive visibility */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent whitespace-nowrap text-xs sm:text-sm">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Download Resume
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent whitespace-nowrap text-xs sm:text-sm">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Get in touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
         </section>

         {/* Draggable Cards Section */}
         <section className="max-w-4xl mx-auto px-6 pt-12 pb-6 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
           <DraggableCardDemo />
         </section>

         {/* Education Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
          
          <div className="space-y-8">
            {/* Bachelor's Degree */}
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-sm text-black dark:text-gray-300 mb-3">
                  University of California, Berkeley • Graduated Magna Cum Laude
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Focused on software engineering, algorithms, and human-computer interaction. 
                  Completed senior capstone project developing a web-based collaboration platform.
                </p>
              </div>
              <div className="flex-shrink-0 w-20 text-right">
                <div className="mb-4">
                  <span className="text-sm text-black dark:text-white">2018 - 2022</span>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mt-8">
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="UC Berkeley Campus" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Associate's Degree */}
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Associate of Science in Computer Science</h3>
                <p className="text-sm text-black dark:text-gray-300 mb-3">
                  San Francisco City College • Dean's List
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Foundation in programming fundamentals, mathematics, and computer systems. 
                  Served as president of the Computer Science Club.
                </p>
              </div>
              <div className="flex-shrink-0 w-20 text-right">
                <div className="mb-4">
                  <span className="text-sm text-black dark:text-white">2016 - 2018</span>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mt-8">
                  <img src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" alt="San Francisco City College Campus" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">Professional Journey</h2>
          
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
                  Leading frontend development for Google Cloud Platform's web console, focusing on performance optimization and user experience improvements.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Performance Optimization
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
                  Software Engineer • June 2022 - March 2024
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  Developed and maintained Azure web applications, contributing to engineering tools and platform scalability.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    C#
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Azure
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
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
                  Frontend Developer • January 2021 - June 2022
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  Implemented user-facing features for Airbnb's booking platform, focusing on responsive design and accessibility.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    CSS
                  </Badge>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
                <img src="/airbnb-1.svg" alt="Airbnb" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Skills */}
            <Card className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                  <Palette className="w-5 h-5 text-black dark:text-white" />
                  Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    UI/UX Design
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Figma
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Adobe Creative Suite
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Prototyping
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Design Systems
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    User Research
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Development Skills */}
            <Card className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                  <Code className="w-5 h-5 text-black dark:text-white" />
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Collaboration Skills */}
            <Card className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                  <Users className="w-5 h-5 text-black dark:text-white" />
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    Agile/Scrum
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    Cross-functional Teams
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    Mentoring
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    Technical Leadership
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    Product Strategy
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Beyond Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  I actively contribute to open source projects and maintain several libraries focused on improving developer experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Learning & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Always exploring new technologies and methodologies. Currently diving deep into AI/ML integration in web applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about design and development, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
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
