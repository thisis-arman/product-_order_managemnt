"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/products/create-product", product_controller_1.productControllers.createProduct);
router.get("/products/", product_controller_1.productControllers.getAllProducts);
router.get("/products/:productId", product_controller_1.productControllers.getSingleProduct);
router.put("/products/:productId", product_controller_1.productControllers.updateProductsIntoDB);
router.delete("/products/:productId", product_controller_1.productControllers.deleteProductsFromDB);
// router.get("/products", productControllers.productByTextSearch);
// /api/products?searchTerm=iphone
exports.productRoutes = router;
