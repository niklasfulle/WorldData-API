import mongoose from "mongoose";

const Schema = mongoose.Schema;

export function countryModel() {
  const schema = new Schema({
    id: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    iso3: {
      type: String,
      required: true,
    },
    iso2: {
      type: String,
      required: true,
    },
    numeric_code: {
      type: Number,
      required: true,
    },
    phone_code: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    tld: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    subregion: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    independent: {
      type: Boolean,
      required: false,
    },
    area_km2: {
      type: Number,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    density_km2: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    currency_symbol: {
      type: String,
      required: true,
    },
    timezones: {
      type: Array,
      required: true,
    },
    native_name: {
      type: String,
      required: true,
    },
    translations: {
      type: Object,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    emojiU: {
      type: String,
      required: true,
    },

  }, {
    // add createdAt and updatedAt timestamps
    timestamps: true
  });

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc: any, ret: any) {
      // remove these props when object is serialized
      delete ret._id;
    }
  });

  return mongoose.models.Country || mongoose.model('Country', schema);
}