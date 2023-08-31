/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { riverCreateSchema } from "../db/schema/river.schema";

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
 * Returns all rivers from the database
 */
export const getRivers = async () => {

}

/**
 * Gets a river from the database
 * 
 * @param id  - id of the river to get 
 */
export const getRiver = async (id: number) => {

}

/**
 * Creates a river to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createRiver = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      length_km: { value: string };
      countries: { value: string };
      discharge_m3_s: { value: string };
      outflow: { value: string };
    };

    const river = riverCreateSchema.parse({
      name: target.name.value,
      length_km: Number(target.length_km.value),
      countries: createCountiresArray(target.countries.value),
      discharge_m3_s: Number(target.discharge_m3_s.value),
      outflow: target.outflow.value,
    });

    console.log(river);

    // TODO: Create river in the database
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the river.");
  }
  setIsLoading(false);
}

/**
 * Updates a river to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateRiver = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => { }

/**
 * Deletes a river from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteRiver = async (setIsLoading: SetIsLoading, setError: SetError) => { }