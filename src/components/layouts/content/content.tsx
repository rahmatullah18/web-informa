import React from "react";
import { Footer } from "../footer/footer";
import { useLocation } from "react-router-dom";
type TypeContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: TypeContentProps) => {
  const { pathname } = useLocation();
  return (
    <div className="h-full md:col-span-5 ">
      {children}
      {pathname === "/" && <Footer />}
    </div>
  );
};
