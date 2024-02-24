import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, trim: true, lowercase: true },
  description: String,
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
