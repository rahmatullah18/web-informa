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

type TypeSizes = {
  size: string;
  stock: number;
};

export const Product = () => {
  const [product, setProduct] = useState<TypeDataProduct>();

  const [urlImage, setUrlImage] = useState("");
  const [color, setColor] = useState<string | undefined>("");
  const [stock, setStock] = useState<number | undefined>(0);
  const [sizes, setSizes] = useState<TypeSizes[] | undefined>([]);
  const [size, setSize] = useState<string | undefined>("");
  const [selectedSize, setSelectedSize] = useState<string | undefined>("");

  console.log({ color, stock, size });

  // function for handleSize selected
  const handleSelectedSize = (size: string) => {
    setSelectedSize(size);
  };

  const [amount, setAmount] = useState<number>(1);
  const { slug } = useParams();

  const filterUrlImage = (url: string) => {
    setUrlImage(`${url}`);
  };

  const filterColor = (color: string) => {
    setColor(color);
    // jika ganti warna maka size kosong
    setSelectedSize("");
    setSize("");
  };

  const filterStock = (stock: number) => {
    setStock(stock);
  };

  const filterSizes = (id: number) => {
    const sizes = product?.urlImage.find((item) => item.id === id)?.sizes;
    setSizes(sizes);
  };

  const filterSize = useCallback((number: string | undefined) => {
    setSize(number);
  }, []);

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
      <div className="flex flex-col p-2 ">
        {/* product preview */}
        <ProductPreview
          urlImage={urlImage === "" ? product?.urlImage[0].url : urlImage}
          color={product?.product_color}
        />
        <div className="px-2 py-5 space-y-5 ">
          {/* heading */}
          <Heading size="xl">{product?.product_name}</Heading>
          {/* harga */}
          <div className="text-2xl font-bold text-tertiary-100">
            RP.{product?.product_price}
          </div>
          {/* color */}
          <ProductColorPicker
            filterColor={filterColor}
            colors={product?.urlImage}
            filterUrlImage={filterUrlImage}
            filterSizes={filterSizes}
          />
          {/* size */}
          <ProductSize
            filterSize={filterSize}
            filterStock={filterStock}
            sizes={sizes?.length ? sizes : product?.urlImage[0].sizes}
            handleSelectedSize={handleSelectedSize}
            selectedSize={selectedSize}
          />
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
