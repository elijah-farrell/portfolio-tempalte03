"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
      link: "#projects",
      isActive: false,
    },
    {
      name: "Blog",
      link: "#blog", 
      isActive: false,
    },
    {
      name: "Contact",
      link: "#contact",
      isActive: false,
    },
  ];

  const handleNavigation = (link: string) => {
    if (link.startsWith('/')) {
      // Internal page navigation using Next.js router
      router.push(link);
    } else if (link.startsWith('#')) {
      // Scroll to section
      const element = document.getElementById(link.replace('#', ''));
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
              scrollToSection={handleNavigation}
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
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + (idx * 0.1),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {item.link.startsWith('/') ? (
                <Link
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavigation(item.link);
                  }}
                  className="text-2xl font-medium text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors duration-200"
                >
                  {item.name}
                </button>
              )}
            </motion.div>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
