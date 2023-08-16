import { Link } from "react-router-dom";
import { Card } from "../../ui/card/card";
import { Heading } from "../../ui/heading/heading";
import { Paragraph } from "../../ui/paragraph/paragraph";
import { TypeDataFetchCategory } from "../../../data/typeDataFetchCategory";
import { Loading } from "../../ui/loading/loading";

type TypeDashboardCategoryProduct = {
  data?: TypeDataFetchCategory[];
};

export const DashboardCategoryProduct = ({
  data,
}: TypeDashboardCategoryProduct) => {
  return (
    <>
      {data ? (
        data?.map((items: any) => {
          return (
            <div className="px-2" key={items[0].id}>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-tertiary-100">
                  {items[0].category_title}
                </div>
                {/* /${classCategory}/${slug} */}
                <Link to={`/category/${items[0].category_slug}`}>
                  <div className="transition ease-in-out text-md text-secondary-200 hover:scale-125">
                    Selengkapnya
                  </div>
                </Link>
              </div>
              <div className="flex py-4 space-x-2 overflow-x-scroll overflow-y-hidden">
                {items.map((product: any, idx: any) => {
                  return idx <= 5 ? (
                    <Card
                      key={product.id}
                      urlImge={`${process.env.REACT_APP_IMAGE_URL}/${product.prduct_image}`}
                      product_color={""}
                      product_name={product.product_title}
                      product_price={product.product_price}
                      slug={product.product_slug}
                    />
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
};
