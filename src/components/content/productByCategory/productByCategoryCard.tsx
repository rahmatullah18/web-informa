import { Link } from "react-router-dom";
import { TypeDataFetchCategory } from "../../../data/typeDataFetchCategory";

export const ProductByCategoryCard = ({
  prduct_image,
  product_slug,
  product_title,
  product_price,
}: TypeDataFetchCategory) => {
  return (
    <Link to={`/product/${product_slug}`}>
      <div
        className={`relative w-full flex-shrink-0 h-52 
        rounded-lg overflow-hidden  shadow-md`}
      >
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}/${prduct_image}`}
          alt=""
          className="object-cover w-full h-full "
        />
        <div className="absolute bottom-0 flex flex-col p-1 space-y-1 leading-3 bg-opacity-40 bg-primary-100">
          <span className="text-xs font-semibold opacity-100 drop-shadow-xl text-primary-200">
            {product_title}
          </span>

          <span className="font-semibold opacity-100 ext-xs drop-shadow-xl text-primary-200">
            {product_price}
          </span>
        </div>
      </div>
    </Link>
  );
};
