"use client";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffectTitle = ({
  text,
  className = "text-4xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg",
  filter = true,
  duration = 0.8,
}: {
  text: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        ease: "easeOut"
      }
    );
  }, [scope.current]);

  return (
    <motion.h1 ref={scope} className={cn(className)}>
      <motion.span
        className="opacity-0"
        style={{
          filter: filter ? "blur(10px)" : "none",
        }}
      >
        {text}
      </motion.span>
    </motion.h1>
  );
};
