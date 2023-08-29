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
          <ListItemButton className="dark:hover:bg-slate-700 dark:bg-slate-700 hover:bg-slate-200 bg-slate-200 rounded-md ease-in transition-all duration-150">
            <Icons.Code />
            <ListItemText primary="API Statsitic" className="ml-3" />
          </ListItemButton>
        ) : (
          <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md ease-in transition-all duration-150">
            <Icons.Code />
            <ListItemText primary="API Statsitic" className="ml-3" />
          </ListItemButton>
        )}
      </Link>
      <Link href="/admin/statistic?data=user">
        {active == "user" ? (
          <ListItemButton className="dark:hover:bg-slate-700 dark:bg-slate-700 hover:bg-slate-200 bg-slate-200 rounded-md ease-in transition-all duration-150 ">
            <Icons.BarChart3 />
            <ListItemText primary="User Statsitic" className="ml-3" />
          </ListItemButton>
        ) : (
          <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md ease-in transition-all duration-150 ">
            <Icons.BarChart3 />
            <ListItemText primary="User Statsitic" className="ml-3" />
          </ListItemButton>
        )}
      </Link>
      <Link href="/admin/statistic?data=data">
        {active == "data" ? (
          <ListItemButton className="dark:hover:bg-slate-700 dark:bg-slate-700 hover:bg-slate-200 bg-slate-200 rounded-md ease-in transition-all duration-150">
            <Icons.BarChart4 />
            <ListItemText primary="Data Statsitic" className="ml-3" />
          </ListItemButton>
        ) : (
          <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md ease-in transition-all duration-150">
            <Icons.BarChart4 />
            <ListItemText primary="Data Statsitic" className="ml-3" />
          </ListItemButton>
        )}
      </Link>
    </>
  );
};

export default AdminLinkItems;
