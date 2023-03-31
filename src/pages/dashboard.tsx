import { Container } from "../components/layouts/container/container";
import { DashboardJumbotron } from "../components/content/dashboard/dashboardJumbotron";
import { dataDashboard } from "../data/dataDashboard";
import { useEffect, useState } from "react";
import { DashboardTitle } from "../components/content/dashboard/dashboardTitle";
import { DashboardCategoryProduct } from "../components/content/dashboard/dashboardCategoryProduct";
import { DashboardButton } from "../components/content/dashboard/dashboardButton";

type TypeDataJumbotron = {
  image?: string;
  title?: string;
  bgColor?: string;
};

type productDashboard = {
  id: number;
  product_color: string;
  product_name: string;
  slug: string;
  urlImage: string;
};

type TypeDataCatagoryProduct = {
  title: string;
  product: productDashboard[];
  class: string;
  slug: string;
};

export const Dashboard = () => {
  const [dataJumbotron, setDataJumbotron] = useState<TypeDataJumbotron>();
  const [title, setTitle] = useState<string>();
  const [categoryProduct1, setCategoryProduct1] =
    useState<TypeDataCatagoryProduct>();
  const [categoryProduct2, setCategoryProduct2] =
    useState<TypeDataCatagoryProduct>();

  // filter dataDashboard
  useEffect(() => {
    setDataJumbotron(dataDashboard && dataDashboard.jumbotron);
    setTitle(dataDashboard && dataDashboard.title);
    setCategoryProduct1(dataDashboard && dataDashboard.category1);
    setCategoryProduct2(dataDashboard && dataDashboard.category2);
  }, []);

  return (
    <Container>
      <div className="space-y-5">
        {/* jumbotron */}
        <DashboardJumbotron
          image={dataJumbotron?.image}
          title={dataJumbotron?.title}
          bgColor={dataJumbotron?.bgColor}
        />
        {/* title ads */}
        <DashboardTitle title={title} />
        {/* button  */}
        <DashboardButton />
        {/* category1 */}
        <DashboardCategoryProduct
          title={categoryProduct1?.title}
          products={categoryProduct1?.product}
          class={categoryProduct1?.class}
          slug={categoryProduct1?.slug}
        />
        {/* category2 */}
        <DashboardCategoryProduct
          title={categoryProduct2?.title}
          products={categoryProduct2?.product}
          class={categoryProduct2?.class}
          slug={categoryProduct2?.slug}
        />
      </div>
    </Container>
  );
};
