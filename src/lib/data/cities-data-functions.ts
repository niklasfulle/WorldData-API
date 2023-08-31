/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { cityCreateSchema } from "../db/schema/city.schema";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

type SetError = Dispatch<SetStateAction<string>>;

/**
 * Returns all cities from the database
 */
export const getCitys = async () => {

}

/**
 * Gets a city from the database
 * 
 * @param id  - id of the city to get 
 */
export const getCity = async (id: number) => {

}

/**
 * Creates a city to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createCity = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      latitude: { value: string };
      longitude: { value: string };
      population: { value: string };
      area_km2: { value: string };
      country: { value: string };
      zone_name: { value: string };
      gmt_offset: { value: string };
      gmt_offset_name: { value: string };
      abbreviation: { value: string };
      tz_name: { value: string };
    };

    const city = cityCreateSchema.parse({
      name: target.name.value,
      latitude: target.latitude.value,
      longitude: target.longitude.value,
      population: Number(target.population.value),
      area_km2: Number(target.area_km2.value),
      country: target.country.value,
      timezone: {
        zone_name: target.zone_name.value,
        gmt_offset: Number(target.gmt_offset.value),
        gmt_offset_name: target.gmt_offset_name.value,
        abbreviation: target.abbreviation.value,
        tz_name: target.tz_name.value,
      },
    });

    console.log(city);

    // TODO: Create city in the database
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the city.");
  }
  setIsLoading(false);
}

/**
 * Updates a city to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateCity = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => { }

/**
 * Deletes a city from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteCity = async (setIsLoading: SetIsLoading, setError: SetError) => { }