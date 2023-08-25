import mongoose from "mongoose";

const Schema = mongoose.Schema;

export function riverModel() {
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
    length_km: {
      type: Number,
      required: true,
    },
    countries: {
      type: Array,
      required: true,
    },
    discharge_m3_s: {
      type: Number,
      required: true,
    },
    outflow: {
      type: String,
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

  return mongoose.models.River || mongoose.model('River', schema);
}