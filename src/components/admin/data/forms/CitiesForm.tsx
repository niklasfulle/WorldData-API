import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import { createCity } from "@/lib/data/cities-data-functions";
import FormTimezoneInput from "../components/FormTimezoneInput";

interface CitiesFormProps {
  buttonTitle: string;
  city?: any;
}

const CitiesForm: FC<CitiesFormProps> = ({ buttonTitle, city }) => {
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
          onSubmit={(e) => createCity(e, setIsLoading, setError)}
        >
          <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-around">
            <div className="w-[18rem]">
              <FormInput id="name" title="Name" value={city?.name || ""} />
              <FormInput
                id="latitude"
                title="Latitude"
                value={city?.latitude || ""}
              />
              <FormInput
                id="longitude"
                title="Longitude"
                value={city?.longitude || ""}
              />
              <FormInput
                id="population"
                title="Population"
                value={city?.area_populationm2 || ""}
              />
              <FormInput
                id="area_km2"
                title="Area Km²"
                value={city?.area_km2 || ""}
              />
              <FormInput
                id="country"
                title="Country"
                value={city?.country || ""}
              />
            </div>
            <div className="w-[18rem]">
              <FormTimezoneInput
                id="timezone"
                title="Timezone"
                timezone={city?.timezone || {}}
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

export default CitiesForm;
