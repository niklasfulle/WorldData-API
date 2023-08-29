import React, { FC } from "react";

interface ViewSectionProps {}

const ViewSection: FC<ViewSectionProps> = () => {
  return (
    <div className="dark:bg-slate-900 w-full h-full rounded-sm flex flex-col xl:flex-row gap-4">
      <div className="w-full xl:w-9/12 dark:bg-slate-800 bg-white/75 rounded-md h-fit relativ p-2 "></div>
      <div className="w-full xl:w-3/12 dark:bg-slate-800 bg-white/75 h-full xl:h-full rounded-md relativ flex flex-col gap-2"></div>
    </div>
  );
};

export default ViewSection;
