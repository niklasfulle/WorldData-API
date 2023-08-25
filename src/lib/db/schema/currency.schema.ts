import { number, object, string, TypeOf } from "zod";

export const currencySchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type currencyBody = TypeOf<typeof currencySchema.body>;

export const currencyV1Schema = object({
  id: number(),
  name: string()
});

export const currencyV2Schema = object({
  id: number(),
  name: string()
});

export const currencyV3Schema = object({
  id: number(),
  name: string()
});

export const currencyV4Schema = object({
  id: number(),
  name: string()
});