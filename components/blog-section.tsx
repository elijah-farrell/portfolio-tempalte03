"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function BlogSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-8 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
      <TextGenerateEffect words="Latest Thoughts" asHeading={true} staggerDelay={0.15} />
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        {/* Featured Blog Post */}
        <Card className="group cursor-pointer blog-box">
          <CardContent className="p-5">
            <h3 className="text-base font-semibold text-card-foreground mb-3 group-hover:text-muted-foreground transition-colors">
              Building Scalable Design Systems
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              How I approach creating design systems that grow with your product and team. Lessons learned from building systems at Google and Microsoft.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Sep 3, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>8 min read</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </CardContent>
        </Card>

        {/* Regular Blog Post */}
        <Card className="group cursor-pointer blog-box">
          <CardContent className="p-5">
            <h3 className="text-base font-semibold text-card-foreground mb-3 group-hover:text-muted-foreground transition-colors">
              React Performance Optimization Techniques
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Deep dive into React optimization strategies I've used in production. From memoization to code splitting and everything in between.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Aug 28, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>12 min read</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </CardContent>
        </Card>

        {/* Third Blog Post */}
        <Card className="group cursor-pointer blog-box">
          <CardContent className="p-5">
            <h3 className="text-base font-semibold text-card-foreground mb-3 group-hover:text-muted-foreground transition-colors">
              Transitioning from Frontend to Full-Stack
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              My journey from focusing solely on frontend development to becoming a full-stack engineer. Tips and resources that helped along the way.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Aug 15, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>6 min read</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </CardContent>
        </Card>

        {/* Fourth Blog Post */}
        <Card className="group cursor-pointer blog-box">
          <CardContent className="p-5">
            <h3 className="text-base font-semibold text-card-foreground mb-3 group-hover:text-muted-foreground transition-colors">
              My Development Workflow Setup
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              A detailed look at the tools, extensions, and configurations that make up my daily development workflow in 2023.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Aug 5, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>10 min read</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-10 mb-10">
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mx-auto">
          View all posts
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
