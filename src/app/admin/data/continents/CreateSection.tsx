import React, { FC } from "react";
import ContinentsForm from "./ContinentsForm";
import LargeHeading from "@/ui/LargeHeading";

interface CreateSectionProps {}

const CreateSection: FC<CreateSectionProps> = () => {
  return (
    <div className="dark:bg-slate-900 w-full h-full rounded-sm flex flex-col xl:flex-row gap-4">
      <div className="w-full xl:w-9/12 dark:bg-slate-800 bg-white/75 rounded-md h-fit relativ p-2 ">
        <LargeHeading className="flex flex-row justify-center w-full mt-4" size={"sm"}>
          Create City
        </LargeHeading>
        <ContinentsForm buttonTitle="Create" />
      </div>
      <div className="w-full xl:w-3/12 dark:bg-slate-800 bg-white/75 h-full xl:h-full rounded-md relativ flex flex-col gap-2"></div>
    </div>
  );
};

export default CreateSection;
