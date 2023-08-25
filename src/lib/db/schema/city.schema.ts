import { number, object, string, TypeOf } from "zod";

export const citySchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type cityBody = TypeOf<typeof citySchema.body>;

export const cityV1Schema = object({
  id: number(),
  name: string()
});

export const cityV2Schema = object({
  id: number(),
  name: string()
});

export const cityV3Schema = object({
  id: number(),
  name: string()
});

export const cityV4Schema = object({
  id: number(),
  name: string()
});