import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import FormTextarea from "@/ui/FormTextarea";

interface LakesFormProps {
  buttonTitle: string;
  lake?: any;
}

const LakesForm: FC<LakesFormProps> = ({ buttonTitle, lake }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-white dark:bg-slate-800 rounded-lg items-center">
      <p id="errors" className="sm:max-w-[14rem] text-center mt-2 text-red-600 font-bold">
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-[18rem]">
        <form className="space-y-6" onSubmit={(e) => console.log(e, setIsLoading, setError)}>
          <FormInput id="name" title="Name" value={lake?.name || ""} />
          <FormInput id="area_km2" title="Area Km²" value={lake?.area_km2 || ""} />
          <FormInput id="depth_m" title="Depth m" value={lake?.depth_m || ""} />
          <FormInput id="volume_km3" title="Volume Km³" value={lake?.volume_km3 || ""} />
          <FormInput id="latitude" title="Latitude" value={lake?.latitude || ""} />
          <FormInput id="longitude" title="Longitude" value={lake?.longitude || ""} />
          <FormInput id="continent" title="Continent" value={lake?.continent || ""} />
          <FormTextarea
            id="countries"
            title="Countries"
            value={lake?.countries || ""}
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

export default LakesForm;
