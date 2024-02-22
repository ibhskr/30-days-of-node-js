import Product from "../models/product.model.js";

//--
//-- createProduct
export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const data = await Product.create(newProduct);
    res.status(201).json({ message: `New product listed : ${data}` });
    console.log("New product listed");
  } catch (error) {
    res.status(406).json({ message: "unable to create your Product" });
  }
};

//--
//-- getAllProducts

export const getAllProducts = async (req, res) => {
  try {
    const allproduct = await Product.find();
    res.status(200).json(allproduct);
  } catch (error) {
    res.status(404).json({ message: "not found" });
  }
};

//--
//-- updateProduct

export const updateProduct = async (req, res) => {
  const name = req.body.name;

  try {
    const item = await Product.find({ name: name });
    if (item) {
      const updatedProduct = await Product.updateOne(req.body);
      res.status(202).json(`Product updated ${updatedProduct}`);
      console.log("product updated");
    }
  } catch (error) {
    res.status(404).json({ message: "not found" });
  }
};

//--
//--deleteProduct
export const deleteProduct = async (req, res) => {
  const name = req.body.name;
  try {
    await Product.deleteOne({ name: name });
    res.status(202).json({ message: `${name} deleted successfully` });
  } catch (error) {
    res.status(404).json({ message: "not found" });
  }
};
