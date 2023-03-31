import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/layouts/container/container";
import { dataProducts } from "../data/dataProducts";
import { TypeDataProduct } from "../data/typeDataProduct";
import { dataCategory } from "../data/dataCategory";
import { Heading } from "../components/ui/heading/heading";
import { ProductsByCategoryFilter } from "../components/content/productByCategory/productByCategoryFilter";
import { ProductByCategoryProducts } from "../components/content/productByCategory/productByCategoryProducts";

type TypeCategory = {
  id: number;
  title: string;
  class: string;
  slug: string;
};

export const ProductsByCategory = () => {
  const { category: slug } = useParams();
  const [products, setProducts] = useState<TypeDataProduct[]>();

  const [category, setCategory] = useState<TypeCategory>();
  const productsLength = products?.length;

  const filterCategory = useCallback(
    (products: TypeDataProduct[]) => {
      const filteredData = products.filter((product) => {
        return product.category.some((cate) => cate.slug === slug);
      });
      setProducts(filteredData);
    },
    [slug]
  );

  const findCatagory = useCallback(
    (categories: TypeCategory[]) => {
      const findData = categories.find((category) => category.slug === slug);
      setCategory(findData);
    },
    [slug]
  );

  useEffect(() => {
    filterCategory(dataProducts);
    findCatagory(dataCategory);
  }, [filterCategory, findCatagory]);

  return (
    <Container>
      <div className="p-2 mt-5 space-y-5">
        <Heading size="lg">{category?.title}</Heading>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <div>Result Product</div>
            <div>{productsLength} item</div>
          </div>
          <ProductsByCategoryFilter />
        </div>
        <ProductByCategoryProducts products={products} />
      </div>
    </Container>
  );
};
