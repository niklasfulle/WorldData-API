import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import FormTextarea from "@/ui/FormTextarea";

interface ContinentsFormProps {
  buttonTitle: string;
  continent?: any;
}

const ContinentsForm: FC<ContinentsFormProps> = ({ buttonTitle, continent }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-white dark:bg-slate-800 rounded-lg items-center">
      <p id="errors" className="sm:max-w-[14rem] text-center mt-2 text-red-600 font-bold">
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-[18rem]">
        <form className="space-y-6" onSubmit={(e) => console.log(e.target, setIsLoading, setError)}>
          <FormInput id="name" title="Name" value={continent?.name || ""} />
          <FormInput id="area_km2" title="Area Km²" value={continent?.area_km2 || ""} />
          <FormInput id="population" title="Population" value={continent?.population || ""} />
          <FormInput id="density_km2" title="Population" value={continent?.density_km2 || ""} />
          <FormTextarea
            id="countries"
            title="Countries"
            value={continent?.countries || ""}
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

export default ContinentsForm;
