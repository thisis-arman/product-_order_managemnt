"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const product_zod_validation_1 = require("./product.zod.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product } = req.body;
        const parsedProduct = yield product_zod_validation_1.productValidationSchema.parse(product);
        console.log({ product });
        const result = yield product_service_1.productServices.createProduct(parsedProduct);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: error.details,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const result = yield product_service_1.productServices.getAllProducts(query);
        if (req.query.searchTerm) {
            res.status(200).json({
                success: true,
                message: `Products matching search term '${req.query.searchTerm}' fetched successfully!`,
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: error,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.getSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: error,
        });
    }
});
const updateProductsIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield req.body;
        const result = yield product_service_1.productServices.updateSingleProduct(product);
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: error,
        });
    }
});
const deleteProductsFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = yield req.params;
        const result = yield product_service_1.productServices.deleteSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: error,
        });
    }
});
exports.productControllers = {
    createProduct,
    getAllProducts,
    updateProductsIntoDB,
    deleteProductsFromDB,
    getSingleProduct,
};
