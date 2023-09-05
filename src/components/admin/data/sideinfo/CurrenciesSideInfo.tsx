"use client";
import React, { FC } from "react";

interface CurrenciesSideInfoProps {
  data: any;
}

const CurrenciesSideInfo: FC<CurrenciesSideInfoProps> = ({ data }) => {
  return (
    <div className="mt-5 text-white">
      {data.map((object: any, index: number) => (
        <div
          className="mb-4 flex h-fit min-h-[4rem] w-full flex-col justify-between rounded-md border border-gray-300  p-1 dark:border-white "
          key={index}
        >
          <span className="px-5 py-1 pt-2 text-left text-sm">
            Name: {object.name}
          </span>
          <span className="px-5 py-1 pt-2 text-left text-sm">
            Code: {object.code}
          </span>
          <span className="px-5 py-1 pt-2 text-left text-sm">
            Symbol: {object.symbol}
          </span>
          <hr className="mx-4 my-1" />
          <span className="px-6 pb-1 pt-1 text-right text-xs dark:text-white/60">
            {object.createdAt + " ago"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CurrenciesSideInfo;
