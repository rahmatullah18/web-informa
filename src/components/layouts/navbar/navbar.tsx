import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "react-use-cart";
import { CartContext } from "../../../store/cart/cartContext";
import LogoHome from "../../assets/Home.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const Navbar = () => {
  const { totalUniqueItems } = useCart();
  const cartCtx = useContext(CartContext);
  let { pathname } = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loginUser");
    localStorage.removeItem("user_id");
    navigate("/login-user");
  };

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
      {/* <div
        className="text-lg font-bold text-tertiary-100"
        // to={"/questions"}
      >
        Maelo Shop
      </div> */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => cartCtx.handleShowCart(true)}
          className={`${
            pathname === "/pesanan" && "hidden"
          } relative flex flex-col items-center justify-center p-1 rounded-xl`}
        >
          <HiShoppingCart className="w-8 h-8 text-tertiary-100" />
          <span className="absolute top-0 right-0 flex flex-col items-center justify-center w-5 h-5 font-bold rounded-full shadow-md bg-primary-200">
            {totalUniqueItems}
          </span>
        </button>
        {localStorage.getItem("loginUser") ? (
          <Menu as="div" className="relative z-20 text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                ...
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => navigate("/pesanan")}
                        className={`${
                          active ? "bg-red-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md  px-2 py-2 text-sm`}
                      >
                        Pesanan Saya
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => logout()}
                        className={`${
                          active ? "bg-red-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md text-red-500 px-2 py-2 text-sm`}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <Link className="font-bold" to={"/login-user"}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
