"use client";
import React from "react";
import { Button } from "@/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import Link from "next/link";
import { Tooltip } from "@mui/material";

interface DropDownToggleProps {
  id: string;
  mainTitle: string;
  icon?: any;
  page: string;
  collapseTitle: {
    title: string;
    link: string;
    icon?: any;
  }[];
}

export function DropDownToggle({
  id,
  mainTitle,
  icon,
  collapseTitle,
}: DropDownToggleProps) {
  return (
    <DropdownMenu>
      <Tooltip title={mainTitle} disableFocusListener arrow placement="right">
        <DropdownMenuTrigger
          asChild
          className="h-10 p-2 text-black hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700"
        >
          <Button variant="ghost" size="sm" id={id}>
            {icon}
            <span className="sr-only">{mainTitle}</span>
          </Button>
        </DropdownMenuTrigger>
      </Tooltip>
      <DropdownMenuContent align="start" forceMount className="lg:hidden">
        {collapseTitle.map((item, index) => (
          <Link href={item.link} key={index}>
            <DropdownMenuItem className="hover:cursor-pointer">
              {item.icon}
              <span>{item.title}</span>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
