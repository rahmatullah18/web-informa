import React, { Fragment } from "react";

type TypeButtonProps = {
  children: React.ReactNode;
  size: "md" | "lg" | "xl";
  type?: "transparent";
};

export const Button = ({ children, size, type }: TypeButtonProps) => {
  let button: React.ReactNode;
  switch (size) {
    case "lg":
      button = (
        <button
          className={` ${
            type === "transparent"
              ? "bg-transparent border border-primary-200 text-primary-200"
              : "bg-secondary-200 text-secondary-100"
          } text-2xl shadow hover:scale-110 transition ease-in-out px-4 py-2 rounded-md font-light  capitalize `}
        >
          {children}
        </button>
      );
      break;
    case "xl":
      button = (
        <button
          className={` ${
            type === "transparent"
              ? "bg-transparent border border-primary-200 text-primary-200"
              : "bg-secondary-200 text-secondary-100"
          } text-xl shadow hover:scale-110 transition ease-in-out px-6 py-3 rounded-md font-light  capitalize `}
        >
          {children}
        </button>
      );
      break;
    default:
      button = (
        <button
          className={` ${
            type === "transparent"
              ? "bg-transparent border border-primary-200 text-primary-200"
              : "bg-secondary-200 text-secondary-100"
          } text-md shadow hover:scale-110 transition ease-in-out px-2 py-1 rounded-md font-light  capitalize `}
        >
          {children}
        </button>
      );
      break;
  }
  return <Fragment>{button}</Fragment>;
};
