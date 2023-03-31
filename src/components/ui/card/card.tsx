import { Link } from "react-router-dom";

type TypeCardProps = {
  urlImge: string;
  product_color?: string;
  product_name: string;
  slug: string;
};

export const Card = ({
  urlImge,
  product_color,
  product_name,
  slug,
}: TypeCardProps) => {
  return (
    <Link to={`/product/${slug}`}>
      <div
        className={`relative w-52 flex-shrink-0 h-40 
          ${product_color} rounded-lg  shadow-md`}
      >
        <img src={urlImge} alt="" className="object-cover w-full h-full " />
        <span className="absolute font-bold top-1 left-1 text-primary-200">
          {product_name}
        </span>
      </div>
    </Link>
  );
};
