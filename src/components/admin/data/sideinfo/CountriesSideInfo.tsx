import React, { FC } from "react";

interface CountriesSideInfoProps {
  data: any;
}

const CountriesSideInfo: FC<CountriesSideInfoProps> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default CountriesSideInfo;
