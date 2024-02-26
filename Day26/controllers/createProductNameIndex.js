import Product from "../models/Product.js";

async function createProductNameIndex() {
  try {
    const indexes = await Product.collection.createIndex({ name: 1 });

    console.log(
      'Index created successfully on the "name" field of the "Product" collection'
    );
    console.log("Indexes:", indexes);
  } catch (error) {
    console.error("Failed to create index:", error);
  }
}

export default createProductNameIndex;
