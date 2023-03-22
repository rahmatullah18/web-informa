import { Heading } from "../../ui/heading/heading";
import { HomeCard } from "./homeCard";
import { dataProducts } from "../../../data/dataProducts";
import { Link } from "react-router-dom";
import { HomeFilterProduct } from "./homeFilterProduct";

export const HomeProducts = () => {
  const mapProducts = dataProducts.map((product) => {
    return (
      <Link key={product.id} to={`products/${product.slug}`}>
        <HomeCard
          urlImge={product.urlImage[0].url}
          color={product.product_color}
          name={product.product_name}
        />
      </Link>
    );
  });

  return (
    <div className="px-2 space-y-4">
      <div className="flex items-center justify-between">
        <Heading size="lg">Products</Heading>
        <HomeFilterProduct />
      </div>
      <div className="grid w-full grid-cols-2 gap-4 place-items-center">
        {mapProducts}
      </div>
    </div>
  );
};
