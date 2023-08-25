import mongoose from "mongoose";

const Schema = mongoose.Schema;

export function lakeModel() {
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
    depth_m: {
      type: Number,
      required: true,
    },
    volume_km3: {
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
    continent: {
      type: String,
      required: true,
    },
    countries: {
      type: Array,
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

  return mongoose.models.Lake || mongoose.model('Lake', schema);
}