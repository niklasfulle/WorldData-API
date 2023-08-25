import { array, number, object, string, TypeOf } from "zod";

export const mountainSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    height_m: number({
      required_error: "height_m is required",
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
    country: array(
      object({
        id: number({
          required_error: "id is required",
        }),
        name: string({
          required_error: "name is required",
        }),
      }),
    ),
    first_climbed: string({
      required_error: "first_climbed is required",
    }),
  })
};

export type mountainBody = TypeOf<typeof mountainSchema.body>;

export const mountainV2Schema = object({
  id: number(),
  name: string(),
  height_m: number(),
  latitude: string(),
  longitude: string()
});

export const mountainV3Schema = object({
  id: number(),
  name: string(),
  height_m: number(),
  latitude: string(),
  longitude: string(),
  continent: string(),
  country: array(
    object({
      id: number(),
      name: string(),
    }),
  ),
  first_climbed: string()
});

export const mountainV4Schema = object({
  id: number(),
  name: string(),
  height_m: number(),
  latitude: string(),
  longitude: string(),
  continent: string(),
  country: array(
    object({
      id: number(),
      name: string(),
    }),
  ),
  first_climbed: string()
});