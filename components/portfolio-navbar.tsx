"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  NavbarLogo, 
  MobileNavToggle 
} from "./framer-navbar";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

export function PortfolioNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    {
      name: "About",
      link: "/about",
      isActive: false,
    },
    {
      name: "Projects", 
      link: "/projects",
      isActive: false,
    },
    {
      name: "Blog",
      link: "/blog", 
      isActive: false,
    },
    {
      name: "Contact",
      link: "/contact",
      isActive: false,
    },
  ];

  const handleNavClick = (link: string) => {
    if (link.startsWith('/')) {
      // Use Next.js router for smooth client-side navigation
      router.push(link);
    } else {
      const sectionId = link.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Navbar>
      {/* Desktop Navbar */}
      <NavBody>
        <div className="flex items-center justify-between w-full">
          <div className="ml-0">
            <NavbarLogo />
          </div>
          <div className="flex items-center gap-1 mr-0">
            <DarkModeToggle />
            <NavItems 
              items={navItems}
              scrollToSection={handleNavClick}
            />
          </div>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <div className="flex items-center justify-between w-full relative z-[100]">
          <div className="ml-4 relative z-[100]">
            <NavbarLogo onCloseMobileMenu={() => setMobileMenuOpen(false)} />
          </div>
          <div className="flex items-center gap-1 mr-4 relative z-[100]">
            <DarkModeToggle />
            <MobileNavToggle 
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
        
        <MobileNavMenu 
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick(item.link);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + (idx * 0.1),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-2xl font-medium text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors duration-200"
            >
              {item.name}
            </motion.a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
