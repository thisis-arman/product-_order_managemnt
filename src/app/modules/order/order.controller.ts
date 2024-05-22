import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderInfo = req.body;
    const result = await orderServices.createOrderIntoDB(orderInfo);
    res.status(200).send({
      success: true,
      message: "Order created successfully",
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
const getAllOrders = async (req: Request, res: Response) => {
  try {

      const query = req.query;
    //   console.log({query});
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


export const orderControllers = {
    createOrder,
    getAllOrders

}
