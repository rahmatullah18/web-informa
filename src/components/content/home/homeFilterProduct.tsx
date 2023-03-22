import React from "react";
import { HiFilter } from "react-icons/hi";

export const HomeFilterProduct = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 font-bold text-white rounded-lg bg-secondary-200">
      <HiFilter /> <span>Filter</span>
    </div>
  );
};
