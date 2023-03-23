import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ProductAmount } from "../components/content/product/productAmount";
import { ProductColorPicker } from "../components/content/product/productColorPicker";
import { ProductPreview } from "../components/content/product/productPreview";
import { ProductSize } from "../components/content/product/productSize";
import { Container } from "../components/layouts/container/container";
import { Button } from "../components/ui/button/button";
import { Heading } from "../components/ui/heading/heading";
import { dataProducts } from "../data/dataProducts";
import { TypeDataProduct } from "../data/typeDataProduct";

export const Product = () => {
  const [product, setProduct] = useState<TypeDataProduct>();
  const [urlImage, setUrlImage] = useState("");
  const [stock, setStock] = useState<number | undefined>(0);
  const [size, setSize] = useState<string>("");

  const [amount, setAmount] = useState<number>(1);

  const { slug } = useParams();

  const filterUrlImage = (id: number) => {
    const url = product?.urlImage.find((item) => item.id === id)?.url;
    setUrlImage(`${url}`);
  };

  const filterStock = (id: number) => {
    const stock = product?.urlImage.find((item) => item.id === id)?.stock;
    setStock(stock);
  };

  const filterSize = (number: string) => {
    setSize(number);
  };

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
      <div className="flex flex-col p-2 space-y-5 ">
        {/* product preview */}
        <ProductPreview
          urlImage={urlImage === "" ? product?.urlImage[0].url : urlImage}
          color={product?.product_color}
          stock={stock === 0 ? product?.urlImage[0].stock : stock}
        />
        <div className="px-2 py-5 space-y-5 ">
          {/* heading */}
          <span className="text-center">
            <Heading size="xl">{product?.product_name}</Heading>
          </span>
          {/* harga */}
          <div className="text-2xl font-bold text-tertiary-100">
            RP.{product?.product_price}
          </div>
          {/* color */}
          <ProductColorPicker
            colors={product?.urlImage}
            filterUrlImage={filterUrlImage}
            filterStock={filterStock}
          />
          {/* size */}
          <ProductSize filterSize={filterSize} sizes={product?.sizes} />
          {/* amount */}
          <ProductAmount amount={amount} setAmount={setAmount} />
          {/* buttonSubmit */}
          <span className="flex justify-end">
            <Button size="lg">Add to Cart</Button>
          </span>
        </div>
      </div>
    </Container>
  );
};
