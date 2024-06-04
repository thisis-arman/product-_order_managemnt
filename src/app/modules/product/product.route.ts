

import express from 'express';
import { productControllers } from './product.controller';


const router = express.Router()

router.post("/", productControllers.createProduct);
router.get("/", productControllers.getAllProducts);
router.get("/:productId", productControllers.getSingleProduct);
router.put("/:productId", productControllers.updateProductsIntoDB);
router.delete("/:productId", productControllers.deleteProductsFromDB);
// router.get("/products", productControllers.productByTextSearch);


// /api/products?searchTerm=iphone
export const productRoutes = router;