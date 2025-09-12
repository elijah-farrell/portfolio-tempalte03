import { useRef, useCallback } from 'react';

export function useStableNavbar() {
  const navItemsRef = useRef([
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects", 
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog", 
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]);

  const handleNavClick = useCallback((link: string) => {
    // Handle section scrolling for hash links
    if (link.startsWith('#')) {
      const sectionId = link.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For regular links, Next.js Link will handle navigation
  }, []);

  return {
    navItems: navItemsRef.current,
    handleNavClick,
  };
}
