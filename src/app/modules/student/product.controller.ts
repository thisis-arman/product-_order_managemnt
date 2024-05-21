import { Request, Response } from "express";
import { productServices } from "./product.service";

const createStudentIntoDB = async (req: Request, res: Response) => {
  try {
    const student = await req.body;
      const result = await productServices.createProduct(student);
      
      res.status(200).json({
          success: true,
          message: "Product is created successfully",
          data: result,
          
      })
  } catch (error:any) {
       res.status(500).json({
         success: true,
         message: error.message||"Product is created successfully",
         data: error,
       });
  }
};

export const studentControllers = {
  createStudentIntoDB,
};
