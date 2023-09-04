import React, { FC } from "react";

interface RiversSideInfoProps {
  data: any;
}

const RiversSideInfo: FC<RiversSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default RiversSideInfo;
