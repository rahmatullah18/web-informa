import { Link } from "react-router-dom";
import { Card } from "../../ui/card/card";
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
              <div className="flex items-center justify-between py-1 text-black border-b border-gray-400 rounded-sm">
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
                  // string to array
                  let images: any = product.prduct_image
                    .split(", ")
                    .map((image: any) => image.trim());
                  return idx <= 5 ? (
                    <Card
                      key={product.id}
                      urlImge={`${process.env.REACT_APP_IMAGE_URL}/${images[0]}`}
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
