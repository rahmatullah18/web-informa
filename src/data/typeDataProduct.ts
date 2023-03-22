export type TypeDataProduct = {
  id: number;
  product_name: string;
  urlImage: { id: number; url: string; color: string }[];
  product_price: number;
  product_color?: string;
  product_size?: string[];
  slug: string;
  sizes: string[];
  colors: string[];
  amount: number;
  stock: number;
};
