import axios from "axios";
import { Container } from "../components/layouts/container/container";
import { DashboardJumbotron } from "../components/content/dashboard/dashboardJumbotron";
import { dataDashboard } from "../data/dataDashboard";
import { useCallback, useEffect, useState } from "react";
import { DashboardCategoryProduct } from "../components/content/dashboard/dashboardCategoryProduct";
import { TypeDataFetchCategory } from "../data/typeDataFetchCategory";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

type TypeDataJumbotron = {
  image?: string;
  title?: string;
  bgColor?: string;
};

export const Dashboard = () => {
  const [dataJumbotron, setDataJumbotron] = useState<TypeDataJumbotron>();
  const [categories, setCategories] = useState<TypeDataFetchCategory[]>();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // filter dataDashboard
  useEffect(() => {
    setDataJumbotron(dataDashboard && dataDashboard.jumbotron);
  }, []);

  const handleSearch = async () => {
    if (search) {
      setActiveSearch(true);
      setIsLoading(true);
      setProducts([]);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/product/search-product/${search}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    } else {
      Swal.fire("Pencarian kosong", "", "error");
    }
  };

  const getProductsFilterByCategory = useCallback(async () => {
    try {
      const productsCategory = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/product/products-filter-by-category`,
      });
      const res = await productsCategory.data;
      setCategories(res);
    } catch (error) {
      navigate("/server-error");
    }
  }, [navigate]);

  useEffect(() => {
    getProductsFilterByCategory();
  }, [getProductsFilterByCategory]);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toko Maelo</title>
      </Helmet>
      <div className="space-y-5">
        {/* jumbotron */}
        <DashboardJumbotron
          image={dataJumbotron?.image}
          title={dataJumbotron?.title}
          bgColor={dataJumbotron?.bgColor}
        />
        <div className="p-2 space-y-1">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="w-full h-10 px-2 rounded-md shadow-md"
              placeholder="Search Produk"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="p-2 text-white rounded-md bg-secondary-200"
              onClick={handleSearch}
            >
              Cari
            </button>
          </div>
          {activeSearch && (
            <div className="relative bg-gray-200 rounded-md shadow-md">
              {products.length > 0 ? (
                <div className="mt-2 ">
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div className="space-y-2">
                      {products.map((product: any) => {
                        return (
                          <div
                            key={product.id}
                            className="p-2 cursor-pointer hover:bg-white"
                            onClick={() =>
                              navigate(`/product/${product.product_slug}`)
                            }
                          >
                            {product.product_title}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-2">tidak ada product</div>
              )}
              <span
                onClick={() => setActiveSearch(false)}
                className="absolute top-0 text-lg font-bold text-red-500 cursor-pointer right-1"
              >
                X
              </span>
            </div>
          )}
        </div>
        {/* product filter by category */}
        <DashboardCategoryProduct data={categories} />
      </div>
    </Container>
  );
};
