"use client";
import React, { FC, useState } from "react";
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

interface SidebarProps {
  page: string;
}

const Sidebar: FC<SidebarProps> = () => {
  const [active, setActive] = useState("");

  return (
    <div className="w-64 dark:bg-slate-800 bg-white/75 rounded-md px-4">
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
        <Link href="/admin/statistic?data=api">
          <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md">
            <Icons.Code />
            <ListItemText primary="API statsitic" className="ml-3" />
          </ListItemButton>
        </Link>
        <Link href="/admin/statistic?data=user">
          <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md">
            <Icons.BarChart3 />
            <ListItemText primary="User statsitic" className="ml-3" />
          </ListItemButton>
        </Link>
        <Link href="/admin/statistic?data=data">
          <ListItemButton className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md">
            <Icons.Database />
            <ListItemText primary="Data statsitic" className="ml-3" />
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
          collapseTitle={ContinentsLinkList}
        />
        <ItemCollapse mainTile="Oceans" icon={<SailingIcon />} collapseTitle={OceansLinkList} />
        <ItemCollapse mainTile="Seas" icon={<WavesIcon />} collapseTitle={SeasLinkList} />
        <ItemCollapse mainTile="Countries" icon={<FlagIcon />} collapseTitle={CountiresLinkList} />
        <ItemCollapse mainTile="Cities" icon={<ApartmentIcon />} collapseTitle={CitiesLinkList} />
        <ItemCollapse
          mainTile="Mountains"
          icon={<TerrainIcon />}
          collapseTitle={MountainsLinkList}
        />
        <ItemCollapse mainTile="Lakes" icon={<WavesIcon />} collapseTitle={LakesLinkList} />
        <ItemCollapse mainTile="Rivers" icon={<WavesIcon />} collapseTitle={RiversLinkList} />
        <ItemCollapse
          mainTile="Islands"
          icon={<Icons.Palmtree />}
          collapseTitle={IslandsLinkList}
        />
        <ItemCollapse
          mainTile="Currencies"
          icon={<AttachMoneyIcon />}
          collapseTitle={CurrenciesLinkList}
        />
        <ItemCollapse
          mainTile="Solar System"
          icon={<WbTwilightIcon />}
          collapseTitle={SolarSystemLinkList}
        />
      </List>
    </div>
  );
};

export default Sidebar;
