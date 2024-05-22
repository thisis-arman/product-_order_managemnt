

import express from 'express';
import { productControllers } from './product.controller';


const router = express.Router()

router.post("/products/create-product", productControllers.createProduct);
router.get("/products/", productControllers.getAllProducts);
router.get("/products/:productId", productControllers.getSingleProduct);
router.put("/products/:productId", productControllers.updateProductsIntoDB);
router.delete("/products/:productId", productControllers.deleteProductsFromDB);
router.get("/products", productControllers.productByTextSearch);


// /api/products?searchTerm=iphone
export const productRoutes = router;