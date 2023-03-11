type TypeInputText = {
  type?: string;
  className?: string;
  placeholder: string;
  value?: string;
  handleOnChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({
  type,
  className,
  placeholder,
  value,
  handleOnChange,
}: TypeInputText) => {
  return (
    <input
      type={type === "number" ? "number" : "text"}
      className={`${className} rounded-md px-2 py-2 text-lg outline-none focus:ring ring-secondary-100  shadow-md`}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};
