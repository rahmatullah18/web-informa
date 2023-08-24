import React, { useState, useEffect, useCallback } from "react";
import { ContainerAdmin } from "../components/layouts/container/containerAdmin";
import { Loading } from "../components/ui/loading/loading";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export const AdminProducts = () => {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const fetchAllProduct = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/product/get-all-product`,
      });
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      navigate("/server-error");
    }
  }, [navigate]);

  const handleDelete = useCallback(async (slug: string) => {
    setIsLoading(true);
    Swal.fire({
      title: "Apakah kamu ingin menghapus produk ini?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Iya",
      denyButtonText: `Jangan`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API_URL}/product/delete-data-product/${slug}`,
            headers: {
              Accept: "application/json",
            },
          });
          Swal.fire("Terhapus!", "", "success");
          window.location.reload();
        } catch (error) {
          Swal.fire("Produk tidak terhapus", "", "error");
          setIsLoading(false);
        }
      } else if (result.isDenied) {
        Swal.fire("Produk tidak terhapus", "", "info");
        setIsLoading(false);
      }
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchAllProduct();
  }, [fetchAllProduct, handleDelete]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContainerAdmin>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toko Maelo - Produk</title>
      </Helmet>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Tabel Produk</h1>
          <Link
            to={"/admin-product/add"}
            className="overflow-hidden rounded-md"
          >
            <div className="p-2 overflow-hidden text-white bg-secondary-200">
              Tambah Produk
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Nama Produk
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Harga Produk
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Slug
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {products.map((product: any, idx: number) => {
                      return (
                        <tr
                          key={product.id}
                          className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {idx + 1}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {product.product_title}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {product.product_price}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {product.product_slug}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            <div className="flex justify-between space-x-4">
                              <Link
                                to={`/admin-product/update/${product.product_slug}`}
                                className="text-blue-400"
                              >
                                Edit
                              </Link>
                              <button
                                onClick={() =>
                                  handleDelete(product.product_slug)
                                }
                                className="text-red-500"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerAdmin>
  );
};
