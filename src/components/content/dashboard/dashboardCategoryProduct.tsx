import { Link } from "react-router-dom";
import { Card } from "../../ui/card/card";
import { Heading } from "../../ui/heading/heading";
import { Paragraph } from "../../ui/paragraph/paragraph";

type TypeDashboardCategoryProduct = {
  title?: string;
  class?: string;
  slug?: string;
  products?: {
    category?: { class: string; id: number; title: string }[];
    id: number;
    product_color: string;
    product_name: string;
    slug: string;
    urlImage: string;
  }[];
};

export const DashboardCategoryProduct = ({
  title,
  products,
  class: classCategory,
  slug,
}: TypeDashboardCategoryProduct) => {
  const mapCategoryProduct = products?.map((product) => {
    return (
      <Card
        key={product.id}
        urlImge={product.urlImage}
        product_color={product.product_color}
        product_name={product.product_name}
        slug={product.slug}
      />
    );
  });

  return (
    <div className="px-2">
      <div className="flex items-center justify-between">
        <Heading size="md" className="text-tertiary-100">
          {title}
        </Heading>
        <Link to={`/${classCategory}/${slug}`}>
          <Paragraph
            className="transition ease-in-out text-secondary-200 hover:scale-110"
            size="md"
          >
            Selengkapnya
          </Paragraph>
        </Link>
      </div>
      <div className="flex py-4 space-x-2 overflow-x-scroll overflow-y-hidden">
        {mapCategoryProduct}
      </div>
    </div>
  );
};
