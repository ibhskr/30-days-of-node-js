import express from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/routeController.js";
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

export default router;
