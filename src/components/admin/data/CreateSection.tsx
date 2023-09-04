import React, { FC } from "react";

import LargeHeading from "@/ui/LargeHeading";

interface CreateSectionProps {
  title: string;
  subtitle?: string;
  form: React.ReactNode;
  infoSide?: React.ReactNode;
}

const CreateSection: FC<CreateSectionProps> = ({
  title,
  subtitle,
  form,
  infoSide,
}) => {
  return (
    <div className="flex h-fit min-h-[90vh] w-full flex-col gap-4 rounded-sm dark:bg-slate-900 xl:flex-row">
      <div className="relativ h-fit min-h-[90vh] w-full rounded-md bg-white/75 p-2 shadow-md backdrop-blur-md dark:bg-slate-800 xl:w-9/12">
        <LargeHeading
          className="mt-12 flex w-full flex-row justify-center"
          size={"sm"}
        >
          {title}
        </LargeHeading>
        {form}
      </div>
      <div className="relativ flex h-fit min-h-[90vh] w-full flex-col gap-2 rounded-md bg-white/75 px-4 py-2 shadow-md backdrop-blur-md dark:bg-slate-800 xl:h-full xl:w-3/12">
        <h1 className="mt-8 w-full text-center text-2xl font-medium">
          {subtitle}
        </h1>
        {infoSide}
      </div>
    </div>
  );
};

export default CreateSection;
