/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { oceanCreateSchema } from "../db/schema/ocean.schema";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

type SetError = Dispatch<SetStateAction<string>>;

type Country = {
  id: number;
  name: string;
}

/**
 * Creates an array of objects with id and name
 * 
 * @param countriesString  - string of countries separated by commas
 * @returns array of objects with id and name
 */
const createCountiresArray = (countriesString: string): Country[] => {
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
 * Returns all oceans from the database
 */
export const getOceans = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting all oceans.");
  }
  setIsLoading(false);
}

/**
 * Returns the last ten oceans from the database
 */
export const getOceanLastTen = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the last ten oceans.");
  }
  setIsLoading(false);
}

/**
 * Gets a ocean from the database
 * 
 * @param id  - id of the ocean to get 
 */
export const getOcean = async (id: number, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the ocean.");
  }
  setIsLoading(false);
}

/**
 * Creates a ocean to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createOcean = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      area_km2: { value: string };
      avg_depth_m: { value: string };
      max_depth_m: { value: string };
      volume_km3: { value: string };
      coast_km: { value: string };
      countries: { value: string };
      territories: { value: string };
    };

    const ocean = oceanCreateSchema.parse({
      name: target.name.value,
      area_km2: Number(target.area_km2.value),
      avg_depth_m: Number(target.avg_depth_m.value),
      max_depth_m: Number(target.max_depth_m.value),
      volume_km3: Number(target.volume_km3.value),
      coast_km: Number(target.coast_km.value),
      countries: createCountiresArray(target.countries.value),
      territories: createCountiresArray(target.territories.value),
    });

    const res = await fetch("/api/data/oceans", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ocean),
    })

    // TODO: res handling
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the continent.");
  }
  setIsLoading(false);
}

/**
 * Updates a ocean to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateOcean = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error updating the ocean.");
  }
  setIsLoading(false);
}

/**
 * Deletes a ocean from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteOcean = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error deleting the ocean.");
  }
  setIsLoading(false);
}