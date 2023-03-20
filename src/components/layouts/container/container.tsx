import React from "react";
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
      <Cart />
      <Navbar />
      <div className="h-full md:grid md:grid-cols-6">
        <Sidebar />
        <Content>{children}</Content>
      </div>
    </div>
  );
};
