import { number, object, string, TypeOf } from "zod";

export const islandSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type islandBody = TypeOf<typeof islandSchema.body>;

export const islandV1Schema = object({
  id: number(),
  name: string()
});

export const islandV2Schema = object({
  id: number(),
  name: string()
});

export const islandV3Schema = object({
  id: number(),
  name: string()
});

export const islandV4Schema = object({
  id: number(),
  name: string()
});