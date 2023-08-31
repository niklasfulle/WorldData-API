import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import FormTextarea from "@/ui/FormTextarea";

interface OceansFormProps {
  buttonTitle: string;
  ocean?: any;
}

const OceansForm: FC<OceansFormProps> = ({ buttonTitle, ocean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex min-h-full flex-col items-center justify-center rounded-lg px-2 py-6 md:px-6 lg:px-8">
      <p
        id="errors"
        className="mt-2 text-center font-bold text-red-600 sm:max-w-[14rem]"
      >
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full">
        <form
          className="space-y-6"
          onSubmit={(e) => console.log(e, setIsLoading, setError)}
        >
          <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-around">
            <div className="w-[18rem]">
              <FormInput id="name" title="Name" value={ocean?.name || ""} />
              <FormInput
                id="area_km2"
                title="Area Km²"
                value={ocean?.area_km2 || ""}
              />
              <FormInput
                id="avg_depth_m"
                title="Average Depth m"
                value={ocean?.avg_depth_m || ""}
              />
              <FormInput
                id="max_depth_m"
                title="Max Depth m"
                value={ocean?.max_depth_m || ""}
              />
              <FormInput
                id="volume_km3"
                title="Volume Km³"
                value={ocean?.volume_km3 || ""}
              />
              <FormInput
                id="coast_km"
                title="Coast Km"
                value={ocean?.coast_km || ""}
              />
            </div>
            <div className="w-[18rem]">
              <FormTextarea
                id="countries"
                title="Countries"
                value={ocean?.countries || ""}
                infoText="Must be a list with countries separated by commas."
              />
              <FormTextarea
                id="territories"
                title="Territories"
                value={ocean?.territories || ""}
                infoText="Must be a list with countries separated by commas."
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

export default OceansForm;
