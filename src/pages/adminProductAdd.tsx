import { useCallback, useEffect, useState } from "react";
import { ContainerAdmin } from "../components/layouts/container/containerAdmin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components/ui/loading/loading";
import Swal from "sweetalert2";
import slugify from "../helpers/formatSlug";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const AdminProductAdd = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [prductImage, setPrductImage] = useState<any>([]);

  const [categoryId, setCategoryId] = useState<string>("");
  // type product
  const [typeProducts, setTypeProducts] = useState<any>([]);

  const [typeProductColor, setTypeProductColor] = useState<any>("");
  let typeProductSize = "L";
  const [typeProductStock, setTypeProductStock] = useState<any>("");
  const [productDesc, setProductDesc] = useState<string>("");

  const [categories, setCategories] = useState<any>([]);

  const navigate = useNavigate();

  const getAllCategories = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/category/get-all-category`,
      });
      setCategories(res.data);
      setIsLoading(false);
    } catch (error) {
      navigate("/server-error");
    }
  }, [navigate]);

  const handleTypeProducts = () => {
    if (typeProductColor === "" || typeProductStock === "") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Type tidak boleh kosong",
      });
    }
    let variant = {
      type_product_color: typeProductColor,
      type_product_size: typeProductSize,
      type_product_stock: typeProductStock,
    };
    setTypeProducts([...typeProducts, variant]);

    setTypeProductColor("");
    setTypeProductStock("");
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      productName === "" ||
      productDesc === "" ||
      productPrice === "" ||
      prductImage.length < 1 ||
      categoryId === "" ||
      typeProducts.length < 1
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tolong isi semua Form",
      });
    } else {
      const payload: any = {
        category_id: parseInt(categoryId),
        product_title: productName,
        product_desc: productDesc,
        product_slug: slugify(productName),
        product_price: parseInt(productPrice),
        prduct_image: [],
        type_products: typeProducts,
      };

      // return console.log(payload);
      for (let i = 0; i < prductImage.length; i++) {
        payload.prduct_image.push(prductImage[i]);
      }

      try {
        await axios({
          method: "POST",
          url: `${process.env.REACT_APP_API_URL}/product/create-data-product`,
          data: payload,
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        });
        Swal.fire({
          icon: "success",
          title: "Data berhasil di input",
        });
        navigate("/admin-products");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Lagi ada kendala",
        });
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContainerAdmin>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toko Maelo - Tambah Produk</title>
      </Helmet>
      <div className="mb-96">
        <div className="mb-4">
          <Link to={"/admin-products"}>⬅️ Kembali</Link>
        </div>
        <form className="space-y-4" onSubmit={handleSubmitForm}>
          <div>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Nama Product"
              className="w-full px-2 py-1 text-lg font-semibold border-2 rounded-md shadow-md outline-none border-secondary-200 focus:ring ring-secondary-100"
            />
          </div>
          <div>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Harga Product"
              className="w-full px-2 py-1 text-lg font-semibold border-2 rounded-md shadow-md outline-none border-secondary-200 focus:ring ring-secondary-100"
            />
          </div>
          <div>
            <select
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full px-2 py-1 text-lg font-semibold border-2 rounded-md shadow-md outline-none border-secondary-200 focus:ring ring-secondary-100"
            >
              <option value="">Pilih Kategori</option>;
              {categories.map((category: any) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.category_title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="space-y-4">
            <label className="flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-white border rounded-lg shadow-lg cursor-pointer text-blue border-blue hover:bg-blue hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Select a file
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e: any) => setPrductImage(e.target.files)}
                className="hidden"
              />
            </label>
            <div className="flex items-center justify-between">
              {Array.from(prductImage).map((file: any, index) => {
                return (
                  <div
                    key={index}
                    className="relative border-2 rounded-md shadow-lg"
                  >
                    <div
                      className="absolute top-0 right-0 z-10 text-4xl font-bold text-red-500 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setPrductImage(
                          Array.from(prductImage).filter(
                            (file, i) => i !== index
                          )
                        );
                      }}
                    >
                      X
                    </div>
                    <img src={URL.createObjectURL(file)} alt="pre" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white ">
            <ReactQuill
              value={productDesc}
              onChange={setProductDesc}
              theme="snow"
              className="h-full"
            />
          </div>
          <div className="p-2 space-y-2 border border-black">
            <h2 className="text-lg font-semibold">Tipe Produk</h2>
            <input
              type="text"
              value={typeProductColor}
              onChange={(e) => setTypeProductColor(e.target.value)}
              placeholder="Warna: Merah"
              className="w-full px-2 py-1 text-lg font-semibold border-2 rounded-md shadow-md outline-none border-secondary-200 focus:ring ring-secondary-100"
            />
            {/* <input
              type="text"
              value={typeProductSize}
              onChange={(e) => setTypeProductSize(e.target.value)}
              placeholder="Ukuran: L"
              className="w-full px-2 py-1 text-lg font-semibold border-2 rounded-md shadow-md outline-none border-secondary-200 focus:ring ring-secondary-100"
            /> */}
            <input
              type="number"
              value={typeProductStock}
              onChange={(e) => setTypeProductStock(e.target.value)}
              placeholder="Stok : 100"
              className="w-full px-2 py-1 text-lg font-semibold border-2 rounded-md shadow-md outline-none border-secondary-200 focus:ring ring-secondary-100"
            />
            <div className="flex justify-end">
              <span
                onClick={() => handleTypeProducts()}
                className="relative p-2 text-white rounded-md cursor-pointer bg-secondary-200"
              >
                Tambah Tipe
              </span>
            </div>
            <div className="flex items-center justify-start p-2 space-x-2 bg-gray-300 rounded-sm shadow-md">
              {typeProducts.map((item: any, idx: any) => {
                return (
                  <div
                    key={idx}
                    className="relative p-2 text-black bg-white border rounded-sm shadow-lg "
                  >
                    <div
                      className="absolute z-10 font-bold text-red-500 cursor-pointer -right-1 -top-3"
                      onClick={(e) => {
                        e.preventDefault();
                        setTypeProducts(
                          Array.from(typeProducts).filter(
                            (file, i) => i !== idx
                          )
                        );
                      }}
                    >
                      X
                    </div>
                    {item.type_product_color}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pb-20">
            <button
              type="submit"
              className="relative w-full p-2 text-xl font-bold text-white rounded-md bg-secondary-200"
            >
              Kirim Data
            </button>
          </div>
        </form>
      </div>
    </ContainerAdmin>
  );
};
