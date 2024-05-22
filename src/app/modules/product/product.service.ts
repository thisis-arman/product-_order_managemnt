import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const product = new Product(productData);
  return await product.save();
};

const getAllProducts = async (query) => {
  const result = await Product.find(query);
  return result;
};

const getSingleProduct = async (_id: string) => {
  const result = await Product.findOne({ _id });
  console.log(result);
  return result;
};





const updateSingleProduct = async (product: TProduct) => {
  const result = await Product.updateOne(
    { id: product._id },
    { $set: product }
  );
  return result;
};

const deleteSingleProduct = async (_id:string) => {
  const result = await Product.deleteOne({ _id });
  return result;
};


const textSearchIntoDB = async () => { 


}

export const productServices = {
  createProduct: createProductIntoDB,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  textSearchIntoDB
};
