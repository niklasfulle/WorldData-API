import { Dispatch, FormEvent, SetStateAction } from "react"
import { mountainCreateSchema } from "../db/schema/mountain.schema";
import { shortToast } from "../helpers/shorter-function";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

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
 * Creates a mountain to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createMountain = async (e: FormEvent, setIsLoading: SetIsLoading) => {
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

    const res = await fetch("/api/data/mountains", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mountain),
    })

    if (res.status === 201) {
      shortToast("Success", "Mountain created successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to create a mountain", "error", 5000);
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
 * Updates a mountain to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateMountain = async (id: string, e: FormEvent, setIsLoading: SetIsLoading) => {
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

    const data = {
      id,
      mountain
    }

    const res = await fetch("/api/data/mountains", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status === 200) {
      shortToast("Success", "Mountain updated successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to updated a mountain", "error", 5000);
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