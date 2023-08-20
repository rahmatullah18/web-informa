import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "react-use-cart";
import { CartContext } from "../../../store/cart/cartContext";
import LogoHome from "../../assets/Home.png";

export const Navbar = () => {
  const { totalUniqueItems } = useCart();
  const cartCtx = useContext(CartContext);
  let { pathname } = useLocation();

  return (
    <nav
      className={`${
        pathname === "/checkout" && "hidden"
      } flex items-center justify-between h-12 px-2`}
    >
      <div className="flex items-center gap-4">
        <Link to="/" className="text-lg font-bold text-tertiary-100">
          <img src={LogoHome} className="w-8 h-8" alt="logoHome" />
        </Link>
      </div>
      <div
        className="text-lg font-bold text-tertiary-100"
        // to={"/questions"}
      >
        Maelo Shop
      </div>
      <button
        onClick={() => cartCtx.handleShowCart(true)}
        className="relative flex flex-col items-center justify-center p-1 rounded-xl"
      >
        <HiShoppingCart className="w-8 h-8 text-tertiary-100" />
        <span className="absolute top-0 right-0 flex flex-col items-center justify-center w-5 h-5 font-bold rounded-full shadow-md bg-primary-200">
          {totalUniqueItems}
        </span>
      </button>
    </nav>
  );
};
