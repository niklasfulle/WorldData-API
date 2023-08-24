import { array, number, object, string, TypeOf } from "zod";

export const celestialBodieSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type celestialBodieBody = TypeOf<typeof celestialBodieSchema.body>;

export const celestialBodieV1Schema = object({
  id: number(),
  name: string()
});

export const celestialBodieV2Schema = object({
  id: number(),
  name: string()
});

export const celestialBodieV3Schema = object({
  id: number(),
  name: string()
});

export const celestialBodieV4Schema = object({
  id: number(),
  name: string()
});