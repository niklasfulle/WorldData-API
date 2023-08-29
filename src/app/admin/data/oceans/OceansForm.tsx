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
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-white dark:bg-slate-800 rounded-lg items-center">
      <p id="errors" className="sm:max-w-[14rem] text-center mt-2 text-red-600 font-bold">
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-[18rem]">
        <form className="space-y-6" onSubmit={(e) => console.log(e, setIsLoading, setError)}>
          <FormInput id="name" title="Name" value={ocean?.name || ""} />
          <FormInput id="area_km2" title="Area Km²" value={ocean?.area_km2 || ""} />
          <FormInput id="avg_depth_m" title="Average Depth m" value={ocean?.avg_depth_m || ""} />
          <FormInput id="max_depth_m" title="Max Depth m" value={ocean?.max_depth_m || ""} />
          <FormInput id="volume_km3" title="Volume Km³" value={ocean?.volume_km3 || ""} />

          <FormInput id="coast_km" title="Coast Km" value={ocean?.coast_km || ""} />
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
          <div>
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              type="submit"
              className="ease-in transition-all flex w-full justify-center rounded-md bg-indigo-600 dark:bg-sky-400 hover:bg-indigo-500 dark:hover:bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-sky-500 disabled:pointer-events-none dark:focus:ring-offset-slate-700"
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
