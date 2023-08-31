"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Divider, List } from "@mui/material";
import Icons from "@/ui/Icons";
import { AdminLinkList } from "./LinkLists";
import { useSearchParams } from "next/navigation";
import { DropDownToggle } from "./DropDownToggle";
import DropDownItems from "./DropDownItems";
import CollapseItems from "./CollapseItems";
import AdminLinkItems from "./AdminLinkItems";

interface SidebarProps {
  page: string;
}

const Sidebar: FC<SidebarProps> = ({ page }) => {
  const [active, setActive] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const action = searchParams?.get("data");
    if (action) {
      setActive(action);
    }
  }, [searchParams]);

  return (
    <div className="mr-4 hidden w-14 rounded-md bg-white/75 px-1 dark:bg-slate-800 sm:block lg:w-64 xl:px-3">
      <div className="my-1 hidden lg:block">
        <h1 className="flex w-full flex-row justify-center rounded-md py-1 transition-all duration-150 ease-in hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700">
          <Link href="/admin" className="flex h-10 flex-row items-center">
            <Icons.Lock className="mr-2" /> Admin Panel
          </Link>
        </h1>
      </div>
      <div className="my-2 flex flex-col items-center justify-center text-white lg:hidden">
        <DropDownToggle
          mainTitle="Admin Panel"
          id="Admin"
          icon={<Icons.Lock />}
          page={page}
          collapseTitle={AdminLinkList}
        />
      </div>
      <Divider className="bg-white" />
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="hidden flex-col gap-1 dark:bg-slate-800 dark:text-white lg:flex"
      >
        <AdminLinkItems active={active} />
      </List>
      <div className="my-1 hidden lg:mt-6 lg:block">
        <h1 className="flex w-full flex-row justify-center rounded-md py-1 transition-all duration-150 ease-in hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700">
          <Link href="/admin/data" className="flex h-10 flex-row items-center">
            <Icons.Database className="mr-2" /> Data Panel
          </Link>
        </h1>
      </div>
      <Divider className="bg-white" />
      <div className="my-2 flex flex-col items-center justify-center gap-1 text-white lg:hidden">
        <DropDownItems page={page} />
      </div>
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="hidden flex-col gap-1 dark:bg-slate-800 dark:text-white lg:flex"
      >
        <CollapseItems page={page} />
      </List>
    </div>
  );
};

export default Sidebar;
