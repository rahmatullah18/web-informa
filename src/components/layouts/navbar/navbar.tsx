import { Link } from "react-router-dom";
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "react-use-cart";
import { CartContext } from "../../../store/cart/cartContext";

export const Navbar = () => {
  const { cartTotal } = useCart();
  const cartCtx = useContext(CartContext);

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
      <button
        onClick={() => cartCtx.handleShowCart(true)}
        className="relative flex flex-col items-center justify-center p-1 rounded-xl"
      >
        <HiShoppingCart className="w-8 h-8 text-tertiary-100" />
        <span className="absolute top-0 right-0 flex flex-col items-center justify-center w-5 h-5 font-bold rounded-full shadow-md bg-primary-200">
          {cartTotal}
        </span>
      </button>
    </nav>
  );
};
