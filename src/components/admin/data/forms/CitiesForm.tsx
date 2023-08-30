import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import FormTimezoneInput from "@/components/ui/FormTimezoneInput";

interface CitiesFormProps {
  buttonTitle: string;
  city?: any;
}

const CitiesForm: FC<CitiesFormProps> = ({ buttonTitle, city }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex min-h-full flex-col justify-center px-2 md:px-6 lg:px-8 py-6 rounded-lg items-center">
      <p id="errors" className="sm:max-w-[14rem] text-center mt-2 text-red-600 font-bold">
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full">
        <form className="space-y-6" onSubmit={(e) => console.log(e, setIsLoading, setError)}>
          <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-around w-full">
            <div className="w-[18rem]">
              <FormInput id="name" title="Name" value={city?.name || ""} />
              <FormInput id="latitude" title="Latitude" value={city?.latitude || ""} />
              <FormInput id="longitude" title="Longitude" value={city?.longitude || ""} />
              <FormInput id="population" title="Population" value={city?.area_populationm2 || ""} />
              <FormInput id="area_m2" title="Area m²" value={city?.area_m2 || ""} />
              <FormInput id="country" title="Country" value={city?.country || ""} />
            </div>
            <div className="w-[18rem]">
              <FormTimezoneInput id="timezone" title="Timezone" timezone={city?.timezone || ""} />
            </div>
          </div>

          <div className="w-full flex flex-row justify-center pt-12 pb-8">
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              type="submit"
              className="w-48 ease-in transition-all flex justify-center rounded-md bg-indigo-600 dark:bg-sky-400 hover:bg-indigo-500 dark:hover:bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-sky-500 disabled:pointer-events-none dark:focus:ring-offset-slate-700"
            >
              {buttonTitle}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CitiesForm;
