import { number, object, string, TypeOf } from "zod";

export const riverSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type riverBody = TypeOf<typeof riverSchema.body>;

export const riverV1Schema = object({
  id: number(),
  name: string()
});

export const riverV2Schema = object({
  id: number(),
  name: string()
});

export const riverV3Schema = object({
  id: number(),
  name: string()
});

export const riverV4Schema = object({
  id: number(),
  name: string()
});