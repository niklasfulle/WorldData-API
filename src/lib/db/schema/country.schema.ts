import { number, object, string, TypeOf, boolean } from "zod";

export const countrySchema = {
  body: object({
    id: number({
      required_error: "id is required",
    }),
    name: string({
      required_error: "name is required",
    }),
    iso3: string({
      required_error: "iso3 is required",
    }),
    iso2: string({
      required_error: "iso2 is required",
    }),
    numeric_code: number({
      required_error: "numeric_code is required",
    }),
    phone_code: string({
      required_error: "phone_code is required",
    }),
    capital: string({
      required_error: "capital is required",
    }),
    tld: string({
      required_error: "tld is required",
    }),
    region: string({
      required_error: "region is required",
    }),
    subregion: string({
      required_error: "subregion is required",
    }),
    latitude: string({
      required_error: "latitude is required",
    }),
    longitude: string({
      required_error: "longitude is required",
    }),
    independent: string({
      required_error: "independent is required",
    }),
    area_km2: number({
      required_error: "area_km2 is required",
    }),
    population: number({
      required_error: "population is required",
    }),
    density_km2: number({
      required_error: "density_km2 is required",
    }),
    currency: string({
      required_error: "currency is required",
    }),
    currency_symbol: string({
      required_error: "currency_symbol is required",
    }),
    timezones: object({
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
    native_name: string({
      required_error: "native_name is required",
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
    emoji: string({
      required_error: "emoji is required",
    }),
    emojiU: string({
      required_error: "emojiU is required",
    }),
  })
};

export type countryBody = TypeOf<typeof countrySchema.body>;

export const countryV1Schema = object({
  id: number(),
  name: string(),
  iso3: string(),
  iso2: string(),
  numeric_code: number(),
  phone_code: string(),
  capital: string(),
  tld: string(),
  region: string(),
  subregion: string(),
  latitude: string(),
  longitude: string(),
  independent: boolean()
});

export const countryV2Schema = object({
  id: number(),
  name: string(),
  iso3: string(),
  iso2: string(),
  numeric_code: number(),
  phone_code: string(),
  capital: string(),
  tld: string(),
  region: string(),
  subregion: string(),
  latitude: string(),
  longitude: string(),
  independent: boolean(),
  area_km2: number(),
  population: number(),
  density_km2: number()
});

export const countryV3Schema = object({
  id: number(),
  name: string(),
  iso3: string(),
  iso2: string(),
  numeric_code: number(),
  phone_code: string(),
  capital: string(),
  tld: string(),
  region: string(),
  subregion: string(),
  latitude: string(),
  longitude: string(),
  independent: boolean(),
  area_km2: number(),
  population: number(),
  density_km2: number(),
  native_name: string(),
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
  emoji: string(),
  emojiU: string()
});

export const countryV4Schema = object({
  id: number(),
  name: string(),
  iso3: string(),
  iso2: string(),
  numeric_code: number(),
  phone_code: string(),
  capital: string(),
  tld: string(),
  region: string(),
  subregion: string(),
  latitude: string(),
  longitude: string(),
  independent: boolean(),
  area_km2: number(),
  population: number(),
  density_km2: number(),
  currency: string(),
  currency_symbol: string(),
  timezones: object({
    zone_name: string(),
    gmt_offset: number(),
    gmt_offset_name: string(),
    abbreviation: string(),
    tz_name: string(),
  }),
  native_name: string(),
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
  emoji: string(),
  emojiU: string()
});