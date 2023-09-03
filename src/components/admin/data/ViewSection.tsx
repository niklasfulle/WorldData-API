import LargeHeading from "@/components/ui/LargeHeading";
import React, { FC } from "react";

interface ViewSectionProps {
  title: string;
  table: any;
}

const ViewSection: FC<ViewSectionProps> = ({ title, table }) => {
  return (
    <div className="flex h-fit min-h-[90vh] w-full flex-col gap-4 rounded-sm dark:bg-slate-900 xl:flex-row">
      <div className="relativ h-fit min-h-[90vh] w-full rounded-md bg-white/75  p-8 dark:bg-slate-800 ">
        <LargeHeading
          className="mb-8 mt-4 flex w-full flex-row justify-center"
          size={"sm"}
        >
          {title}
        </LargeHeading>
        {table}
      </div>
    </div>
  );
};

export default ViewSection;
