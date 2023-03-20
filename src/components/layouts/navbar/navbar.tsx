import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "react-use-cart";

export const Navbar = () => {
  const { cartTotal } = useCart();

  return (
    <nav className="flex items-center justify-between h-12 px-2">
      <div className="flex gap-4">
        <Link to="/" className="font-bold text-tertiary-100">
          Home
        </Link>
        <Link className="font-bold text-tertiary-100" to={"/questions"}>
          Informasi
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-center p-1 rounded-xl">
        <HiShoppingCart className="w-10 h-10 text-tertiary-100" />
        <span className="absolute top-0 right-0 flex flex-col items-center justify-center w-5 h-5 font-bold rounded-full shadow-md bg-primary-200">
          {cartTotal}
        </span>
      </div>
    </nav>
  );
};
