import Product from "../models/Product.js";

/**
 * Executes an aggregation pipeline to calculate product statistics
 * @returns {Object} - Aggregated product statistics
 */
async function getProductStatistics() {
  try {
    // Execute the aggregation pipeline
    const result = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 },
          averagePrice: { $avg: "$price" },
          highestQuantity: { $max: "$quantity" },
        },
      },
    ]);

    // Extract the aggregated statistics from the result
    const statistics = {
      totalProducts: result[0].totalProducts,
      averagePrice: result[0].averagePrice,
      highestQuantity: result[0].highestQuantity,
    };

    return statistics;
  } catch (error) {
    console.error("Failed to calculate product statistics:", error);
    throw error;
  }
}

export default getProductStatistics;
