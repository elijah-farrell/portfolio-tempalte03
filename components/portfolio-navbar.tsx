"use client";
import React, { useState } from "react";
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

  const navItems = [
    {
      name: "About",
      link: "#about",
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <div className="flex items-center justify-between w-full">
          <div className="ml-4">
            <NavbarLogo />
          </div>
          <div className="flex items-center gap-1 mr-4">
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
            <a
              key={idx}
              href={item.link}
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection(item.link.replace('#', ''));
              }}
              className="block w-full text-left px-6 py-3 text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-500 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors duration-150 rounded-lg"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
