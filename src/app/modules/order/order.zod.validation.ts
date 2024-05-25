

import { z } from "zod";

export const orderValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
  productId: z.string(),
  price: z.number().positive("Price must be positive"),
  quantity: z.number().int().positive("Quantity must be a positive integer"),
});
