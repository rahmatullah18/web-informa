import React from "react";

import { Cart } from "../../content/cart/cart";
import { Content } from "../content/content";
import { Navbar } from "../navbar/navbar";

type TypeContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: TypeContainerProps) => {
  return (
    <div className="h-full md:flex md:justify-center md:items-center md:h-full ">
      <div
        className="md:bg-white md:shadow-xl md:w-96"
        style={{
          backgroundImage:
            "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
        }}
      >
        <Cart />
        <Navbar />
        <div className="h-full">
          {/* <Sidebar /> */}
          <Content>{children}</Content>
        </div>
      </div>
    </div>
  );
};
