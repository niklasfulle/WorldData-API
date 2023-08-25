import { number, object, string, TypeOf } from "zod";

export const mountainSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
  })
};

export type mountainBody = TypeOf<typeof mountainSchema.body>;

export const mountainV1Schema = object({
  id: number(),
  name: string()
});

export const mountainV2Schema = object({
  id: number(),
  name: string()
});

export const mountainV3Schema = object({
  id: number(),
  name: string()
});

export const mountainV4Schema = object({
  id: number(),
  name: string()
});