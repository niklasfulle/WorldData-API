import React, { FC } from "react";
import ItemCollapse from "./ItemCollapse";
import Icons from "@/ui/Icons";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import SailingIcon from "@mui/icons-material/Sailing";
import WavesIcon from "@mui/icons-material/Waves";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlagIcon from "@mui/icons-material/Flag";
import TerrainIcon from "@mui/icons-material/Terrain";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import WaterIcon from "@mui/icons-material/Water";
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

interface CollapseItemsProps {
  page: string;
}

const itemList = [
  {
    mainTile: "Continents",
    icon: <SouthAmericaIcon />,
    collapseTitle: ContinentsLinkList,
  },
  {
    mainTile: "Oceans",
    icon: <SailingIcon />,
    collapseTitle: OceansLinkList,
  },
  {
    mainTile: "Seas",
    icon: <WavesIcon />,
    collapseTitle: SeasLinkList,
  },
  {
    mainTile: "Countries",
    icon: <FlagIcon />,
    collapseTitle: CountiresLinkList,
  },
  {
    mainTile: "Cities",
    icon: <ApartmentIcon />,
    collapseTitle: CitiesLinkList,
  },
  {
    mainTile: "Mountains",
    icon: <TerrainIcon />,
    collapseTitle: MountainsLinkList,
  },
  {
    mainTile: "Lakes",
    icon: <WaterIcon />,
    collapseTitle: LakesLinkList,
  },
  {
    mainTile: "Rivers",
    icon: <WaterIcon />,
    collapseTitle: RiversLinkList,
  },
  {
    mainTile: "Islands",
    icon: <Icons.Palmtree />,
    collapseTitle: IslandsLinkList,
  },
  {
    mainTile: "Currencies",
    icon: <AttachMoneyIcon />,
    collapseTitle: CurrenciesLinkList,
  },
  {
    mainTile: "Solar-System",
    icon: <WbTwilightIcon />,
    collapseTitle: SolarSystemLinkList,
  },
];

const CollapseItems: FC<CollapseItemsProps> = ({ page }) => {
  return (
    <>
      {itemList.map((item, index) => (
        <ItemCollapse
          key={index}
          mainTile={item.mainTile}
          icon={item.icon}
          collapseTitle={item.collapseTitle}
          page={page}
        />
      ))}
    </>
  );
};

export default CollapseItems;
