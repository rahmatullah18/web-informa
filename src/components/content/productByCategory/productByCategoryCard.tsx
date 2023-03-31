import { Link } from "react-router-dom";

type TypeCardProps = {
  amount: number;
  category: { id: number; class: string; slug: string; title: string }[];
  product_price: number;
  urlImge: {
    color: string;
    id: number;
    sizes: { size: string; stock: number }[];
    url: string;
  }[];
  product_color?: string;
  product_name: string;
  slug: string;
};

export const ProductByCategoryCard = ({
  amount,
  category,
  product_price,
  urlImge,
  product_color,
  product_name,
  slug,
}: TypeCardProps) => {
  return (
    <Link to={`/product/${slug}`}>
      <div
        className={`relative w-full flex-shrink-0 h-40 
          ${product_color} rounded-lg  shadow-md`}
      >
        <img
          src={urlImge[0].url}
          alt=""
          className="object-cover w-full h-full "
        />
        <span className="absolute font-bold top-1 left-1 text-primary-200">
          {product_name}
        </span>
      </div>
    </Link>
  );
};
