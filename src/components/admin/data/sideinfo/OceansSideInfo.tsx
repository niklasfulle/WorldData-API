import React, { FC } from "react";

interface OceansSideInfoProps {
  data: any;
}

const OceansSideInfo: FC<OceansSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default OceansSideInfo;
