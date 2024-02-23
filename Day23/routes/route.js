import express from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/routeController.js";
import { getProductsPopulatedWithCategory } from "../controllers/ProductWithCategory.js";
import { addCategory } from "../controllers/addCategory.js";
//--
const router = express.Router();

//-

router
  .route("/")
  .get(getAllProducts)
  .post(createProduct)
  .put(updateProduct)
  .delete(deleteProduct);

//--
router.route("/addCategory").post(addCategory);
router.get("/populated", getProductsPopulatedWithCategory);
export default router;
