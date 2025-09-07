"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-[#171717] items-center justify-center relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#171717] to-transparent z-30 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#171717] to-transparent z-30 pointer-events-none"></div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="[--animation-duration:400s]"
      />
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
