import { Request, Response } from "express";
import { productServices } from "./product.service";
import { Product } from "./product.model";
import { productValidationSchema } from "./product.zod.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const  product  = req.body;
    const parsedProduct = await productValidationSchema.parse(product);
    console.log({ product });
    const result = await productServices.createProduct(parsedProduct);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      data: error.details,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query;

    const result = await productServices.getAllProducts(query);
    if (req.query.searchTerm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term '${req.query.searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      data: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      data: error,
    });
  }
};

const updateProductsIntoDB = async (req: Request, res: Response) => {
  try {
    const product =  req.body;
    const result = await productServices.updateSingleProduct(product);

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      data: error,
    });
  }
};

const deleteProductsFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = await req.params;
    const result = await productServices.deleteSingleProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      data: error,
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
  updateProductsIntoDB,
  deleteProductsFromDB,
  getSingleProduct,
};
