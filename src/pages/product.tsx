import { useState, useEffect, useCallback, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductAmount } from "../components/content/product/productAmount";
import { ProductColorPicker } from "../components/content/product/productColorPicker";
import { ProductPreview } from "../components/content/product/productPreview";
import { ProductSize } from "../components/content/product/productSize";
import { Container } from "../components/layouts/container/container";
import { Heading } from "../components/ui/heading/heading";
import axios from "axios";
import { Loading } from "../components/ui/loading/loading";
import { useCart } from "react-use-cart";
import { CartContext } from "../store/cart/cartContext";
import { formatRupiah } from "../helpers/formatRupiah";
import { Helmet } from "react-helmet";
import { Slide } from "react-slideshow-image";

const sizes = [
  { size: "XS", id: 1 },
  { size: "M", id: 1 },
  { size: "L", id: 1 },
  { size: "XL", id: 1 },
  { size: "XXL", id: 1 },
];

export const Product = () => {
  const [product, setProduct] = useState<any>();

  // slideshow
  let images: any = product?.prduct_image
    .split(", ")
    ?.map((image: any) => image.trim());
  let imageForSLideShow = images?.map((url: any) => ({ url, caption: "" }));

  // const spanStyle = {
  //   padding: "20px",
  //   background: "#efefef",
  //   color: "#000000",
  // };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "500px",
  };
  // endslideshow

  const [color, setColor] = useState<string | undefined>("");
  const [stock, setStock] = useState<number>(0);

  // const [sizes, setSizes] = useState<TypeSizes[] | undefined>([]);
  const [selectedSize, setSelectedSize] = useState<string | undefined>("");
  const [amount, setAmount] = useState<number>(1);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // cart
  const { addItem } = useCart();

  // contextCart
  const cartCtx = useContext(CartContext);

  // function for handleSize selected
  const handleSelectedSize = (size: string) => {
    setSelectedSize(size);
  };

  const { slug } = useParams();

  const filterColor = (color: string, stock: number) => {
    setColor(color);
    setStock(stock);
    // jika ganti warna maka size kosong
    setSelectedSize("");
  };

  const getProductBySlug = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/product/get-product-by-slug/${slug}`,
      });
      setProduct(res?.data);
    } catch (error) {
      navigate("/server-error");
    }
    setLoading(false);
  }, [slug, navigate]);

  const handleAddItem = () => {
    const item: any = {
      id: product.id,
      price: parseInt(product.product_price),
      color,
      size: selectedSize,
      stock,
      product_name: product.product_name,
      product_slug: product.product_slug,
      product_url: product.prduct_image,
    };
    addItem(item, amount);
    cartCtx.handleShowCart(true);
  };

  useEffect(() => {
    getProductBySlug();
  }, [getProductBySlug]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Toko Maelo - {`${product?.product_name ? product.product_name : ""}`}
        </title>
      </Helmet>
      <div className="flex flex-col p-2 ">
        <Link to={"/"}>⬅️ Kembali</Link>
        {/* product preview */}
        {images?.length > 1 ? (
          <Slide>
            {imageForSLideShow?.map((slideImage: any, index: any) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                  }}
                >
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}/${slideImage.url}`}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slide>
        ) : (
          <ProductPreview
            urlImage={`${process.env.REACT_APP_IMAGE_URL}/${product?.prduct_image}`}
          />
        )}

        <div className="px-2 py-5 space-y-5 ">
          {/* heading */}
          <Heading size="xl">{product?.product_name}</Heading>
          {/* harga */}
          <div className="text-2xl font-bold text-tertiary-100">
            {formatRupiah(product?.product_price)}
          </div>
          {/* color */}
          <ProductColorPicker
            colors={product?.type_products}
            filterColor={filterColor}
          />
          {/* size */}
          <ProductSize
            // filterSize={filterSize}
            sizes={sizes}
            selectedSize={selectedSize}
            handleSelectedSize={handleSelectedSize}
          />
          {/* amount */}
          <ProductAmount stock={stock} amount={amount} setAmount={setAmount} />
          {/* buttonSubmit */}
          <div className="flex justify-end">
            <button
              onClick={() => handleAddItem()}
              className="px-4 py-2 text-base font-light capitalize transition ease-in-out rounded-md shadow hover:scale-110 bg-secondary-200 text-secondary-100"
              disabled={color !== "" && selectedSize !== "" ? false : true}
            >
              Tambah ke Keranjang
            </button>
            {/* <Button size="lg">Add to Cart</Button> */}
          </div>
        </div>
      </div>
    </Container>
  );
};
