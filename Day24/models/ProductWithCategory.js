import mongoose from 'mongoose';

const productWithCategorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

const ProductWithCategory = mongoose.model('ProductWithCategory', productWithCategorySchema);

export default ProductWithCategory;
