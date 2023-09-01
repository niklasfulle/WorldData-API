import mongoose from "mongoose";

const Schema = mongoose.Schema;

export function continentModel() {
  const schema = new Schema({
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: false,
    },
    area_km2: {
      type: Number,
      required: true
    },
    population: {
      type: Number,
      required: true
    },
    density_km2: {
      type: Number,
      required: true
    },
    countries: {
      type: Array,
      required: true,
    }
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

  return mongoose.models.Continent || mongoose.model('Continent', schema);
}