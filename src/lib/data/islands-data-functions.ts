/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { islandCreateSchema } from "../db/schema/island.schema";

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
 * Returns all islands from the database
 */
export const getIslands = async () => {

}

/**
 * Gets a island from the database
 * 
 * @param id  - id of the island to get 
 */
export const getIsland = async (id: number) => {

}

/**
 * Creates a island to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createIsland = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      area_km2: { value: string };
      population: { value: string };
      latitude: { value: string };
      longitude: { value: string };
      continent: { value: string };
      countries: { value: string };
    };

    const island = islandCreateSchema.parse({
      name: target.name.value,
      area_km2: Number(target.area_km2.value),
      population: Number(target.population.value),
      latitude: target.latitude.value,
      longitude: target.longitude.value,
      continent: target.continent.value,
      countries: createCountiresArray(target.countries.value)
    });

    console.log(island);

    // TODO: Create island in the database
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the island.");
  }
  setIsLoading(false);
}

/**
 * Updates a island to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateIsland = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => { }

/**
 * Deletes a island from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteIsland = async (setIsLoading: SetIsLoading, setError: SetError) => { }