import { array, number, object, string, TypeOf } from "zod";

export const lakeSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type lakeBody = TypeOf<typeof lakeSchema.body>;

export const lakeV1Schema = object({
  id: number(),
  name: string()
});

export const lakeV2Schema = object({
  id: number(),
  name: string()
});

export const lakeV3Schema = object({
  id: number(),
  name: string()
});

export const lakeV4Schema = object({
  id: number(),
  name: string()
});