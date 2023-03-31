import { Fragment } from "react";

type TypeParagraphProps = {
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
  className?: string;
};

export const Paragraph = ({
  children,
  size,
  className,
}: TypeParagraphProps) => {
  let paragraph: React.ReactNode;
  switch (size) {
    case "lg":
      paragraph = (
        <p className={`${className} text-lg  text-primary-200 font-light `}>
          {children}
        </p>
      );
      break;
    case "md":
      paragraph = (
        <p className={`${className} text-md  text-primary-200  font-light`}>
          {children}
        </p>
      );
      break;
    // md
    default:
      paragraph = (
        <p className={`${className} text-sm  text-primary-200  font-light`}>
          {children}
        </p>
      );
      break;
  }
  return <Fragment>{paragraph}</Fragment>;
};
