type TypeSizes = {
  size: string;
  stock: number;
};
export type TypeDataProduct = {
  id: number;
  product_name: string;
  urlImage: {
    id: number;
    url: string;
    color: string;
    sizes: TypeSizes[];
  }[];
  product_price: number;
  product_color?: string;
  slug: string;
  amount: number;
};
