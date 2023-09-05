"use client";
import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import FormMultyTimezonesInput from "@/components/admin/data/components/FormMultyTimezonesInput";
import {
  createCountry,
  updateCountry,
} from "@/lib/data/countries-data-functions";
import FormSwitchInput from "../components/FormSwitchInput";
import FormTranslationsInput from "../components/FormTranslationsInput";
import { useRouter } from "next/navigation";

interface CountriesFormProps {
  buttonTitle: string;
  action: string;
  id?: string;
  country?: any;
}

const CountriesForm: FC<CountriesFormProps> = ({
  buttonTitle,
  action,
  id,
  country,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  const [timezones, setTimezones] = useState(country?.timezones || []);
  const [translations, setTranslations] = useState(country?.translations || {});

  const handelSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (disabled) {
      setError("Please, fill the form correctly.");
      setIsLoading(false);
      return;
    }

    if (action === "create") {
      createCountry(e, timezones, translations, setIsLoading, setError);
    } else if (action === "update" && id !== undefined) {
      updateCountry(id, e, timezones, translations, setIsLoading, setError);
    }

    e.target.reset();

    if (action === "create") {
      setTimezones([]);
      setTranslations({});
    } else {
      setTimezones(timezones);
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
              <FormInput id="name" title="Name" value={country?.name || ""} />
              <FormInput id="iso3" title="Iso3" value={country?.iso3 || ""} />
              <FormInput id="iso2" title="Iso2" value={country?.iso2 || ""} />
              <FormInput
                id="numeric_code"
                title="Numeric Code"
                value={country?.numeric_code || ""}
              />
              <FormInput
                id="phone_code"
                title="Phone Code"
                value={country?.phone_code || ""}
              />
              <FormInput
                id="capital"
                title="Capital"
                value={country?.capital || ""}
              />
              <FormInput id="tld" title="Tld" value={country?.tld || ""} />
              <FormInput
                id="region"
                title="Region"
                value={country?.region || ""}
              />
              <FormInput
                id="subregion"
                title="Subregion"
                value={country?.subregion || ""}
              />
              <FormInput
                id="latitude"
                title="Latitude"
                value={country?.latitude || ""}
              />
              <FormInput
                id="longitude"
                title="Longitude"
                value={country?.longitude || ""}
              />
              <FormSwitchInput
                id="independent"
                title="Independent"
                value={country?.independent || false}
                checked={checked}
                setChecked={setChecked}
              />
              <FormInput
                id="area_km2"
                title="Area Km²"
                value={country?.area_km2 || ""}
              />
              <FormInput
                id="population"
                title="Population"
                value={country?.population || ""}
              />
              <FormInput
                id="density_km2"
                title="Density km²"
                value={country?.density_km2 || ""}
              />
              <FormInput
                id="currency"
                title="Currency"
                value={country?.currency || ""}
              />
              <FormInput
                id="currency_symbol"
                title="Currency Symbol"
                value={country?.currency_symbol || ""}
              />
              <FormInput
                id="native_name"
                title="Native Name"
                value={country?.native_name || ""}
              />
            </div>
            <div className="w-[18rem]">
              <FormMultyTimezonesInput
                id="timezones"
                title="Timezones"
                timezones={timezones}
                setTimezones={setTimezones}
                setDisabled={setDisabled}
                action={action}
              />
              <FormTranslationsInput
                id="translations"
                title="Translations"
                translations={translations}
                setTranslations={setTranslations}
              />
              <FormInput
                id="emoji"
                title="Emoji"
                value={country?.emoji || ""}
              />
              <FormInput
                id="emojiU"
                title="EmojiU"
                value={country?.emojiU || ""}
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

export default CountriesForm;
