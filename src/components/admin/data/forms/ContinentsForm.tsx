"use client";
import React, { FC, useEffect, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import { createContinent } from "@/lib/data/continents-data-functions";
import FormCountriesTextarea from "../components/FormCountriesTextarea";
import { useRouter } from "next/navigation";

interface ContinentsFormProps {
  buttonTitle: string;
  continent?: any;
}

const ContinentsForm: FC<ContinentsFormProps> = ({
  buttonTitle,
  continent,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handelSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (disabled) {
      setError("Please, fill the form correctly.");
      setIsLoading(false);
      return;
    }
    createContinent(e, setIsLoading, setError);
    e.target.reset();
    setIsLoading(false);
    router.refresh();
  };

  return (
    <div className="flex min-h-full flex-col rounded-lg px-2 py-6 md:px-6 lg:px-8">
      <p id="errors" className="my-3 w-full text-center font-bold text-red-600">
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full">
        <form className="space-y-6" onSubmit={(e) => handelSubmit(e)}>
          <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-around">
            <div className="w-[18rem]">
              <FormInput id="name" title="Name" value={continent?.name || ""} />
              <FormInput
                id="area_km2"
                title="Area Km²"
                value={continent?.area_km2 || ""}
              />
              <FormInput
                id="population"
                title="Population"
                value={continent?.population || ""}
              />
              <FormInput
                id="density_km2"
                title="Density Km2"
                value={continent?.density_km2 || ""}
              />
            </div>
            <div className="w-[18rem]">
              <FormCountriesTextarea
                id="countries"
                title="Countries"
                value={continent?.countries || ""}
                infoText="Must be a list with countries separated by commas."
                setDisabled={setDisabled}
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

export default ContinentsForm;
