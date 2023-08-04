type TypeInputText = {
  type?: string;
  className?: string;
  placeholder: string;
  value?: number;
  handleOnChange?: React.ChangeEventHandler<HTMLInputElement>;
  disable?: boolean;
};

export const Input = ({
  type,
  className,
  placeholder,
  value,
  handleOnChange,
  disable,
}: TypeInputText) => {
  return (
    <input
      type={type === "number" ? "number" : "text"}
      className={`${className} rounded-md px-2 py-1 border-2 border-secondary-200 text-lg outline-none focus:ring ring-secondary-100  shadow-md font-bold`}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      min={"1"}
      required
      disabled={disable ? true : false}
    />
  );
};
