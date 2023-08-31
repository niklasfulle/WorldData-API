import { array, number, object, string, TypeOf, z } from "zod";

export const continentSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    area_km2: number({
      required_error: "area_km2 is required",
    }),
    population: number({
      required_error: "population is required",
    }),
    density_km2: number({
      required_error: "density_km2 is required",
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

export type continentBody = TypeOf<typeof continentSchema.body>;

export const continentV1Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  population: number(),
  density_km2: number(),
});

export const continentV2Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  population: number(),
  density_km2: number(),
});

export const continentV3Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  population: number(),
  density_km2: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

export const continentV4Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  population: number(),
  density_km2: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

export const continentCreateSchema = object({
  id: z.number().or(z.undefined()),
  name: string(),
  area_km2: number(),
  population: number(),
  density_km2: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

