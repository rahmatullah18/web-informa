import { TypeDataProduct } from "../../../data/typeDataProduct";
import { ProductByCategoryCard } from "./productByCategoryCard";

type ProductByCategoryProductsProps = {
  products?: TypeDataProduct[];
};

export const ProductByCategoryProducts = ({
  products,
}: ProductByCategoryProductsProps) => {
  const mapProducts = products?.map((product) => {
    return (
      <ProductByCategoryCard
        key={product.id}
        amount={product.amount}
        category={product.category}
        product_price={product.product_price}
        urlImge={product.urlImage}
        product_color={product.product_color}
        product_name={product.product_name}
        slug={product.slug}
      />
    );
  });
  return <div className="grid grid-cols-2 gap-2">{mapProducts}</div>;
};
