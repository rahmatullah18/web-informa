export type TypeDataProduct = {
  id: number;
  product_name: string;
  urlImage: {
    id: number;
    url: string;
    color: string;
    stock: number;
    sizes: string[];
  }[];
  product_price: number;
  product_color?: string;
  slug: string;
  amount: number;
};
