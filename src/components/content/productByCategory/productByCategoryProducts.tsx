import { TypeDataFetchCategory } from "../../../data/typeDataFetchCategory";
import { Loading } from "../../ui/loading/loading";
import { ProductByCategoryCard } from "./productByCategoryCard";

type ProductByCategoryProductsProps = {
  products?: TypeDataFetchCategory[];
};

export const ProductByCategoryProducts = ({
  products,
}: ProductByCategoryProductsProps) => {
  const mapProducts = products ? (
    products?.map((product) => {
      let images: any = product.prduct_image
        .split(", ")
        .map((image: any) => image.trim());
      return (
        <ProductByCategoryCard
          key={product.id}
          category_title={product.category_title}
          category_class={product.category_class}
          category_slug={product.category_slug}
          id={product.id}
          prduct_image={images[0]}
          product_price={product.product_price}
          product_slug={product.product_slug}
          product_title={product.product_title}
        />
      );
    })
  ) : (
    <Loading />
  );
  return <div className="grid grid-cols-2 gap-2">{mapProducts}</div>;
};
