"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <MenuItemContent
        item={item}
        setActive={setActive}
        active={active}
      >
        {children}
      </MenuItemContent>
    </div>
  );
};

export const MenuItemContent = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative"
    >
      <MenuItemButton active={active === item}>
        {item}
      </MenuItemButton>
      {active === item && (
        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
          <MenuItemDropdown>
            {children}
          </MenuItemDropdown>
        </div>
      )}
    </div>
  );
};

export const MenuItemButton = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <button
      className={cn(
        "relative text-sm transition-colors duration-200",
        active ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
      )}
    >
      {children}
    </button>
  );
};

export const MenuItemDropdown = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white dark:bg-[#171717] rounded-lg shadow-lg border border-gray-200 dark:border-[#2a2a2a] p-4 min-w-[200px]">
      {children}
    </div>
  );
};

export const HoveredLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md hover:bg-gray-50 dark:hover:bg-[#2a2a2a]"
    >
      {children}
    </a>
  );
};

export const ProductItem = ({
  title,
  href,
  src,
  description,
}: {
  title: string;
  href: string;
  src: string;
  description: string;
}) => {
  return (
    <a
      href={href}
      className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
    >
      <div className="aspect-video bg-gray-100 dark:bg-[#2a2a2a] rounded-md mb-2 overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
        {title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </a>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-gray-200 dark:border-[#2a2a2a] bg-white/80 dark:bg-[#171717]/80 backdrop-blur-md shadow-lg px-6 py-3"
    >
      <div className="flex items-center space-x-4">
        {children}
      </div>
    </nav>
  );
};
