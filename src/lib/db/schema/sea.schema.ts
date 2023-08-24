import { array, number, object, string, TypeOf } from "zod";

export const seaSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type seaBody = TypeOf<typeof seaSchema.body>;

export const seaV1Schema = object({
  id: number(),
  name: string()
});

export const seaV2Schema = object({
  id: number(),
  name: string()
});

export const seaV3Schema = object({
  id: number(),
  name: string()
});

export const seaV4Schema = object({
  id: number(),
  name: string()
});