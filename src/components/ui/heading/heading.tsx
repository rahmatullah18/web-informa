import React, { Fragment } from "react";

type TypeHeadingProps = {
  size: "md" | "lg" | "xl";
  children: React.ReactNode;
};
export const Heading = ({ size, children }: TypeHeadingProps) => {
  let heading: React.ReactNode;
  switch (size) {
    case "lg":
      heading = (
        <div className={`text-3xl font-bold text-secondary-200 capitalize `}>
          {children}
        </div>
      );
      break;
    case "xl":
      heading = (
        <div className={`text-5xl font-bold text-secondary-200 capitalize `}>
          {children}
        </div>
      );
      break;
    // md
    default:
      heading = (
        <div className={`text-xl font-bold text-secondary-200 capitalize `}>
          {children}
        </div>
      );
      break;
  }
  return <Fragment>{heading}</Fragment>;
};
