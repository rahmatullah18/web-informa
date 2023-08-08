import { createPortal } from "react-dom";

type TypeModalProps = {
  children: React.ReactNode;
  closeModal: (boolean: boolean) => void;
};

type TypeBackDropProps = {
  closeModal: (boolean: boolean) => void;
};

type TypeOverlayProps = {
  children: React.ReactNode;
};

const BackDrop = ({ closeModal }: TypeBackDropProps) => {
  return (
    <div
      onClick={() => closeModal(false)}
      className="fixed inset-0 z-20 opacity-75 bg-tertiary-100"
    ></div>
  );
};

const Overlay = ({ children }: TypeOverlayProps) => {
  return (
    <div className="absolute z-40 w-5/6 p-2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md md:w-96 top-1/2 left-1/2">
      {children}
    </div>
  );
};

const overlay = document.body;
export const Modal = ({ children, closeModal }: TypeModalProps) => {
  return (
    <div>
      {createPortal(<BackDrop closeModal={closeModal} />, overlay)}
      {createPortal(<Overlay children={children} />, overlay)}
    </div>
  );
};
