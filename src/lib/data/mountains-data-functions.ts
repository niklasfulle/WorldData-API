/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { mountainCreateSchema } from "../db/schema/mountain.schema";

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
 * Returns all mountains from the database
 */
export const getMountains = async () => {

}

/**
 * Gets a mountain from the database
 * 
 * @param id  - id of the mountain to get 
 */
export const getMountain = async (id: number) => {

}

/**
 * Creates a mountain to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createMountain = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      height_m: { value: string };
      latitude: { value: string };
      longitude: { value: string };
      continent: { value: string };
      first_climbed: { value: string };
      countries: { value: string };
    };

    const mountain = mountainCreateSchema.parse({
      name: target.name.value,
      height_m: Number(target.height_m.value),
      latitude: target.latitude.value,
      longitude: target.longitude.value,
      continent: target.continent.value,
      countries: createCountiresArray(target.countries.value),
      first_climbed: target.first_climbed.value,
    });

    console.log(mountain);

    // TODO: Create mountain in the database
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the mountain.");
  }
  setIsLoading(false);
}

/**
 * Updates a mountain to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateMountain = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => { }

/**
 * Deletes a mountain from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteMountain = async (setIsLoading: SetIsLoading, setError: SetError) => { }