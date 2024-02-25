import mongoose from "mongoose";

const productWithCategorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productWithCategorySchema);

export default Product;
