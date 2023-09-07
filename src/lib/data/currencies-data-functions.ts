import { Dispatch, FormEvent, SetStateAction } from "react"
import { currencyCreateSchema } from "../db/schema/currency.schema";
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
 * Creates a currency to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const createCurrency = async (e: FormEvent, setIsLoading: SetIsLoading) => {
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      code: { value: string };
      symbol: { value: string };
      countries: { value: string };
    };

    const currency = currencyCreateSchema.parse({
      name: target.name.value,
      code: target.code.value,
      symbol: target.symbol.value,
      countries: createCountiresArray(target.countries.value)
    });

    const res = await fetch("/api/data/currencies", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currency),
    })

    if (res.status === 201) {
      shortToast("Success", "Currency created successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to create a currency", "error", 5000);
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
 * Updates a currency to send to the database
 * 
 * @param e  - form event 
 * @param setIsLoading  - set loading state
 * @param setError  - set error state
 */
export const updateCurrency = async (id: string, e: FormEvent, setIsLoading: SetIsLoading) => {
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      name: { value: string };
      code: { value: string };
      symbol: { value: string };
      countries: { value: string };
    };

    const currency = currencyCreateSchema.parse({
      name: target.name.value,
      code: target.code.value,
      symbol: target.symbol.value,
      countries: createCountiresArray(target.countries.value)
    });

    const data = {
      id,
      currency
    }

    const res = await fetch("/api/data/currencies", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status === 200) {
      shortToast("Success", "Currency updated successfully", "success", 3000);
    } else if (res.status === 401) {
      shortToast("Error", "You are not authorized to updated a currency", "error", 5000);
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
