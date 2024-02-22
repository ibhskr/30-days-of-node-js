import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  // "name," "price," and "quantity."

  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  quantity: {
    type: Number,
    trim: true,
    required: true,
  },
});
const Product = mongoose.model("Product", productSchema);
export default Product;
