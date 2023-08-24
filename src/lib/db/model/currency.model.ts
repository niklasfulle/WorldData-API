import mongoose from "mongoose";

const Schema = mongoose.Schema;

export function currencyModel() {
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

  return mongoose.models.Currency || mongoose.model('Currency', schema);
}