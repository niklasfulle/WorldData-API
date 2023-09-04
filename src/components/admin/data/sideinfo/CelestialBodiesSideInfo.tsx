import React, { FC } from "react";

interface CelestialBodiesSideInfoProps {
  data: any;
}

const CelestialBodiesSideInfo: FC<CelestialBodiesSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default CelestialBodiesSideInfo;
