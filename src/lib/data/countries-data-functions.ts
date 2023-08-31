/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { countryCreateSchema } from "../db/schema/country.schema";


type SetIsLoading = Dispatch<SetStateAction<boolean>>

type SetError = Dispatch<SetStateAction<string>>;

type Timezone = {
  zone_name: string;
  gmt_offset: string;
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
 * Returns all countries from the database
 */
export const getCountries = async () => {

}

/**
 * Gets a country from the database
 * 
 * @param id  - id of the country to get 
 */
export const getCountry = async (id: number) => {

}

/**
 * Creates a country to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createCountry = async (e: FormEvent, timezones: Timezone[], checked: boolean, translations: Translations, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
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
    };

    const country = countryCreateSchema.parse({
      name: target.name.value,
      iso3: target.iso3.value,
      iso2: target.iso2.value,
      numeric_code: target.numeric_code.value,
      phone_code: target.phone_code.value,
      capital: target.capital.value,
      tld: target.tld.value,
      region: target.region.value,
      subregion: target.subregion.value,
      latitude: target.latitude.value,
      longitude: target.longitude.value,
      indepenent: checked,
      area_km2: target.area_km2.value,
      population: target.population.value,
      density_km2: target.density_km2.value,
      currency: target.currency.value,
      currency_symbol: target.currency_symbol.value,
      emoji: target.emoji.value,
      emojiU: target.emojiU.value,
      timezones: timezones,
      translations: translations,
    });

    console.log(country);

    // TODO: Create country in the database
    setError("");
  } catch (error) {
    console.log(error)
    setError("There was an error creating the country.");
  }
  setIsLoading(false);
}

/**
 * Updates a country to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateCountry = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => { }

/**
 * Deletes a country from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteCountry = async (setIsLoading: SetIsLoading, setError: SetError) => { }