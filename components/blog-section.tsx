"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function BlogSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717]">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12">Latest Thoughts</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Featured Blog Post */}
        <Card className="group cursor-pointer border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs">
                Featured
              </Badge>
              <Badge className="bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 text-xs">
                Design
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              Building Scalable Design Systems
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              How I approach creating design systems that grow with your product and team. Lessons learned from building systems at Google and Microsoft.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Dec 15, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>8 min read</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
            </div>
          </CardContent>
        </Card>

        {/* Regular Blog Post */}
        <Card className="group cursor-pointer border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs">
                Development
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              React Performance Optimization Techniques
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Deep dive into React optimization strategies I've used in production. From memoization to code splitting and everything in between.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Dec 8, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>12 min read</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
            </div>
          </CardContent>
        </Card>

        {/* Third Blog Post */}
        <Card className="group cursor-pointer border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs">
                Career
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              Transitioning from Frontend to Full-Stack
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              My journey from focusing solely on frontend development to becoming a full-stack engineer. Tips and resources that helped along the way.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Nov 28, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>6 min read</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
            </div>
          </CardContent>
        </Card>

        {/* Fourth Blog Post */}
        <Card className="group cursor-pointer border-gray-100 dark:border-[#2a2a2a] bg-white dark:bg-[#171717] hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs">
                Tools
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              My Development Workflow Setup
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              A detailed look at the tools, extensions, and configurations that make up my daily development workflow in 2023.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Nov 20, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>10 min read</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-12">
        <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2 mx-auto">
          View all posts
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
