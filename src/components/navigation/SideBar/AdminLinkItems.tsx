import React, { FC } from "react";
import Icons from "@/ui/Icons";
import { ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

interface AdminLinkItemsProps {
  active: string;
}

const AdminLinkItems: FC<AdminLinkItemsProps> = ({ active }) => {
  return (
    <>
      <Link href="/admin/statistic?data=api">
        {active == "api" ? (
          <ListItemButton className="rounded-md bg-slate-200 transition-all duration-150 ease-in hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-700">
            <Icons.Code />
            <ListItemText primary="API Statsitic" className="ml-3" />
          </ListItemButton>
        ) : (
          <ListItemButton className="rounded-md transition-all duration-150 ease-in hover:bg-slate-200 dark:hover:bg-slate-700">
            <Icons.Code />
            <ListItemText primary="API Statsitic" className="ml-3" />
          </ListItemButton>
        )}
      </Link>
      <Link href="/admin/statistic?data=user">
        {active == "user" ? (
          <ListItemButton className="rounded-md bg-slate-200 transition-all duration-150 ease-in hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-700 ">
            <Icons.BarChart3 />
            <ListItemText primary="User Statsitic" className="ml-3" />
          </ListItemButton>
        ) : (
          <ListItemButton className="rounded-md transition-all duration-150 ease-in hover:bg-slate-200 dark:hover:bg-slate-700 ">
            <Icons.BarChart3 />
            <ListItemText primary="User Statsitic" className="ml-3" />
          </ListItemButton>
        )}
      </Link>
      <Link href="/admin/statistic?data=data">
        {active == "data" ? (
          <ListItemButton className="rounded-md bg-slate-200 transition-all duration-150 ease-in hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-700">
            <Icons.BarChart4 />
            <ListItemText primary="Data Statsitic" className="ml-3" />
          </ListItemButton>
        ) : (
          <ListItemButton className="rounded-md transition-all duration-150 ease-in hover:bg-slate-200 dark:hover:bg-slate-700">
            <Icons.BarChart4 />
            <ListItemText primary="Data Statsitic" className="ml-3" />
          </ListItemButton>
        )}
      </Link>
    </>
  );
};

export default AdminLinkItems;
