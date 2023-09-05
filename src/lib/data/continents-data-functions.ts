/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
/* eslint-disable no-empty*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { continentCreateSchema } from "../db/schema/continent.schema";

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
 * Returns all continents from the database
 */
export const getContinents = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting all continents.");
  }
  setIsLoading(false);
}

/**
 * Returns the last ten continents from the database
 */
export const getContinentLastTen = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the last ten continents.");
  }
  setIsLoading(false);
}

/**
 * Gets a continent from the database
 * 
 * @param id  - id of the continent to get 
 */
export const getContinent = async (id: number, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the continent.");
  }
  setIsLoading(false);
}

/**
 * Creates a continent to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createContinent = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      area_km2: { value: string };
      population: { value: string };
      density_km2: { value: string };
      countries: { value: string };
    };

    const continent = continentCreateSchema.parse({
      name: target.name.value,
      area_km2: Number(target.area_km2.value),
      population: Number(target.population.value),
      density_km2: Number(target.density_km2.value),
      countries: createCountiresArray(target.countries.value)
    });

    const res = await fetch("/api/data/continents", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(continent),
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
 * Updates a continent to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateContinent = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error updating the continent.");
  }
  setIsLoading(false);
}

/**
 * Deletes a continent from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteContinent = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error deleting the continent.");
  }
  setIsLoading(false);
}