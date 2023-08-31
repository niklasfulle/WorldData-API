import { number, object, string, TypeOf, z } from "zod";

export const celestialBodieSchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    type: string({
      required_error: "type is required",
    }),
    mass: number({
      required_error: "mass is required",
    }),
    diameter_km: number({
      required_error: "diameter_km is required",
    }),
    tilt_degrees: number({
      required_error: "tilt_degrees is required",
    }),
    rotation_period_days: number({
      required_error: "rotation_period_days is required",
    }),
    translations: object({
      kr: string({
        required_error: "kr is required",
      }),
      "pt-BR": string({
        required_error: "pt-BR is required",
      }),
      pt: string({
        required_error: "pt is required",
      }),
      nl: string({
        required_error: "nl is required",
      }),
      hr: string({
        required_error: "hr is required",
      }),
      fa: string({
        required_error: "fa is required",
      }),
      de: string({
        required_error: "de is required",
      }),
      es: string({
        required_error: "es is required",
      }),
      fr: string({
        required_error: "fr is required",
      }),
      ja: string({
        required_error: "ja is required",
      }),
      it: string({
        required_error: "it is required",
      }),
      cn: string({
        required_error: "cn is required",
      }),
      tr: string({
        required_error: "tr is required",
      }),
    }),
  }),
};

export type celestialBodieBody = TypeOf<typeof celestialBodieSchema.body>;

export const celestialBodieV4Schema = object({
  id: number(),
  name: string(),
  type: string(),
  mass: number(),
  diameter_km: number(),
  tilt_degrees: number(),
  rotation_period_days: number(),
  translations: object({
    kr: string(),
    "pt-BR": string(),
    pt: string(),
    nl: string(),
    hr: string(),
    fa: string(),
    de: string(),
    es: string(),
    fr: string(),
    ja: string(),
    it: string(),
    cn: string(),
    tr: string(),
  }),
});

export const celestialBodieCreateSchema = object({
  id: z.number().or(z.undefined()),
  name: string(),
  type: string(),
  mass: number(),
  diameter_km: number(),
  tilt_degrees: number(),
  rotation_period_days: number(),
  translations: object({
    kr: string(),
    "pt-BR": string(),
    pt: string(),
    nl: string(),
    hr: string(),
    fa: string(),
    de: string(),
    es: string(),
    fr: string(),
    ja: string(),
    it: string(),
    cn: string(),
    tr: string(),
  }),
});