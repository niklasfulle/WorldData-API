import { array, number, object, string, TypeOf, z } from "zod";

export const seaSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    area_km2: number({
      required_error: "area_km2 is required",
    }),
    avg_depth_m: number({
      required_error: "avg_depth_m is required",
    }),
    max_depth_m: number({
      required_error: "max_depth_m is required",
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

export type seaBody = TypeOf<typeof seaSchema.body>;

export const seaV1Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number()
});

export const seaV2Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number()
});

export const seaV3Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

export const seaV4Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

export const seaCreateSchema = object({
  id: z.number().or(z.undefined()),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
})