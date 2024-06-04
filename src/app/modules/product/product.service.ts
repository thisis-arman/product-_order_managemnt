import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const product = new Product(productData);
  return await product.save();
};


const getAllProducts = async (query: { searchTerm?: string }) => {
  const { searchTerm } = query;

  // If searchTerm is provided and is a non-empty string, perform a text search
  if (
    searchTerm &&
    typeof searchTerm === "string" &&
    searchTerm.trim() !== ""
  ) {
    return await Product.find({ $text: { $search: searchTerm } });
  }

  return await Product.find({});
};

const getSingleProduct = async (_id: string) => {
  const result = await Product.findOne({ _id });
  console.log(result);
  return result;
};





const updateSingleProduct = async (product:any) => {
  const result = await Product.updateOne(
    { id: product._id },
    { $set: product }
  );
  if (result.acknowledged === true && result.modifiedCount===1) { 

    return product;
  }
  throw new Error("Product update failed")

};

const deleteSingleProduct = async (_id:string) => {
  const result = await Product.deleteOne({ _id });

  if (result.acknowledged === true && result.deletedCount=== 1) {
    
    return null;
  }
};




export const productServices = {
  createProduct: createProductIntoDB,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,

};
