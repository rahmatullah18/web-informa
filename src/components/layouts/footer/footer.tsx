import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-white h-10 mt-10 w-full flex justify-between items-center px-2">
      <div className="text-xs">© 2023-Toko Maelo All Rights Reserved.</div>
      <Link className="text-xs" to={"/login"}>
        Login
      </Link>
    </div>
  );
};
