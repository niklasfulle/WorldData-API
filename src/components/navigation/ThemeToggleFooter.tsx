"use client";
import { useTheme } from "next-themes";
import { Icons } from "@/ui/Icons";

export function ThemeToggleFooter() {
  const { setTheme } = useTheme();

  return (
    <>
      <p
        className="text-sm mb-1 hover:cursor-pointer flex flex-row"
        onClick={() => setTheme("light")}
      >
        <Icons.Sun className="mr-2 h-4 w-4" />
        Light
      </p>
      <p
        className="text-sm mb-1 hover:cursor-pointer flex flex-row"
        onClick={() => setTheme("dark")}
      >
        <Icons.Moon className="mr-2 h-4 w-4" />
        Dark
      </p>
      <p
        className="text-sm mb-1 hover:cursor-pointer flex flex-row"
        onClick={() => setTheme("system")}
      >
        <Icons.Laptop className="mr-2 h-4 w-4" />
        System
      </p>
    </>
  );
}
