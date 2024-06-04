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
exports.orderServices = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (orderInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = orderInfo;
    if (!mongoose_1.Types.ObjectId.isValid(productId)) {
        throw new Error("Invalid product ID");
    }
    const product = yield product_model_1.Product.findById(productId);
    if (!product) {
        throw new Error("Product not found");
    }
    if (product.inventory.quantity < quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    // Update the product's quantity
    product.inventory.quantity -= quantity;
    yield product.save();
    const result = yield order_model_1.Order.create(orderInfo);
    return result;
});
const getAllOrdersFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find(query);
    return result;
});
const getASingleOrderFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findOne({ _id });
    return result;
});
exports.orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
    getASingleOrderFromDB
};
