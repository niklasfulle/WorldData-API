import LargeHeading from "@/components/ui/LargeHeading";
import React, { FC } from "react";

interface ViewSectionProps {
  title: string;
}

const ViewSection: FC<ViewSectionProps> = ({ title }) => {
  return (
    <div className="flex h-fit min-h-[90vh] w-full flex-col gap-4 rounded-sm dark:bg-slate-900 xl:flex-row">
      <div className="relativ h-fit min-h-[90vh] w-full rounded-md bg-white/75 p-2 dark:bg-slate-800 xl:w-9/12 ">
        <LargeHeading
          className="mt-12 flex w-full flex-row justify-center"
          size={"sm"}
        >
          {title}
        </LargeHeading>
      </div>
      <div className="relativ flex h-fit min-h-[90vh] w-full flex-col gap-2 rounded-md bg-white/75 dark:bg-slate-800 xl:h-full xl:w-3/12"></div>
    </div>
  );
};

export default ViewSection;
