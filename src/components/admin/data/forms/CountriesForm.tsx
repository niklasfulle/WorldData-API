import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import FormTranslationsInput from "@/components/ui/FormTranslationsInput";
import FormMultyTimezonesInput from "@/components/ui/FormMultyTimezonesInput";

interface CountriesFormProps {
  buttonTitle: string;
  country?: any;
}

const CountriesForm: FC<CountriesFormProps> = ({ buttonTitle, country }) => {
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
              <FormInput id="name" title="Name" value={country?.name || ""} />
              <FormInput id="iso3" title="Iso3" value={country?.iso3 || ""} />
              <FormInput id="iso2" title="Iso2" value={country?.iso2 || ""} />
              <FormInput
                id="numeric_code"
                title="Numeric Code"
                value={country?.numeric_code || ""}
              />
              <FormInput id="phone_code" title="Phone Code" value={country?.phone_code || ""} />
              <FormInput id="capital" title="Capital" value={country?.capital || ""} />
              <FormInput id="tld" title="Tld" value={country?.tld || ""} />
              <FormInput id="region" title="Region" value={country?.region || ""} />
              <FormInput id="subregion" title="Subregion" value={country?.subregion || ""} />
              <FormInput id="latitude" title="Latitude" value={country?.latitude || ""} />
              <FormInput id="longitude" title="Longitude" value={country?.longitude || ""} />
              <FormInput id="independent" title="Independent" value={country?.independent || ""} />
              <FormInput id="area_m2" title="Area m²" value={country?.area_m2 || ""} />
              <FormInput
                id="population"
                title="Population"
                value={country?.area_populationm2 || ""}
              />
              <FormInput id="density_km2" title="Density km²" value={country?.density_km2 || ""} />
              <FormInput id="currency" title="Currency" value={country?.currency || ""} />
              <FormInput
                id="currency_symbol"
                title="Currency Symbol"
                value={country?.currency_symbol || ""}
              />
            </div>
            <div className="w-[18rem]">
              <FormMultyTimezonesInput
                id="timezones"
                title="Timezones"
                timezones={country?.timezones || ""}
              />
              <FormInput id="native_name" title="Native Name" value={country?.native_name || ""} />
              <FormTranslationsInput
                id="translations"
                title="Translations"
                translations={country?.translations || ""}
              />
              <FormInput id="emoji" title="Emoji" value={country?.emoji || ""} />
              <FormInput id="emojiU" title="EmojiU" value={country?.emojiU || ""} />
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

export default CountriesForm;
