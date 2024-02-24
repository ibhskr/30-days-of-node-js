import Product from "../models/product.model.js";
import Category from "../models/Category.js";
import mongoose from "mongoose";
import ProductWithCategory from "../models/ProductWithCategory.js";
//--
//-- createProduct
export const createProduct = async (req, res) => {
  try {
    const { name, quantity, price, category } = req.body;

    const isCategory = await Category.find({ name: category });
    console.log(isCategory);
    if (!isCategory.length) {
      const newCategory = await Category.create({ name: category });
      const newItem = await ProductWithCategory.create({
        name,
        quantity,
        price,
        category: newCategory._id,
      });
    } else {
      const newItem = await ProductWithCategory.create({
        name,
        quantity,
        price,
        category: isCategory[0]._id,
      });
    }

    // await ProductWithCategory.create({name, quantity, price, category});
    res.json({ msg: "product listed" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "unable to listed the product" });
  }
};

//--
//-- getAllProducts

export const getAllProducts = async (req, res) => {
  try {
    const allproduct = await ProductWithCategory.find().populate("category");
    res.status(200).json(allproduct);
  } catch (error) {
    res.status(404).json({ message: "not found" });
  }
};

//--
//-- updateProduct

export const updateProduct = async (req, res) => {
  const { name, quantity, price, category } = req.body;
  try {
    const item = await ProductWithCategory.findOne({name});
    console.log(item);
    if (item) {
      console.log(item);
      console.log(req.body);
      const updatedProduct = await ProductWithCategory.findByIdAndUpdate(
        item._id,
        { name, quantity, price, category: item._id}
      );
      res.status(202).json(`Product updated ${updatedProduct}`);
      console.log("Product updated");
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//--
//--deleteProduct
export const deleteProduct = async (req, res) => {
  const name = req.body.name;
  try {
    await ProductWithCategory.deleteOne({ name: name });
    res.status(202).json({ message: `${name} deleted successfully` });
  } catch (error) {
    res.status(404).json({ message: "not found" });
  }
};
