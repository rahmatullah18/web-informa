type TypePreviewProps = {
  urlImage?: string;
  color?: string;
  stock?: number;
};

export const ProductPreview = ({
  urlImage,
  color,
  stock,
}: TypePreviewProps) => {
  return (
    <div
      className={`relative w-full space-y-5 rounded-md shadow-md h-60 ${color}`}
    >
      <img src={urlImage} alt="black" className="w-full h-full object-fit" />
      <span className="absolute p-1 px-2 rounded-full shadow-md bottom-2 right-2 bg-primary-200">
        Stock: {stock}
      </span>
    </div>
  );
};
