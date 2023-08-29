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

const CollapseItems: FC<CollapseItemsProps> = ({ page }) => {
  return (
    <>
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
      <ItemCollapse mainTile="Seas" icon={<WavesIcon />} page={page} collapseTitle={SeasLinkList} />
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
        icon={<WaterIcon />}
        page={page}
        collapseTitle={LakesLinkList}
      />
      <ItemCollapse
        mainTile="Rivers"
        icon={<WaterIcon />}
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
    </>
  );
};

export default CollapseItems;
