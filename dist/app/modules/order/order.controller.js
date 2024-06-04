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
exports.orderControllers = void 0;
const order_service_1 = require("./order.service");
const order_zod_validation_1 = require("./order.zod.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderInfo = req.body;
        const parsedOrder = yield order_zod_validation_1.orderValidationSchema.parse(orderInfo);
        const result = yield order_service_1.orderServices.createOrderIntoDB(parsedOrder);
        res.status(200).send({
            success: true,
            message: "Order created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(200).send({
            success: true,
            message: error.message || "Something went wrong",
            data: error,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderServices.getAllOrdersFromDB(req.query);
        res.status(200).send({
            success: true,
            message: "Orders fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(200).send({
            success: true,
            message: "Something went wrong",
            data: error,
        });
    }
});
const getASingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const result = yield order_service_1.orderServices.getASingleOrderFromDB(orderId);
        res.status(200).send({
            success: true,
            message: "Orders fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(200).send({
            success: false,
            message: error.path ? "Order not found " : "Something went wrong",
        });
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrders,
    getASingleOrder
};
