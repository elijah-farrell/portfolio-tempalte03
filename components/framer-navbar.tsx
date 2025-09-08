"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { ChevronDown, Home } from "lucide-react";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    isDropdown?: boolean;
    sections?: Array<{ name: string; sectionId: string }>;
    icon?: React.ReactNode;
    isActive?: boolean;
  }[];
  className?: string;
  onItemClick?: () => void;
  scrollToSection?: (sectionId: string) => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 z-40 w-full px-0 md:px-4", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: "100%",
        paddingTop: visible ? "15px" : "10px",
        paddingBottom: visible ? "10px" : "10px",
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto hidden md:flex w-full max-w-4xl flex-row items-center px-6 py-2 bg-white/80 dark:bg-[#171717]/80 rounded-full",
        visible && "bg-white/80 dark:bg-[#171717]/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, scrollToSection }: NavItemsProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex flex-row items-center text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 relative h-10",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div 
          key={`nav-item-${idx}`} 
          className="relative flex justify-center items-center h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover background for this item */}
          <div
            className={`absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-lg transition-opacity duration-200 ${
              hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {item.isDropdown ? (
            <div className="relative">
              <div className="flex items-center">
                  <a 
                    href={item.link}
                    className={`relative px-3 py-2 transition-all duration-300 ease-in-out flex items-center rounded-lg ${
                      item.isActive 
                        ? 'text-emerald-500 dark:text-emerald-400 font-semibold' 
                        : 'text-neutral-600 dark:text-neutral-300'
                    }`}
                  >
                  {item.icon && <span className="relative z-20 mr-2">{item.icon}</span>}
                  <span className="relative z-20">{item.name}</span>
                </a>
                <button 
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  className="px-2 py-2 transition-all duration-200 ease-in-out rounded-md text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-500"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === idx ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>
              
              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-neutral-950 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-700 py-2 z-[9999]"
                  >
                    {item.sections?.map((section, sectionIdx) => (
                      <button
                        key={sectionIdx}
                        onClick={() => {
                          if (scrollToSection) {
                            scrollToSection(section.sectionId);
                          }
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm transition-colors duration-150 text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-500 hover:bg-gray-50 dark:hover:bg-neutral-800"
                      >
                        {section.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <a
              onClick={onItemClick}
              className={`relative px-3 py-2 transition-all duration-300 ease-in-out flex items-center rounded-lg ${
                item.isActive 
                  ? 'text-emerald-500 dark:text-emerald-400 font-semibold' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
              href={item.link}
            >
              {item.icon && <span className="relative z-20 mr-2">{item.icon}</span>}
              <span className="relative z-20">{item.name}</span>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: "100%",
        paddingTop: visible ? "15px" : "10px",
        paddingBottom: visible ? "10px" : "10px",
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[100] flex w-full flex-row items-center px-8 py-2 md:hidden",
        visible ? "bg-white/80 dark:bg-[#171717]/80 rounded-none" : "bg-transparent",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ 
            height: 0,
            opacity: 0
          }}
          animate={{ 
            height: "100vh",
            opacity: 1
          }}
          exit={{ 
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            height: { duration: 0.4 },
            opacity: { duration: 0.3 }
          }}
          className={cn(
            "absolute inset-x-0 top-0 z-40 flex w-full flex-col bg-white/80 dark:bg-[#171717]/80 backdrop-blur-sm",
            className,
          )}
        >
          {/* Links section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex flex-col items-center justify-center gap-8 flex-1 pt-20"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const NavbarLogo = ({ onCloseMobileMenu }: { onCloseMobileMenu?: () => void }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const router = useRouter();
  
  const goToHome = () => {
    setIsClicked(true);
    // Navigate to home page using Next.js router
    router.push('/');
    // Close mobile menu if it's open
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    }
    // Reset click state after animation
    setTimeout(() => setIsClicked(false), 150);
  };

  return (
    <div className="flex items-center">
      <button 
        onClick={goToHome}
        className="relative hover:opacity-80 transition-opacity cursor-pointer focus:outline-none rounded px-1 py-1 group"
        aria-label="Go to home page"
      >
        <div className={`relative w-11 h-11 rounded-full overflow-hidden transition-all duration-100 ${
          isClicked ? 'border-0' : 'border-2 border-gray-200 dark:border-[#2a2a2a] hover:border-gray-400 dark:hover:border-gray-500'
        }`}>
          <img 
            src="/pfp.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover object-center"
            style={{ imageRendering: 'auto' }}
          />
          {/* Home Icon Overlay */}
          <div className={`absolute inset-0 rounded-full bg-white/50 dark:bg-black/50 flex items-center justify-center transition-opacity duration-100 ${
            isClicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            <Home className="w-5 h-5 text-black dark:text-white" />
          </div>
        </div>
      </button>
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg transition-colors"
    >
      <div className="w-5 h-5 flex flex-col justify-center items-center">
        <span className={`block w-4 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`} />
        <span className={`block w-4 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-all duration-300 mt-1 ${
          isOpen ? 'opacity-0' : ''
        }`} />
        <span className={`block w-4 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-all duration-300 mt-1 ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`} />
      </div>
    </button>
  );
};
