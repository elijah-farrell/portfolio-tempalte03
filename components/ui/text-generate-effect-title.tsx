"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffectTitle = ({
  text,
  className = "text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg",
  filter = true,
  duration = 0.4,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
}: {
  text: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <motion.h1 ref={ref} className={cn(className)}>
      <motion.span
        className="opacity-0"
        style={{
          filter: filter ? "blur(10px)" : "none",
        }}
        animate={inView ? {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        } : {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        }}
        transition={{
          duration: duration,
          ease: "easeOut"
        }}
      >
        {text}
      </motion.span>
    </motion.h1>
  );
};
