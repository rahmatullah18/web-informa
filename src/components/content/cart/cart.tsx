import { useCart } from "react-use-cart";
import { Modal } from "../../ui/modal/modal";

export const Cart = () => {
  const { isEmpty } = useCart();

  return isEmpty ? <div></div> : <Modal>Cart</Modal>;
};
