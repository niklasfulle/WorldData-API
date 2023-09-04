import React, { FC } from "react";

interface CurrenciesSideInfoProps {
  data: any;
}

const CurrenciesSideInfo: FC<CurrenciesSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default CurrenciesSideInfo;
