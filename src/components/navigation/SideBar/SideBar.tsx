"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Divider, List } from "@mui/material";
import Icons from "@/components/ui/Icons";
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
    <div className="lg:w-64 w-14 dark:bg-slate-800 bg-white/75 rounded-md px-1 xl:px-3 mr-2 md:block hidden">
      <div className="my-1 lg:block hidden">
        <h1 className="dark:text-white py-1 flex flex-row justify-center w-full dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md ease-in transition-all duration-150">
          <Link href="/admin" className="flex flex-row items-center h-10">
            <Icons.Lock className="mr-2" /> Admin Panel
          </Link>
        </h1>
      </div>
      <div className="lg:hidden text-white my-2 flex flex-col items-center justify-center">
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
        className="dark:bg-slate-800 dark:text-white gap-1 lg:flex flex-col hidden"
      >
        <AdminLinkItems active={active} />
      </List>
      <div className="my-1 lg:block hidden lg:mt-6">
        <h1 className="dark:text-white py-1 flex flex-row justify-center w-full dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md ease-in transition-all duration-150">
          <Link href="/admin/data" className="flex flex-row items-center h-10">
            <Icons.Database className="mr-2" /> Data Panel
          </Link>
        </h1>
      </div>
      <Divider className="bg-white" />
      <div className="lg:hidden text-white my-2 flex flex-col items-center gap-1 justify-center">
        <DropDownItems page={page} />
      </div>
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="dark:bg-slate-800 dark:text-white gap-1 lg:flex flex-col hidden"
      >
        <CollapseItems page={page} />
      </List>
    </div>
  );
};

export default Sidebar;
