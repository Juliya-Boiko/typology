import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  info: String,
  descr: String,
  suitedTo: String,
  skinFeel: String,
  keyIngredients: String,
  sizes: [Number],
  tags: [String],
  price: Number,
  imgUrl: String,
  avialableAmount: Number
  }, { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", productSchema);