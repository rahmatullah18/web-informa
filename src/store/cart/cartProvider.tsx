import { useState } from "react";
import { CartContext } from "./cartContext";

type TypeCartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: TypeCartProviderProps) => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = (boolean: boolean) => {
    setShowCart(boolean);
  };

  const cartContext = {
    showCart: showCart,
    handleShowCart: handleShowCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
