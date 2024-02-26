import express from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/routeController.js";
import ProductStatistics from "../controllers/getProductStatistics.js";
//--
const router = express.Router();

//-

router
  .route("/")
  .get(getAllProducts)
  .post(createProduct)
  .put(updateProduct)
  .delete(deleteProduct);
router.route("/product-statistics").get(ProductStatistics);
//--

export default router;
