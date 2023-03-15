import { Heading } from "../../ui/heading/heading";
import { HomeCard } from "./homeCard";
import { dataProducts } from "../../../data/dataProducts";

export const HomeProducts = () => {
  return (
    <div className="px-2 space-y-4">
      <div className="flex items-center justify-between">
        <Heading size="lg">Products</Heading>
        <div className="px-4 py-2 font-bold text-white rounded-lg bg-primary-100">
          filter
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 place-items-center">
        {dataProducts.map((product) => {
          return (
            <HomeCard
              urlImge={product.urlImage}
              color={product.product_color}
            />
          );
        })}
      </div>
    </div>
  );
};
