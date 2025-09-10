"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialsDemo() {
  return (
    <div className="h-[20rem] flex flex-col antialiased bg-white dark:bg-[#171717] items-center justify-center relative w-full">
      <div className="absolute inset-y-0 left-0 w-32 z-[9999] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#171717] via-white/95 dark:via-[#171717]/95 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-[#171717] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-[#171717] to-transparent"></div>
      </div>
      <div className="absolute inset-y-0 right-0 w-32 z-[9999] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-white dark:from-[#171717] via-white/95 dark:via-[#171717]/95 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-[#171717] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-[#171717] to-transparent"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 w-full overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="[--animation-duration:400s]"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "John's work is absolutely phenomenal. The attention to detail and technical excellence he brings to every project is exactly what we need at Tesla.",
    name: "Elon Musk",
    title: "CEO, Tesla & SpaceX",
  },
  {
    quote:
      "Working with John has been transformative for our platform. His ability to scale solutions and optimize performance is unmatched.",
    name: "Jeff Bezos",
    title: "Founder, Amazon",
  },
  {
    quote: "John delivered our project ahead of schedule and exceeded all expectations. His technical expertise is world-class.",
    name: "Mark Zuckerberg",
    title: "CEO, Meta",
  },
  {
    quote:
      "John's ability to translate complex requirements into elegant solutions is remarkable. He's a true innovator in the field.",
    name: "Tim Cook",
    title: "CEO, Apple",
  },
  {
    quote:
      "The quality of John's work speaks for itself. He consistently delivers beyond what we ask for and pushes the boundaries of what's possible.",
    name: "Satya Nadella",
    title: "CEO, Microsoft",
  },
  {
    quote:
      "John's technical skills combined with his strategic thinking make him an invaluable partner for any ambitious project.",
    name: "Sundar Pichai",
    title: "CEO, Google",
  },
];