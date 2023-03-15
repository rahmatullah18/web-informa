import React from "react";
type TypeContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: TypeContentProps) => {
  return <div className="h-full md:col-span-5 bg-primary-200">{children}</div>;
};
