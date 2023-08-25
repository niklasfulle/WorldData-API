import mongoose from "mongoose";

const Schema = mongoose.Schema;

export function oceanModel() {
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
      required: true
    },
    avg_depth_m: {
      type: Number,
      required: true
    },
    max_depth_m: {
      type: Number,
      required: true
    },
    volume_km3: {
      type: Number,
      required: true
    },
    coast_km: {
      type: Number,
      required: true
    },
    countries: {
      type: Array,
      required: true,
    },
    territories: {
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

  return mongoose.models.Ocean || mongoose.model('Ocean', schema);
}