import ProductWithCategory from '../models/ProductWithCategory.js';

export async function getProductsPopulatedWithCategory(req, res) {
  try {
    const products = await ProductWithCategory.find().populate('category');
    console.log(products)
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
