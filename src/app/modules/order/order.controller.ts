import { Request, Response } from "express";
import { orderServices } from "./order.service";
import { orderValidationSchema } from "./order.zod.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderInfo = req.body;

    const parsedOrder = await orderValidationSchema.parse(orderInfo)
    const result = await orderServices.createOrderIntoDB(parsedOrder);
    res.status(200).send({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error :any) {
    res.status(200).send({
      success: true,
      message:error.message|| "Something went wrong",
      data: error,
    });
  }
};


const getAllOrders = async (req: Request, res: Response) => {
  try {

    
    const result = await orderServices.getAllOrdersFromDB(req.query);
    res.status(200).send({
      success: true,
      message: "Orders fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).send({
      success: true,
      message: "Something went wrong",
      data: error,
    });
  }
};


const getASingleOrder = async (req: Request, res: Response) => {
  try {

    const { orderId } = req.params;
    const result = await orderServices.getASingleOrderFromDB(orderId);
    res.status(200).send({
      success: true,
      message: "Orders fetched successfully",
      data: result,
    });
  } catch (error:any) {
    res.status(200).send({
      success: false,
      message:error.path?"Order not found " :"Something went wrong",
     
    });
  }
};


export const orderControllers = {
    createOrder,
  getAllOrders,
    getASingleOrder

}
