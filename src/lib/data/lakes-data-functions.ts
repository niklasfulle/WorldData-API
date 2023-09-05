/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
/* eslint-disable no-empty*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { lakeCreateSchema } from "../db/schema/lake.schema";

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
      id: index,
      name: country,
    };
  });

  return countries;
}

/**
 * Returns all lakes from the database
 */
export const getLakes = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting all lakes.");
  }
  setIsLoading(false);
}

/**
 * Returns the last ten lakes from the database
 */
export const getLakeLastTen = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the last ten lakes.");
  }
  setIsLoading(false);
}

/**
 * Gets a lake from the database
 * 
 * @param id  - id of the lake to get 
 */
export const getLake = async (id: number, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the lake.");
  }
  setIsLoading(false);
}

/**
 * Creates a lake to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createLake = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      area_km2: { value: string };
      depth_m: { value: string };
      volume_km3: { value: string };
      latitude: { value: string };
      longitude: { value: string };
      continent: { value: string };
      countries: { value: string };
    };

    const lake = lakeCreateSchema.parse({
      name: target.name.value,
      area_km2: Number(target.area_km2.value),
      depth_m: Number(target.depth_m.value),
      volume_km3: Number(target.volume_km3.value),
      latitude: target.latitude.value,
      longitude: target.longitude.value,
      continent: target.continent.value,
      countries: createCountiresArray(target.countries.value)
    });

    const res = await fetch("/api/data/lakes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lake),
    })

    // TODO: res handling
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the lake.");
  }
  setIsLoading(false);
}

/**
 * Updates a lake to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateLake = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error updating the lake.");
  }
  setIsLoading(false);
}

/**
 * Deletes a lake from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteLake = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error deleting the lake.");
  }
  setIsLoading(false);
}