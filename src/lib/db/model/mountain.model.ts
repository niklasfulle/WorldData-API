import mongoose from "mongoose";

const Schema = mongoose.Schema;

export function mountainModel() {
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
    height_m: {
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
    country: {
      type: Array,
      required: true,
    },
    first_climbed: {
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

  return mongoose.models.Mountain || mongoose.model('Mountain', schema);
}