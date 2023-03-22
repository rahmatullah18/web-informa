import React from "react";

type TypeBoxProps = {
  children: React.ReactNode;
};

export const Box = ({ children }: TypeBoxProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between p-2 rounded-md shadow-md bg-primary-200">
      {children}
    </div>
  );
};
