"use client";
import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import {
  createCelestialBodie,
  updateCelestialBodie,
} from "@/lib/data/celestialbodie-data-functions";
import FormTranslationsInput from "../components/FormTranslationsInput";
import { useRouter } from "next/navigation";

interface CelestialBodieFormProps {
  buttonTitle: string;
  action: string;
  id?: string;
  celestialBodie?: any;
}

const CelestialBodieForm: FC<CelestialBodieFormProps> = ({
  buttonTitle,
  action,
  id,
  celestialBodie,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [translations, setTranslations] = useState(
    celestialBodie?.translations || {}
  );

  const handelSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (action === "create") {
      createCelestialBodie(e, translations, setIsLoading, setError);
    } else if (action === "update" && id !== undefined) {
      updateCelestialBodie(id, e, translations, setIsLoading, setError);
    }

    e.target.reset();

    if (action === "create") {
      setTranslations({});
    } else {
      setTranslations(translations);
    }

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
              <FormInput
                id="name"
                title="Name"
                value={celestialBodie?.name || ""}
              />
              <FormInput
                id="type"
                title="Type"
                value={celestialBodie?.type || ""}
              />
              <FormInput
                id="mass"
                title="Mass"
                value={celestialBodie?.mass || ""}
              />
              <FormInput
                id="diameter_km"
                title="Diameter Km"
                value={celestialBodie?.diameter_km || ""}
              />
              <FormInput
                id="tilt_degrees"
                title="Tilt Degrees"
                value={celestialBodie?.tilt_degrees || ""}
              />
              <FormInput
                id="rotation_period_days"
                title="Rotation Period Days"
                value={celestialBodie?.rotation_period_days || ""}
              />
            </div>
            <div className="w-[18rem]">
              <FormTranslationsInput
                id="translations"
                title="Translations"
                translations={translations}
                setTranslations={setTranslations}
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

export default CelestialBodieForm;
