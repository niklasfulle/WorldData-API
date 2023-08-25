import { array, number, object, string, TypeOf } from "zod";

export const currencySchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    code: string({
      required_error: "code is required",
    }),
    symbol: string({
      required_error: "symbol is required",
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

export type currencyBody = TypeOf<typeof currencySchema.body>;

export const currencyV4Schema = object({
  id: number(),
  name: string(),
  code: string(),
  symbol: string(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});