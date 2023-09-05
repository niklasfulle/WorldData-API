/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
/* eslint-disable no-empty*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { currencyCreateSchema } from "../db/schema/currency.schema";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

type SetError = Dispatch<SetStateAction<string>>;

/**
 * Creates an array of objects with id and name
 * 
 * @param countriesString  - string of countries separated by commas
 * @returns array of objects with id and name
 */
const createCountiresArray = (countriesString: string) => {
  const countriesArray = countriesString.split(",").map((country) => country.trim());

  const countries = countriesArray.map((country, index) => {
    return {
      id: index + 1,
      name: country,
    };
  });

  return countries;
}

/**
 * Returns all currencies from the database
 */
export const getCurrencies = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting all currencies.");
  }
  setIsLoading(false);
}

/**
 * Returns the last ten currencies from the database
 */
export const getCurrencieLastTen = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the last ten currencies.");
  }
  setIsLoading(false);
}

/**
 * Gets a currency from the database
 * 
 * @param id  - id of the currency to get 
 */
export const getCurrency = async (id: number, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the currency.");
  }
  setIsLoading(false);
}

/**
 * Creates a currency to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createCurrency = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      code: { value: string };
      symbol: { value: string };
      countries: { value: string };
    };

    const currency = currencyCreateSchema.parse({
      name: target.name.value,
      code: target.code.value,
      symbol: target.symbol.value,
      countries: createCountiresArray(target.countries.value)
    });

    const res = await fetch("/api/data/currencies", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currency),
    })

    // TODO: res handling
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the currency.");
  }
  setIsLoading(false);
}

/**
 * Updates a currency to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateCurrency = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error updating the currency.");
  }
  setIsLoading(false);
}

/**
 * Deletes a currency from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteCurrency = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error deleting the currency.");
  }
  setIsLoading(false);
}