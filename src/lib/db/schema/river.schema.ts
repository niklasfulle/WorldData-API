import { array, number, object, string, TypeOf } from "zod";

export const riverSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    length_km: number({
      required_error: "length_km is required",
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
    ),
    discharge_m3_s: number({
      required_error: "discharge_m3_s is required",
    }),
    outflow: string({
      required_error: "outflow is required",
    }),
  })
};

export type riverBody = TypeOf<typeof riverSchema.body>;

export const riverV3Schema = object({
  id: number(),
  name: string(),
  length_km: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

export const riverV4Schema = object({
  id: number(),
  name: string(),
  length_km: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  ),
  discharge_m3_s: number(),
  outflow: string()
});