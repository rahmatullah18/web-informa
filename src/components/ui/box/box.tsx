import React from "react";

type TypeBoxProps = {
  children: React.ReactNode;
  label: string;
};

export const Box = ({ children, label }: TypeBoxProps) => {
  return (
    <div className="space-y-2">
      <h1 className="">{label} :</h1>
      <div className="flex flex-wrap items-center justify-between w-full p-2 overflow-auto border rounded-md shadow-md bg-primary-200">
        {children}
      </div>
    </div>
  );
};
