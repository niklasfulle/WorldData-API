import React, { FC } from "react";

interface IslandsSideInfoProps {
  data: any;
}

const IslandsSideInfo: FC<IslandsSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default IslandsSideInfo;
