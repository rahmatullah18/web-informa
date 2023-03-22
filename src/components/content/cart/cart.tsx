import { useContext } from "react";
import { Modal } from "../../ui/modal/modal";
import { CartContext } from "../../../store/cart/cartContext";

export const Cart = () => {
  const cartCtx = useContext(CartContext);

  return cartCtx.showCart ? (
    <Modal closeModal={cartCtx.handleShowCart}>
      <div className="relative">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores,
        et harum reprehenderit deleniti facere recusandae natus vitae aliquid
        omnis temporibus provident doloribus modi aspernatur voluptatem impedit
        nesciunt eos porro?
      </div>
    </Modal>
  ) : (
    <div></div>
  );
};
