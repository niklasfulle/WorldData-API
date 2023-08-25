import mongoose from "mongoose";

const Schema = mongoose.Schema;

export function islandModel() {
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
    area_km2: {
      type: Number,
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
    population: {
      type: Number,
      required: true,
    },
    continent: {
      type: String,
      required: true,
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

  return mongoose.models.Island || mongoose.model('Island', schema);
}