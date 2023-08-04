import axios from "axios";
import { Container } from "../components/layouts/container/container";
import { DashboardJumbotron } from "../components/content/dashboard/dashboardJumbotron";
import { dataDashboard } from "../data/dataDashboard";
import { useCallback, useEffect, useState } from "react";
import { DashboardCategoryProduct } from "../components/content/dashboard/dashboardCategoryProduct";
import { TypeDataFetchCategory } from "../data/typeDataFetchCategory";
import { useNavigate } from "react-router-dom";

type TypeDataJumbotron = {
  image?: string;
  title?: string;
  bgColor?: string;
};

export const Dashboard = () => {
  const [dataJumbotron, setDataJumbotron] = useState<TypeDataJumbotron>();
  const [categories, setCategories] = useState<TypeDataFetchCategory[]>();
  const navigate = useNavigate();
  // filter dataDashboard
  useEffect(() => {
    setDataJumbotron(dataDashboard && dataDashboard.jumbotron);
  }, []);

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
      <div className="space-y-5">
        {/* jumbotron */}
        <DashboardJumbotron
          image={dataJumbotron?.image}
          title={dataJumbotron?.title}
          bgColor={dataJumbotron?.bgColor}
        />
        {/* product filter by category */}
        <DashboardCategoryProduct data={categories} />
      </div>
    </Container>
  );
};
