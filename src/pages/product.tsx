import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ProductAmount } from "../components/content/product/productAmount";
import { ProductColorPicker } from "../components/content/product/productColorPicker";
import { ProductPreview } from "../components/content/product/productPreview";
import { ProductSize } from "../components/content/product/productSize";
import { Container } from "../components/layouts/container/container";
import { Button } from "../components/ui/button/button";
import { dataProducts } from "../data/dataProducts";
import { TypeDataProduct } from "../data/typeDataProduct";

export const Product = () => {
  const [product, setProduct] = useState<TypeDataProduct>();
  const { slug } = useParams();

  const filterProduct = useCallback(() => {
    try {
      const filteredProduct = dataProducts.find(
        (product) => product.slug === slug
      );
      setProduct(filteredProduct);
    } catch (error) {}
  }, [slug]);

  useEffect(() => {
    filterProduct();
  }, [filterProduct]);

  return (
    <Container>
      <div className="flex flex-col p-2 space-y-10 ">
        {/* product preview */}
        <ProductPreview
          urlImage={product?.urlImage}
          color={product?.product_color}
        />
        <div className="space-y-10">
          {/* heading */}
          <span className="text-center">
            <h1 className="text-3xl font-bold capitalize">
              {product?.product_name}
            </h1>
          </span>
          {/* color */}
          <ProductColorPicker colors={product?.colors} />
          {/* size */}
          <ProductSize sizes={product?.sizes} />
          {/* amount */}
          <ProductAmount amount={product?.amount} />
          {/* buttonSubmit */}
          <span className="flex justify-end">
            <Button size="lg">Pesan</Button>
          </span>
        </div>
      </div>
    </Container>
  );
};