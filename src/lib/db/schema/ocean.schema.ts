import { array, number, object, string, TypeOf } from "zod";

export const oceanSchema = {
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
    volume_km3: number({
      required_error: "volume_km3 is required",
    }),
    coast_km: number({
      required_error: "coast_km is required",
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
    ),
    territories: array(
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

export type oceanBody = TypeOf<typeof oceanSchema.body>;

export const oceanV1Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number(),
  volume_km3: number(),
});

export const oceanV2Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number(),
  volume_km3: number(),
  coast_km: number(),
});

export const oceanV3Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number(),
  volume_km3: number(),
  coast_km: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});

export const oceanV4Schema = object({
  id: number(),
  name: string(),
  area_km2: number(),
  avg_depth_m: number(),
  max_depth_m: number(),
  volume_km3: number(),
  coast_km: number(),
  countries: array(
    object({
      id: number(),
      name: string(),
    }),
  ),
  territories: array(
    object({
      id: number(),
      name: string(),
    }),
  )
});