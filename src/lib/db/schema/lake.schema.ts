import { array, number, object, string, TypeOf, z } from "zod";

export const lakeSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    area_km2: number({
      required_error: "area_m2 is required",
    }),
    depth_m: number({
      required_error: "depth_m is required",
    }),
    volume_km3: number({
      required_error: "volume_m3 is required",
    }),
    latitude: string({
      required_error: "latitude is required",
    }),
    longitude: string({
      required_error: "longitude is required",
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

export type lakeBody = TypeOf<typeof lakeSchema.body>;

export const lakeV2Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  depth_m: number(),
  volume_km3: number()
});

export const lakeV3Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  depth_m: number(),
  volume_km3: number(),
  latitude: string(),
  longitude: string(),
  continent: string(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

export const lakeV4Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  depth_m: number(),
  volume_km3: number(),
  latitude: string(),
  longitude: string(),
  continent: string(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

export const lakeCreateSchema = object({
  id: z.number().or(z.undefined()),
  name: string(),
  area_km2: number(),
  depth_m: number(),
  volume_km3: number(),
  latitude: string(),
  longitude: string(),
  continent: string(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});