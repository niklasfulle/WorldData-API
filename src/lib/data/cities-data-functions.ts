import { Dispatch, FormEvent, SetStateAction } from "react"
import { cityCreateSchema } from "../db/schema/city.schema";
import { shortToast } from "../helpers/shorter-function";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

/**
 * Creates a city to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createCity = async (e: FormEvent, setIsLoading: SetIsLoading) => {
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

    const res = await fetch("/api/data/cities", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(city),
    })

    if (res.status === 201) {
      shortToast("Success", "City created successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to create a city", "error", 5000);
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
 * Updates a city to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateCity = async (id: string, e: FormEvent, setIsLoading: SetIsLoading) => {
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

    const data = {
      id,
      city
    }

    const res = await fetch("/api/data/cities", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status === 200) {
      shortToast("Success", "City updated successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to updated a city", "error", 5000);
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

