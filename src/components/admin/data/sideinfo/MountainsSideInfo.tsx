import React, { FC } from "react";

interface MountainsSideInfoProps {
  data: any;
}

const MountainsSideInfo: FC<MountainsSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default MountainsSideInfo;
