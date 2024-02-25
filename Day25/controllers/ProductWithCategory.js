import Product from '../models/Product.js';

export async function getProductsPopulatedWithCategory(req, res) {
  try {
    const products = await Product.find().populate('category');
    console.log(products)
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
