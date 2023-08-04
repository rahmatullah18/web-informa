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
                <Heading size="md" className="text-tertiary-100">
                  {items[0].category_title}
                </Heading>
                {/* /${classCategory}/${slug} */}
                <Link to={`/category/${items[0].category_slug}`}>
                  <Paragraph
                    className="transition ease-in-out text-secondary-200 hover:scale-110"
                    size="md"
                  >
                    Selengkapnya
                  </Paragraph>
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
