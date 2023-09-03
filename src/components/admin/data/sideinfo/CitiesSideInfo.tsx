import React, { FC } from "react";

interface CitiesSideInfoProps {
  data: any;
}

const CitiesSideInfo: FC<CitiesSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default CitiesSideInfo;
