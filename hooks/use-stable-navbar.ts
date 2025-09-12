import { useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export function useStableNavbar() {
  const router = useRouter();
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
  }, [router]);

  return {
    navItems: navItemsRef.current,
    handleNavClick,
  };
}
