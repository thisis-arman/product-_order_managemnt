import { TOrder } from "./order.interface";
import { Order } from "./order.model";


const createOrderIntoDB = async (orderInfo: TOrder) => {
    const result = await Order.create(orderInfo);
    return result;
}


const getAllOrdersFromDB = async (query: object) => {
    
    const result = await Order.find(query);
    return result;
}


export const orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB

}