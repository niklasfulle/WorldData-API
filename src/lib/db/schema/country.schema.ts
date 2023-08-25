import { number, object, string, TypeOf } from "zod";

export const countrySchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type countryBody = TypeOf<typeof countrySchema.body>;

export const countryV1Schema = object({
  id: number(),
  name: string()
});

export const countryV2Schema = object({
  id: number(),
  name: string()
});

export const countryV3Schema = object({
  id: number(),
  name: string()
});

export const countryV4Schema = object({
  id: number(),
  name: string()
});