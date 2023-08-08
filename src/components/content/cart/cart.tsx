import { useContext } from "react";
import { Modal } from "../../ui/modal/modal";
import { CartContext } from "../../../store/cart/cartContext";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { formatRupiah } from "../../../helpers/formatRupiah";

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  const { items, removeItem, cartTotal, updateItemQuantity } = useCart();
  const navigate = useNavigate();

  const redirectToProduct = (slug: string) => {
    cartCtx.handleShowCart(false);
    navigate(`/product/${slug}`);
  };

  const redirectToHome = () => {
    cartCtx.handleShowCart(false);
    navigate(`/`);
  };

  const redirectToCheckout = () => {
    cartCtx.handleShowCart(false);
    navigate(`/checkout`);
  };

  return cartCtx.showCart ? (
    <Modal closeModal={cartCtx.handleShowCart}>
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">Keranjang</span>
          <span
            onClick={() => cartCtx.handleShowCart(false)}
            className="text-lg font-bold text-red-500 cursor-pointer"
          >
            X
          </span>
        </div>
        {items.length < 1 ? (
          <div>Keranjang masih kosong</div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-center space-x-2 rounded-md hover:bg-gray-200"
                >
                  <div
                    className={`relative w-20 space-y-5 rounded-lg overflow-hidden shadow-md h-32`}
                  >
                    <img
                      src={`${process.env.REACT_APP_IMAGE_URL}/${item.product_url}`}
                      alt="black"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="flex flex-col w-full space-y-2 ">
                    <div className="text-xs">{item.product_name}</div>
                    <div className="text-xs">
                      <span className="font-semibold">Harga: </span>
                      {formatRupiah(item.price)}
                    </div>
                    <div className="text-xs">
                      {/* <span className="mr-2 font-semibold">Jumlah: </span> */}
                      <span className="space-x-2">
                        <button
                          className="text-lg"
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              item.quantity !== undefined
                                ? item.quantity - 1
                                : 1
                            )
                          }
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          className="text-lg"
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              item.quantity !== undefined
                                ? item.quantity + 1
                                : 1
                            )
                          }
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => redirectToProduct(item.product_slug)}
                        className="p-1 mt-2 text-xs text-white rounded-sm bg-secondary-200"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 mt-2 text-xs text-white bg-red-500 rounded-sm"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end">
              Total : {formatRupiah(cartTotal)}{" "}
            </div>
            <hr className="border border-gray-500" />
            <div className="flex justify-between space-x-2">
              <button
                onClick={() => redirectToHome()}
                className="text-secondary-200"
              >
                Belanja lagi
              </button>
              <button
                className="text-red-500"
                onClick={() => redirectToCheckout()}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  ) : (
    <div></div>
  );
};
