import getProductStatistics from "../services/productService.js";
async function ProductStatistics(req, res) {
  try {
    // Call getProductStatistics to fetch product statistics
    const productStatistics = await getProductStatistics();

    // Send the product statistics as JSON response
    res.json(productStatistics);
  } catch (error) {
    console.error("Error fetching product statistics:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default ProductStatistics;
