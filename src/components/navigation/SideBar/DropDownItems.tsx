import React, { FC } from "react";
import { DropDownToggle } from "./DropDownToggle";
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

interface DropDownItemsProps {
  page: string;
}

const DropDownItems: FC<DropDownItemsProps> = ({ page }) => {
  return (
    <>
      <DropDownToggle
        mainTitle="Continents"
        id="Continents"
        icon={<SouthAmericaIcon />}
        page={page}
        collapseTitle={ContinentsLinkList}
      />
      <DropDownToggle
        mainTitle="Oceans"
        id="Oceans"
        icon={<SailingIcon />}
        page={page}
        collapseTitle={OceansLinkList}
      />
      <DropDownToggle
        mainTitle="Seas"
        id="Seas"
        icon={<WavesIcon />}
        page={page}
        collapseTitle={SeasLinkList}
      />
      <DropDownToggle
        mainTitle="Countries"
        id="Countries"
        icon={<FlagIcon />}
        page={page}
        collapseTitle={CountiresLinkList}
      />
      <DropDownToggle
        mainTitle="Cities"
        id="Cities"
        icon={<ApartmentIcon />}
        page={page}
        collapseTitle={CitiesLinkList}
      />
      <DropDownToggle
        mainTitle="Mountains"
        id="Mountains"
        icon={<TerrainIcon />}
        page={page}
        collapseTitle={MountainsLinkList}
      />
      <DropDownToggle
        mainTitle="Lakes"
        id="Lakes"
        icon={<WaterIcon />}
        page={page}
        collapseTitle={LakesLinkList}
      />
      <DropDownToggle
        mainTitle="Rivers"
        id="Rivers"
        icon={<WaterIcon />}
        page={page}
        collapseTitle={RiversLinkList}
      />
      <DropDownToggle
        mainTitle="Islands"
        id="Islands"
        icon={<Icons.Palmtree />}
        page={page}
        collapseTitle={IslandsLinkList}
      />
      <DropDownToggle
        mainTitle="Currencies"
        id="Currencies"
        icon={<AttachMoneyIcon />}
        page={page}
        collapseTitle={CurrenciesLinkList}
      />
      <DropDownToggle
        mainTitle="Solar System"
        id="Solar System"
        icon={<WbTwilightIcon />}
        page={page}
        collapseTitle={SolarSystemLinkList}
      />
    </>
  );
};

export default DropDownItems;
