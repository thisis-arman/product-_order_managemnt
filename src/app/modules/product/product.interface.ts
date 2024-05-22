export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: Array<{
    type: string;
    value: string;
  }>;
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
