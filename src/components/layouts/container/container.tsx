import React from "react";
import { CartProvider } from "../../../store/cart/cartProvider";
import { Cart } from "../../content/cart/cart";
import { Content } from "../content/content";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";

type TypeContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: TypeContainerProps) => {
  return (
    <div className="h-screen">
      <CartProvider>
        <Cart />
        <Navbar />
        <div className="h-full md:grid md:grid-cols-6">
          <Sidebar />
          <Content>{children}</Content>
        </div>
      </CartProvider>
    </div>
  );
};
