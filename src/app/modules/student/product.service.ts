import { TProduct } from "./product.interface";
import { Product } from "./product.model"



const createProduct = async (productData :TProduct) => {
    const result = await Product.create(productData);
    return result;
}

const getAllProducts = async () => {
    const result = await Product.find({});
    return result;
}

const getSingleProduct = async (id:string) => {
    const result = await Product.findOne({id});
    return result;
}

const updateSingleProduct = async (product :TProduct) => {
    const result = await Product.updateOne({ id: product._id }, product);
    return result;;
};

const deleteSingleProduct = async (product :TProduct) => {
    const result = await Product.deleteOne({ id: product._id });
    return result;;
};



export const productServices = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
}