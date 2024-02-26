import Category from "../models/Category.js";

export const addCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    console.log("category added");
    res.json({ message: "category added" });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
