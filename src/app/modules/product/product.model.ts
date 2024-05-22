import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const variantSchema = new Schema(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const inventorySchema = new Schema(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { _id: false }
);

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});



const productUpdateSchema = new Schema<TProduct>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantSchema] },
  inventory: { type: inventorySchema },
});

// export const ProductUpdate = model<TProduct>("Products", productUpdateSchema);
export const Product = model<TProduct>("Products", productSchema);
