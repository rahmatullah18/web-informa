import { Link } from "react-router-dom";
import { formatRupiah } from "../../../helpers/formatRupiah";

type TypeCardProps = {
  urlImge: string;
  product_color?: string;
  product_name: string;
  product_price: number;
  slug: string;
};

export const Card = ({
  urlImge,
  product_name,
  product_price,
  slug,
}: TypeCardProps) => {
  return (
    <Link to={`/product/${slug}`}>
      <div
        className={`relative w-36 flex-shrink-0 h-52 
           rounded-lg overflow-hidden  shadow-md`}
      >
        <img src={urlImge} alt="" className="object-cover w-full h-full" />
        <div className="absolute bottom-0 w-full p-1 leading-3 bg-opacity-40 bg-primary-100">
          <div className="space-y-1 font-semibold opacity-100 drop-shadow-xl text-primary-200">
            <span className="leading-5 text-md">{product_name}</span>
            <br />
            <div className="text-xs text-right">
              {formatRupiah(product_price)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
