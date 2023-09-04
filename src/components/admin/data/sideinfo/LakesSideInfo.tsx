import React, { FC } from "react";

interface LakesSideInfoProps {
  data: any;
}

const LakesSideInfo: FC<LakesSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default LakesSideInfo;
