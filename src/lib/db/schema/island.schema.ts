import { array, number, object, string, TypeOf } from "zod";

export const islandSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    area_m2: number({
      required_error: "area_m2 is required",
    }),
    latitude: string({
      required_error: "latitude is required",
    }),
    longitude: string({
      required_error: "longitude is required",
    }),
    population: number({
      required_error: "population is required",
    }),
    continent: string({
      required_error: "continent is required",
    }),
    countries: array(
      object({
        id: number({
          required_error: "id is required",
        }),
        name: string({
          required_error: "name is required",
        }),
      }),
    )
  })
};

export type islandBody = TypeOf<typeof islandSchema.body>;

export const islandV3Schema = object({
  id: number(),
  name: string(),
  area_m2: number(),
  latitude: string(),
  longitude: string()
});

export const islandV4Schema = object({
  id: number(),
  name: string(),
  area_m2: number(),
  latitude: string(),
  longitude: string(),
  population: number(),
  continent: string(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});