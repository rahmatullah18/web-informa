import { createPortal } from "react-dom";

type TypeModalProps = {
  children: React.ReactNode;
};

const BackDrop = () => {
  return <div className="fixed inset-0 z-20 opacity-75 bg-tertiary-100"></div>;
};

const Overlay = ({ children }: TypeModalProps) => {
  return (
    <div className="absolute z-40 w-5/6 p-2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md top-1/2 left-1/2">
      {children}
    </div>
  );
};

const overlay = document.body;
export const Modal = ({ children }: TypeModalProps) => {
  return (
    <div>
      {createPortal(<BackDrop />, overlay)}
      {createPortal(<Overlay children={children} />, overlay)}
    </div>
  );
};
