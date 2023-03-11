import { Fragment } from "react";

type TypeParagraphProps = {
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
};

export const Paragraph = ({ children, size }: TypeParagraphProps) => {
  let paragraph: React.ReactNode;
  switch (size) {
    case "lg":
      paragraph = (
        <p className={`text-lg  text-primary-200 font-light `}>{children}</p>
      );
      break;
    case "md":
      paragraph = (
        <p className={`text-md  text-primary-200  font-light`}>{children}</p>
      );
      break;
    // md
    default:
      paragraph = (
        <p className={`text-sm  text-primary-200  font-light`}>{children}</p>
      );
      break;
  }
  return <Fragment>{paragraph}</Fragment>;
};
