import React, { FC } from "react";

import LargeHeading from "@/ui/LargeHeading";

interface CreateSectionProps {
  title: string;
  form: React.ReactNode;
}

const CreateSection: FC<CreateSectionProps> = ({ title, form }) => {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-sm dark:bg-slate-900 xl:flex-row">
      <div className="relativ h-fit w-full rounded-md bg-white/75 p-2 dark:bg-slate-800 xl:w-9/12 ">
        <LargeHeading
          className="mt-4 flex w-full flex-row justify-center"
          size={"sm"}
        >
          {title}
        </LargeHeading>
        {form}
      </div>
      <div className="relativ flex h-full w-full flex-col gap-2 rounded-md bg-white/75 dark:bg-slate-800 xl:h-full xl:w-3/12"></div>
    </div>
  );
};

export default CreateSection;
