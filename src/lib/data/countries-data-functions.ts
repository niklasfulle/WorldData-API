import { Dispatch, FormEvent, SetStateAction } from "react"
import { countryCreateSchema } from "../db/schema/country.schema";
import { shortToast } from "../helpers/shorter-function";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

type Timezone = {
  zone_name: string;
  gmt_offset: number;
  gmt_offset_name: string;
  abbreviation: string;
  tz_name: string;
};

type Translations = {
  kr: string;
  "pt-BR": string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  cn: string;
  tr: string;
};

/**
 * Creates a country to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createCountry = async (e: FormEvent, timezones: Timezone[], translations: Translations, setIsLoading: SetIsLoading) => {
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      iso3: { value: string };
      iso2: { value: string };
      numeric_code: { value: string };
      phone_code: { value: string };
      capital: { value: string };
      tld: { value: string };
      region: { value: string };
      subregion: { value: string };
      latitude: { value: string };
      longitude: { value: string };
      area_km2: { value: string };
      population: { value: string };
      density_km2: { value: string };
      currency: { value: string };
      currency_symbol: { value: string };
      native_name: { value: string };
      emoji: { value: string };
      emojiU: { value: string };
      independent: { checked: boolean };
    };

    const country = countryCreateSchema.parse({
      name: target.name.value,
      iso3: target.iso3.value,
      iso2: target.iso2.value,
      numeric_code: Number(target.numeric_code.value),
      phone_code: target.phone_code.value,
      capital: target.capital.value,
      tld: target.tld.value,
      region: target.region.value,
      subregion: target.subregion.value,
      latitude: target.latitude.value,
      longitude: target.longitude.value,
      independent: target.independent.checked,
      area_km2: Number(target.area_km2.value),
      population: Number(target.population.value),
      density_km2: Number(target.density_km2.value),
      currency: target.currency.value,
      currency_symbol: target.currency_symbol.value,
      native_name: target.native_name.value,
      emoji: target.emoji.value,
      emojiU: target.emojiU.value,
      timezones: timezones,
      translations: translations,
    });

    const res = await fetch("/api/data/countries", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(country),
    })

    if (res.status === 201) {
      shortToast("Success", "Country created successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to create a country", "error", 5000);
    }

    setIsLoading(false);
    return "success"
  } catch (error: any) {
    if (error.error) {
      shortToast("Error", error.error[0].message, "error", 10000);
    } else if (error.message) {
      const messages: any = JSON.parse(error.message);
      shortToast("Error", messages[0].path[0] + ": " + messages[0].message, "error", 10000);
    } else {
      shortToast("Error", error.message, "error", 10000);
    }

    setIsLoading(false);
    return "error"
  }
}

/**
 * Updates a country to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateCountry = async (id: string, e: FormEvent, timezones: Timezone[], translations: Translations, setIsLoading: SetIsLoading) => {
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      iso3: { value: string };
      iso2: { value: string };
      numeric_code: { value: string };
      phone_code: { value: string };
      capital: { value: string };
      tld: { value: string };
      region: { value: string };
      subregion: { value: string };
      latitude: { value: string };
      longitude: { value: string };
      area_km2: { value: string };
      population: { value: string };
      density_km2: { value: string };
      currency: { value: string };
      currency_symbol: { value: string };
      native_name: { value: string };
      emoji: { value: string };
      emojiU: { value: string };
      independent: { checked: boolean };
    };

    const country = countryCreateSchema.parse({
      name: target.name.value,
      iso3: target.iso3.value,
      iso2: target.iso2.value,
      numeric_code: Number(target.numeric_code.value),
      phone_code: target.phone_code.value,
      capital: target.capital.value,
      tld: target.tld.value,
      region: target.region.value,
      subregion: target.subregion.value,
      latitude: target.latitude.value,
      longitude: target.longitude.value,
      independent: target.independent.checked,
      area_km2: Number(target.area_km2.value),
      population: Number(target.population.value),
      density_km2: Number(target.density_km2.value),
      currency: target.currency.value,
      currency_symbol: target.currency_symbol.value,
      native_name: target.native_name.value,
      emoji: target.emoji.value,
      emojiU: target.emojiU.value,
      timezones: timezones,
      translations: translations,
    });

    const data = {
      id,
      country
    }

    const res = await fetch("/api/data/countries", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status === 200) {
      shortToast("Success", "Country updated successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to updated a country", "error", 5000);
    }
  } catch (error: any) {
    if (error.error) {
      shortToast("Error", error.error[0].message, "error", 10000);
    } else if (error.message) {
      const messages: any = JSON.parse(error.message);
      shortToast("Error", messages[0].path[0] + ": " + messages[0].message, "error", 10000);
    } else {
      shortToast("Error", error.message, "error", 10000);
    }
  }
  setIsLoading(false);
}