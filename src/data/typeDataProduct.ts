export type TypeDataProduct = {
  id: number;
  product_name: string;
  urlImage: { id: number; url: string; color: string; stock: number }[];
  product_price: number;
  product_color?: string;
  product_size?: string[];
  slug: string;
  sizes: string[];
  amount: number;
};
