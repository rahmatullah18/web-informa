import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/layouts/container/container";
import { Heading } from "../components/ui/heading/heading";
// import { ProductsByCategoryFilter } from "../components/content/productByCategory/productByCategoryFilter";
import { ProductByCategoryProducts } from "../components/content/productByCategory/productByCategoryProducts";
import axios from "axios";
import { TypeDataFetchCategory } from "../data/typeDataFetchCategory";
import { Helmet } from "react-helmet";

export const ProductsByCategory = () => {
  const [products, setProducts] = useState<TypeDataFetchCategory[]>();
  const [categoryTitle, setCategoryTitle] = useState<string>();

  const { categorySlug } = useParams();

  const filterCategory = useCallback(async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/product/get-products-by-category/${categorySlug}`,
      });
      const data = await res.data;
      setProducts(data);
      setCategoryTitle(data[0].category_title);
    } catch (error) {}
  }, [categorySlug]);

  useEffect(() => {
    filterCategory();
  }, [filterCategory]);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toko Maelo - {`${categoryTitle ? categoryTitle : ""}`}</title>
      </Helmet>
      <div className="p-2 mt-5 space-y-5">
        <Heading size="lg">{categoryTitle}</Heading>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <div>Jumlah</div>
            <div>({products?.length}) produk</div>
          </div>
          {/* <ProductsByCategoryFilter /> */}
        </div>
        <ProductByCategoryProducts products={products} />
      </div>
    </Container>
  );
};
