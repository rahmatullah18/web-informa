import { Fragment } from "react";

type TypeParagraphProps = {
  children: React.ReactNode;
  size: "md" | "lg" | "xl";
};

export const Paragraph = ({ children, size }: TypeParagraphProps) => {
  let paragraph: React.ReactNode;
  switch (size) {
    case "lg":
      paragraph = (
        <p className={`text-3xl font-bold text-secondary-200 capitalize `}>
          {children}
        </p>
      );
      break;
    case "xl":
      paragraph = (
        <p className={`text-5xl font-bold text-secondary-200 capitalize `}>
          {children}
        </p>
      );
      break;
    // md
    default:
      paragraph = (
        <p className={`text-xl font-bold text-secondary-200 capitalize `}>
          {children}
        </p>
      );
      break;
  }
  return <Fragment>{paragraph}</Fragment>;
};
