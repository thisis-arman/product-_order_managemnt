import { Schema } from "mongoose";
import { TProduct } from "./product.interface";


export const productSchema = new Schema<TProduct>({
    name: String,
    description: String,
    price: Number,
    category: String,
    tags: String,
    variant: [{
        type: String,
        value: String
    }],
    inventory: {
        quantity: Number,
        inStock: Boolean
    }
    
})