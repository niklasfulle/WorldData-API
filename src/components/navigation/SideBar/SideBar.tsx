"use client";
import React from "react";
import Link from "next/link";
import { Divider, List, ListItemButton, ListItemText } from "@mui/material";
import Icons from "@/components/ui/Icons";
import ItemCollapse from "./ItemCollapse";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import SailingIcon from "@mui/icons-material/Sailing";
import WavesIcon from "@mui/icons-material/Waves";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlagIcon from "@mui/icons-material/Flag";
import TerrainIcon from "@mui/icons-material/Terrain";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

const Sidebar = () => {
  return (
    <div className="absolute left-4 top-[96px] min-h-screen h-auto w-64 dark:bg-slate-800 bg-white/75 rounded-md px-4">
      <div className="relative flex flex-col items-center">
        <h1 className="dark:text-white py-2 flex flex-row w-full justify-center">
          <Icons.Lock className="mr-2" /> Admin Panel
        </h1>
      </div>
      <Divider className="bg-white" />
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="dark:bg-slate-800 dark:text-white"
      >
        <Link href="/admin">
          <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md">
            <Icons.Code />
            <ListItemText primary="API statsitic" className="ml-3" />
          </ListItemButton>
        </Link>
        <Link href="/admin">
          <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md">
            <ListItemText primary="User statsitic" />
          </ListItemButton>
        </Link>
      </List>
      <div className="relative flex flex-col items-center mt-2">
        <h1 className="dark:text-white py-2 flex flex-row w-full justify-center">Data Panel</h1>
      </div>
      <Divider className="bg-white" />
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="dark:bg-slate-800 dark:text-white"
      >
        <ItemCollapse
          mainTile="Continents"
          icon={<SouthAmericaIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/continents/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/continents/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/continents/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Oceans"
          icon={<SailingIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/oceans/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/oceans/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/oceans/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Seas"
          icon={<WavesIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/seas/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/seas/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/seas/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Countries"
          icon={<FlagIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/countires/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/countires/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/countires/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Cities"
          icon={<ApartmentIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/cities/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/cities/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/cities/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Mountains"
          icon={<TerrainIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/mountains/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/mountains/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/mountains/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Lakes"
          icon={<ApartmentIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/lakes/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/lakes/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/lakes/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Rivers"
          icon={<ApartmentIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/rivers/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/rivers/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/rivers/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Islands"
          icon={<Icons.Palmtree />}
          collapseTitle={[
            { title: "View", link: "/admin/data/islands/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/islands/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/islands/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Currencies"
          icon={<AttachMoneyIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/currencies/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/currencies/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/currencies/update", icon: <Icons.FileEdit /> },
          ]}
        />
        <ItemCollapse
          mainTile="Solar System"
          icon={<WbTwilightIcon />}
          collapseTitle={[
            { title: "View", link: "/admin/data/solar-system/view", icon: <Icons.FileText /> },
            { title: "Add", link: "/admin/data/solar-system/add", icon: <Icons.FilePlus /> },
            { title: "Update", link: "/admin/data/solar-system/update", icon: <Icons.FileEdit /> },
          ]}
        />
      </List>
    </div>
  );
};

export default Sidebar;
