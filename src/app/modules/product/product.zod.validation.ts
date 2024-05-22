import { z } from "zod";

const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});


export const productValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variant: z.array(
       variantSchema  
    ),
    inventory: z.object({
        quantity: z.number(),
        inStock: z.boolean(),
    })
    
})