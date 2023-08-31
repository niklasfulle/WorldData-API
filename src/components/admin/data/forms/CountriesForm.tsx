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

  const [timezones, setTimezones] = useState(country?.timezones || []);

  return (
    <div className="flex min-h-full flex-col items-center justify-center rounded-lg px-2 py-6 md:px-6 lg:px-8">
      <p
        id="errors"
        className="mt-2 text-center font-bold text-red-600 sm:max-w-[14rem]"
      >
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full">
        <form
          className="space-y-6"
          onSubmit={(e) => console.log(e, setIsLoading, setError)}
        >
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
              <FormInput
                id="independent"
                title="Independent"
                value={country?.independent || ""}
              />
              <FormInput
                id="area_m2"
                title="Area m²"
                value={country?.area_m2 || ""}
              />
              <FormInput
                id="population"
                title="Population"
                value={country?.area_populationm2 || ""}
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
              />
              <FormTranslationsInput
                id="translations"
                title="Translations"
                translations={country?.translations || ""}
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
