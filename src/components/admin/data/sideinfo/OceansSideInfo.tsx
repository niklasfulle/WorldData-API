import React, { FC } from "react";

interface OceansSideInfoProps {
  data: any;
}

const OceansSideInfo: FC<OceansSideInfoProps> = ({ data }) => {
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
            Area Km²: {object.area_km2}
          </span>
          <span className="px-5 py-1 pt-2 text-left text-sm">
            Max Depth m: {object.max_depth_m}
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

export default OceansSideInfo;
