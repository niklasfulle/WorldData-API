/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
/* eslint-disable no-empty*/
import { Dispatch, FormEvent, SetStateAction } from "react"
import { celestialBodieCreateSchema } from "../db/schema/celestialBodie.schema";

type SetIsLoading = Dispatch<SetStateAction<boolean>>

type SetError = Dispatch<SetStateAction<string>>;

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
 * Returns all celestialBodies from the database
 */
export const getCelestialBodies = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting all celestialBodies.");
  }
  setIsLoading(false);
}

/**
 * Returns the last ten celestialBodies from the database
 */
export const getCelestialBodieLastTen = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the last ten celestialBodies.");
  }
  setIsLoading(false);
}

/**
 * Gets a celestialBodie from the database
 * 
 * @param id  - id of the celestialBodie to get 
 */
export const getCelestialBodie = async (id: number, setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);

  try {

  } catch (error) {
    setError("There was an error getting the celestialBodie.");
  }
  setIsLoading(false);
}

/**
 * Creates a celestialBodie to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createCelestialBodie = async (e: FormEvent, translations: Translations, setIsLoading: SetIsLoading, setError: SetError) => {
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

    // TODO: res handling
    setError("")
  } catch (error) {
    console.log(error)
    setError("There was an error creating the celestialBodie.");
  }
  setIsLoading(false);
}

/**
 * Updates a celestialBodie to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateCelestialBodie = async (id: string, e: FormEvent, translations: Translations, setIsLoading: SetIsLoading, setError: SetError) => {
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

    // TODO: res handling
    setError("")
  } catch (error) {
    setError("There was an error updating the celestialBodie.");
  }
  setIsLoading(false);
}

/**
 * Deletes a celestialBodie from the database
 * 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const deleteCelestialBodie = async (setIsLoading: SetIsLoading, setError: SetError) => {
  setIsLoading(true);
  try {

  } catch (error) {
    setError("There was an error deleting the celestialBodie.");
  }
  setIsLoading(false);
}