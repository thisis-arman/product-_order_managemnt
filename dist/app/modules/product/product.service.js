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
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_model_1.Product(productData);
    return yield product.save();
});
const getAllProducts = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = query;
    // If searchTerm is provided and is a non-empty string, perform a text search
    if (searchTerm &&
        typeof searchTerm === "string" &&
        searchTerm.trim() !== "") {
        return yield product_model_1.Product.find({ $text: { $search: searchTerm } });
    }
    return yield product_model_1.Product.find({});
});
const getSingleProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ _id });
    console.log(result);
    return result;
});
const updateSingleProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.updateOne({ id: product._id }, { $set: product });
    return result;
});
const deleteSingleProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.deleteOne({ _id });
    return result;
});
exports.productServices = {
    createProduct: createProductIntoDB,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
};
