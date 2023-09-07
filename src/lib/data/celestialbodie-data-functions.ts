import { Dispatch, FormEvent, SetStateAction } from "react"
import { celestialBodieCreateSchema } from "../db/schema/celestialBodie.schema";
import { shortToast } from "../helpers/shorter-function";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

type Translations = {
  kr: string;
  "pt-BR": string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  cn: string;
  tr: string;
};

/**
 * Creates a celestialBodie to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createCelestialBodie = async (e: FormEvent, translations: Translations, setIsLoading: SetIsLoading) => {
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      type: { value: string };
      mass: { value: string };
      diameter_km: { value: string };
      tilt_degrees: { value: string };
      rotation_period_days: { value: string };
    };

    const celestialBodie = celestialBodieCreateSchema.parse({
      name: target.name.value,
      type: target.type.value,
      mass: Number(target.mass.value),
      diameter_km: Number(target.diameter_km.value),
      tilt_degrees: Number(target.tilt_degrees.value),
      rotation_period_days: Number(target.rotation_period_days.value),
      translations
    });

    const res = await fetch("/api/data/celestialbodies", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(celestialBodie),
    })

    if (res.status === 201) {
      shortToast("Success", "Celestial Bodie created successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to create a celestial bodie", "error", 5000);
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
 * Updates a celestialBodie to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateCelestialBodie = async (id: string, e: FormEvent, translations: Translations, setIsLoading: SetIsLoading) => {
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      type: { value: string };
      mass: { value: string };
      diameter_km: { value: string };
      tilt_degrees: { value: string };
      rotation_period_days: { value: string };
    };

    const celestialBodie = celestialBodieCreateSchema.parse({
      name: target.name.value,
      type: target.type.value,
      mass: Number(target.mass.value),
      diameter_km: Number(target.diameter_km.value),
      tilt_degrees: Number(target.tilt_degrees.value),
      rotation_period_days: Number(target.rotation_period_days.value),
      translations
    });

    const data = {
      id,
      celestialBodie
    }

    const res = await fetch("/api/data/celestialbodies", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status === 200) {
      shortToast("Success", "Celestial Bodie updated successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to updated a celestial bodie", "error", 5000);
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