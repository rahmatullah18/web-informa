import { createContext } from "react";

export const CartContext = createContext({
  showCart: false,
  handleShowCart: (boolean: boolean) => {},
});
