/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { seaCreateSchema } from "../db/schema/sea.schema";

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
 * Returns all seas from the database
 */
export const getSeas = async () => {

}

/**
 * Gets a sea from the database
 * 
 * @param id  - id of the sea to get 
 */
export const getSea = async (id: number) => {

}

/**
 * Creates a sea to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createSea = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      area_km2: { value: string };
      avg_depth_m: { value: string };
      max_depth_m: { value: string };
      countries: { value: string };
    };
    
    const sea = seaCreateSchema.parse({
      name: target.name.value,
      area_km2: Number(target.area_km2.value),
      avg_depth_m: Number(target.avg_depth_m.value),
      max_depth_m: Number(target.max_depth_m.value),
      countries: createCountiresArray(target.countries.value),
    });

    const res = await fetch("/api/data/seas", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sea),
    })

    // TODO: res handling
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the sea.");
  }
  setIsLoading(false);
}

/**
 * Updates a sea to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateSea = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => { }

/**
 * Deletes a sea from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteSea = async (setIsLoading: SetIsLoading, setError: SetError) => { }