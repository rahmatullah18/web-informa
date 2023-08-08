import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full h-10 px-2 mt-10 bg-white">
      <div className="text-xs">© 2023-Toko Maelo All Rights Reserved.</div>
      <Link className="text-xs" to={"/login"}>
        Admin
      </Link>
    </div>
  );
};
