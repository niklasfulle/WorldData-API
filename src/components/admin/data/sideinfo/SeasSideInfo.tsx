import React, { FC } from "react";

interface SeasSideInfoProps {
  data: any;
}

const SeasSideInfo: FC<SeasSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default SeasSideInfo;
