import { Link } from "react-router-dom";

type TypeCardProps = {
  urlImge: string;
  product_color?: string;
  product_name: string;
  slug: string;
};

export const Card = ({ urlImge, product_name, slug }: TypeCardProps) => {
  return (
    <Link to={`/product/${slug}`}>
      <div
        className={`relative w-36 flex-shrink-0 h-52 
           rounded-lg overflow-hidden  shadow-md`}
      >
        <img src={urlImge} alt="" className="object-cover w-full h-full" />
        <div className="absolute bottom-0 p-1 leading-3 bg-opacity-40 bg-primary-100">
          <span className="text-xs font-semibold opacity-100 drop-shadow-xl text-primary-200">
            {product_name}
          </span>
        </div>
      </div>
    </Link>
  );
};
