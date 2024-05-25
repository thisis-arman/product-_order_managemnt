import { Types } from "mongoose";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (orderInfo: TOrder) => {
  const { productId, quantity } = orderInfo;

  if (!Types.ObjectId.isValid(productId)) {
    throw new Error("Invalid product ID");
  }
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }
  if (product.inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  // Update the product's quantity
  product.inventory.quantity -= quantity;
  await product.save();

  const result = await Order.create(orderInfo);

  return result;
};

const getAllOrdersFromDB = async (query: object) => {
  const result = await Order.find(query);
  return result;
};
const getASingleOrderFromDB = async (_id:string) => {
  const result = await Order.findOne({_id});
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getASingleOrderFromDB
};
