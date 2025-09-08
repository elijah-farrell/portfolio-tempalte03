"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, MapPin, Calendar, Code, Palette, Zap } from "lucide-react"

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "Python", "Figma", "Tailwind CSS", "Framer Motion"
]

const testimonials = [
  {
    quote: "Elijah's attention to detail and creative problem-solving skills are unmatched. He transformed our vision into a stunning reality.",
    name: "Sarah Chen",
    title: "Product Manager at Google"
  },
  {
    quote: "Working with Elijah was a game-changer. His technical expertise and design sensibility created something truly exceptional.",
    name: "Michael Rodriguez",
    title: "CTO at StartupCo"
  },
  {
    quote: "Elijah brings both technical excellence and creative vision to every project. A true professional.",
    name: "Emily Johnson",
    title: "Design Director at Adobe"
  }
]

const achievements = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "5+ Years Experience",
    description: "Building scalable web applications"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "50+ Projects",
    description: "From startups to Fortune 500"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Award Winner",
    description: "Best UI/UX Design 2023"
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Framer Motion Navbar */}
      <PortfolioNavbar />

        {/* Hero Section with Animated Background */}
        <section className="relative max-w-4xl mx-auto px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 pt-20 pb-12 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full opacity-20"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Passionate about creating digital experiences that matter
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-2xl">
                <span className="text-blue-500 dark:text-blue-400">Frontend</span>{" "}
                <span className="text-blue-500 dark:text-blue-400">Engineer</span>{" "}
                <span className="text-gray-600 dark:text-gray-300">&</span>{" "}
                <span className="text-purple-500 dark:text-purple-400">Product</span>{" "}
                <span className="text-purple-500 dark:text-purple-400">Designer</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I specialize in crafting beautiful, functional user experiences that solve real problems. 
              With a background in both design and engineering, I bridge the gap between vision and execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                Available for projects
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <Button variant="outline" size="sm" className="border-gray-200 dark:border-[#2a2a2a] bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <Github className="w-4 h-4 mr-2" />
                View work
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Skills Section with Animated Cards */}
        <section className="relative max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, -1, 0],
                  transition: { duration: 0.3 }
                }}
                className="col-span-1 lg:col-span-1 h-auto"
              >
                <Card className="p-4 text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <Badge variant="secondary" className="text-sm bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300">
                      {skill}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            What I've Achieved
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                  <CardContent className="p-0">
                    <motion.div 
                      className="flex justify-center mb-4 text-blue-500 dark:text-blue-400"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            My Story
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    The Beginning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I started my journey as a curious kid who loved taking things apart and putting them back together. 
                    That curiosity led me to discover programming, where I could build digital worlds from scratch.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    The Present
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Today, I combine technical expertise with creative vision to build products that users love. 
                    Every project is an opportunity to learn, grow, and make a meaningful impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            What People Say
          </motion.h2>
          
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to collaborate?</h3>
                <p className="text-blue-100">Let's build something amazing together!</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a specific project in mind or just want to chat about possibilities, 
              I'd love to hear from you.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button className="bg-gray-100 dark:bg-[#2a2a2a] text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#1a1a1a]">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" className="border-gray-200 dark:border-[#2a2a2a]">
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-gray-400 dark:text-gray-500 mx-auto mb-4 w-8 h-8"
              >
                ✨
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Thanks for taking the time to learn about me. I hope we get to work together soon!
              </p>
            </div>
            <div className="pt-6 border-t border-gray-200 dark:border-[#2a2a2a]">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Built with ❤️ by Elijah Farrell
              </p>
            </div>
          </motion.div>
        </footer>
    </>
  )
}
