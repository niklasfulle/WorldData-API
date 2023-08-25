import { number, object, string, TypeOf } from "zod";

export const citySchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    latitude: string({
      required_error: "latitude is required",
    }),
    longitude: string({
      required_error: "longitude is required",
    }),
    population: number({
      required_error: "population is required",
    }),
    area_km2: number({
      required_error: "area_km2 is required",
    }),
    country: string({
      required_error: "country is required",
    }),
    timezone: object({
      zone_name: string({
        required_error: "zone_name is required",
      }),
      gmt_offset: number({
        required_error: "gmt_offset is required",
      }),
      gmt_offset_name: string({
        required_error: "gmt_offset_name is required",
      }),
      abbreviation: string({
        required_error: "abbreviation is required",
      }),
      tz_name: string({
        required_error: "tz_name is required",
      }),
    }),
  })
};

export type cityBody = TypeOf<typeof citySchema.body>;

export const cityV1Schema = object({
  id: number(),
  name: string(),
  latitude: string(),
  longitude: string()
});

export const cityV2Schema = object({
  id: number(),
  name: string(),
  latitude: string(),
  longitude: string(),
  population: number(),
  area_km2: number(),
  country: string()
});

export const cityV3Schema = object({
  id: number(),
  name: string(),
  latitude: string(),
  longitude: string(),
  population: number(),
  area_km2: number(),
  country: string()
});

export const cityV4Schema = object({
  id: number(),
  name: string(),
  latitude: string(),
  longitude: string(),
  population: number(),
  area_km2: number(),
  country: string(),
  timezone: object({
    zone_name: string(),
    gmt_offset: number(),
    gmt_offset_name: string(),
    abbreviation: string(),
    tz_name: string()
  })
});