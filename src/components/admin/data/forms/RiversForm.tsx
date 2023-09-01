import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import { createRiver } from "@/lib/data/rivers-data-functions";
import FormCountiresTextarea from "../components/FormCountiresTextarea";

interface RiversFormProps {
  buttonTitle: string;
  river?: any;
}

const RiversForm: FC<RiversFormProps> = ({ buttonTitle, river }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex min-h-full flex-col rounded-lg px-2 py-6 md:px-6 lg:px-8">
      <p
        id="errors"
        className="mt-2 text-center font-bold text-red-600 sm:max-w-[14rem]"
      >
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full">
        <form
          className="space-y-6"
          onSubmit={(e) => createRiver(e, setIsLoading, setError)}
        >
          <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-around">
            <div className="w-[18rem]">
              <FormInput id="name" title="Name" value={river?.name || ""} />
              <FormInput
                id="length_km"
                title="Length Km"
                value={river?.length_km || ""}
              />
              <FormCountiresTextarea
                id="countries"
                title="Countries"
                value={river?.countries || ""}
                infoText="Must be a list with countries separated by commas."
              />
            </div>
            <div className="w-[18rem]">
              <FormInput
                id="discharge_m3_s"
                title="Discharge m³/s"
                value={river?.discharge_m3_s || ""}
              />
              <FormInput
                id="outflow"
                title="Outflow"
                value={river?.outflow || ""}
              />
            </div>
          </div>
          <div className="flex w-full flex-row justify-center pb-8 pt-12">
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              type="submit"
              className="flex w-48 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-all ease-in hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-sky-400 dark:text-black dark:hover:bg-sky-500 dark:focus:ring-sky-500 dark:focus:ring-offset-slate-700"
            >
              {buttonTitle}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RiversForm;
