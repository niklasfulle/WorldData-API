import { Dispatch, FormEvent, SetStateAction } from "react"
import { oceanCreateSchema } from "../db/schema/ocean.schema";
import { shortToast } from "../helpers/shorter-function";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

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
 * Creates a ocean to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createOcean = async (e: FormEvent, setIsLoading: SetIsLoading) => {
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

    if (res.status === 201) {
      shortToast("Success", "Ocean created successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to create a ocean", "error", 5000);
    }

    setIsLoading(false);
    return "success"
  } catch (error: any) {
    if (error.error) {
      shortToast("Error", error.error[0].message, "error", 10000);
    } else if (error.message) {
      const messages: any = JSON.parse(error.message);
      shortToast("Error", messages[0].path[0] + ": " + messages[0].message, "error", 10000);
    } else {
      shortToast("Error", error.message, "error", 10000);
    }

    setIsLoading(false);
    return "error"
  }
}

/**
 * Updates a ocean to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateOcean = async (id: string, e: FormEvent, setIsLoading: SetIsLoading) => {
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

    const data = {
      id,
      ocean
    }

    const res = await fetch("/api/data/oceans", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status === 200) {
      shortToast("Success", "Ocean updated successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to updated a ocean", "error", 5000);
    }
  } catch (error: any) {
    if (error.error) {
      shortToast("Error", error.error[0].message, "error", 10000);
    } else if (error.message) {
      const messages: any = JSON.parse(error.message);
      shortToast("Error", messages[0].path[0] + ": " + messages[0].message, "error", 10000);
    } else {
      shortToast("Error", error.message, "error", 10000);
    }
  }
  setIsLoading(false);
}