import mongoose from "mongoose";
import Category from "./Category.js";
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
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});
const Product = mongoose.model("Product", productSchema);
export default Product;
