"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Icons } from "@/ui/Icons";

export function ThemeToggleFooter() {
  const { setTheme } = useTheme();

  return (
    <>
      <p
        className="text-sm mb-1 hover:cursor-pointer flex flex-row active:text-slate-500 dark:active:text-slate-400"
        onClick={() => setTheme("light")}
      >
        <Icons.Sun className="mr-2 h-4 w-4" />
        Light
      </p>
      <p
        className="text-sm mb-1 hover:cursor-pointer flex flex-row active:text-slate-500 dark:active:text-slate-400"
        onClick={() => setTheme("dark")}
      >
        <Icons.Moon className="mr-2 h-4 w-4" />
        Dark
      </p>
      <p
        className="text-sm mb-1 hover:cursor-pointer flex flex-row active:text-slate-500 dark:active:text-slate-400"
        onClick={() => setTheme("system")}
      >
        <Icons.Laptop className="mr-2 h-4 w-4" />
        System
      </p>
    </>
  );
}
