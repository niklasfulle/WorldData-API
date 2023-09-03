import React, { FC } from "react";

interface ContinentsSideInfoProps {
  data: any;
}

const ContinentsSideInfo: FC<ContinentsSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default ContinentsSideInfo;
