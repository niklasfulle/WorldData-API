"use client";
import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import FormCountriesTextarea from "../components/FormCountriesTextarea";
import { createLake, updateLake } from "@/lib/data/lakes-data-functions";
import { useRouter } from "next/navigation";
import { shortToast } from "@/lib/helpers/shorter-function";

interface LakesFormProps {
  buttonTitle: string;
  action: string;
  id?: string;
  lake?: any;
}

const LakesForm: FC<LakesFormProps> = ({ buttonTitle, action, id, lake }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (disabled) {
      shortToast("Error", "Please, fill the form correctly.", "error", 5000);
      setIsLoading(false);
      return;
    }

    if (action === "create") {
      const res = await createLake(e, setIsLoading);
      
      if (res === "success") {
        e.target.reset();
      }
    } else if (action === "update" && id !== undefined) {
      await updateLake(id, e, setIsLoading);
    }

    setIsLoading(false);
    router.refresh();
  };

  return (
    <div className="flex min-h-full flex-col rounded-lg px-2 py-6 md:px-6 lg:px-8">
      <div className="mt-3 sm:mx-auto sm:w-full">
        <form className="space-y-6" onSubmit={(e) => handelSubmit(e)}>
          <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-around">
            <div className="w-[18rem]">
              <FormInput id="name" title="Name" value={lake?.name || ""} />
              <FormInput
                id="area_km2"
                title="Area Km²"
                value={lake?.area_km2 || ""}
              />
              <FormInput
                id="depth_m"
                title="Depth m"
                value={lake?.depth_m || ""}
              />
              <FormInput
                id="volume_km3"
                title="Volume Km³"
                value={lake?.volume_km3 || ""}
              />
              <FormInput
                id="latitude"
                title="Latitude"
                value={lake?.latitude || ""}
              />
              <FormInput
                id="longitude"
                title="Longitude"
                value={lake?.longitude || ""}
              />
            </div>
            <div className="w-[18rem]">
              <FormInput
                id="continent"
                title="Continent"
                value={lake?.continent || ""}
              />
              <FormCountriesTextarea
                id="countries"
                title="Countries"
                value={lake?.countries || ""}
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

export default LakesForm;
