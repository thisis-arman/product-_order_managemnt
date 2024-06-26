import { Schema, Types, model } from "mongoose";
import { TOrder } from "./order.interface";

export const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const Order = model("Order", orderSchema)