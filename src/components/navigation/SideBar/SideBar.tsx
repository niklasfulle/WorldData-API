"use client";
import React, { FC, useEffect, useState } from "react";
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
import {
  CitiesLinkList,
  ContinentsLinkList,
  CountiresLinkList,
  CurrenciesLinkList,
  IslandsLinkList,
  LakesLinkList,
  MountainsLinkList,
  OceansLinkList,
  RiversLinkList,
  SeasLinkList,
  SolarSystemLinkList,
} from "./LinkLists";
import { useSearchParams } from "next/navigation";

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
    <div className="w-64 dark:bg-slate-800 bg-white/75 rounded-md px-4  ">
      <div className="my-1">
        <h1 className="dark:text-white py-1 flex flex-row justify-center w-full dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md ease-in transition-all duration-150">
          <Link href="/admin" className="flex flex-row items-center h-10">
            <Icons.Lock className="mr-2" /> Admin Panel
          </Link>
        </h1>
      </div>
      <Divider className="bg-white" />
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="dark:bg-slate-800 dark:text-white gap-1 flex flex-col"
      >
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
              <Icons.Database />
              <ListItemText primary="Data Statsitic" className="ml-3" />
            </ListItemButton>
          ) : (
            <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md ease-in transition-all duration-150">
              <Icons.Database />
              <ListItemText primary="Data Statsitic" className="ml-3" />
            </ListItemButton>
          )}
        </Link>
      </List>
      <div className="my-1 mt-6">
        <h1 className="dark:text-white py-1 flex flex-row justify-center w-full dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md ease-in transition-all duration-150">
          <Link href="/admin/data" className="flex flex-row items-center h-10">
            <Icons.Database className="mr-2" /> Data Panel
          </Link>
        </h1>
      </div>
      <Divider className="bg-white" />
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="dark:bg-slate-800 dark:text-white gap-1 flex flex-col"
      >
        <ItemCollapse
          mainTile="Continents"
          icon={<SouthAmericaIcon />}
          page={page}
          collapseTitle={ContinentsLinkList}
        />
        <ItemCollapse
          mainTile="Oceans"
          icon={<SailingIcon />}
          page={page}
          collapseTitle={OceansLinkList}
        />
        <ItemCollapse
          mainTile="Seas"
          icon={<WavesIcon />}
          page={page}
          collapseTitle={SeasLinkList}
        />
        <ItemCollapse
          mainTile="Countries"
          icon={<FlagIcon />}
          page={page}
          collapseTitle={CountiresLinkList}
        />
        <ItemCollapse
          mainTile="Cities"
          icon={<ApartmentIcon />}
          page={page}
          collapseTitle={CitiesLinkList}
        />
        <ItemCollapse
          mainTile="Mountains"
          icon={<TerrainIcon />}
          page={page}
          collapseTitle={MountainsLinkList}
        />
        <ItemCollapse
          mainTile="Lakes"
          icon={<WavesIcon />}
          page={page}
          collapseTitle={LakesLinkList}
        />
        <ItemCollapse
          mainTile="Rivers"
          icon={<WavesIcon />}
          page={page}
          collapseTitle={RiversLinkList}
        />
        <ItemCollapse
          mainTile="Islands"
          icon={<Icons.Palmtree />}
          page={page}
          collapseTitle={IslandsLinkList}
        />
        <ItemCollapse
          mainTile="Currencies"
          icon={<AttachMoneyIcon />}
          page={page}
          collapseTitle={CurrenciesLinkList}
        />
        <ItemCollapse
          mainTile="Solar System"
          icon={<WbTwilightIcon />}
          page={page}
          collapseTitle={SolarSystemLinkList}
        />
      </List>
    </div>
  );
};

export default Sidebar;
