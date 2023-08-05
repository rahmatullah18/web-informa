import React from "react";
type TypeContentProps = {
  children: React.ReactNode;
};

export const ContentAdmin = ({ children }: TypeContentProps) => {
  return <div className="h-full md:col-span-5 ">{children}</div>;
};
