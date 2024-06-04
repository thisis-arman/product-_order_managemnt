"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
}, { _id: false });
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
}, { _id: false });
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true },
});
const productUpdateSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    tags: { type: [String] },
    variants: { type: [variantSchema] },
    inventory: { type: inventorySchema },
});
// export const ProductUpdate = model<TProduct>("Products", productUpdateSchema);
exports.Product = (0, mongoose_1.model)("Products", productSchema);
