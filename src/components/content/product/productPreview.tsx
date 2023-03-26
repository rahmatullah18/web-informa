type TypePreviewProps = {
  urlImage?: string;
  color?: string;
  stock?: number;
};

export const ProductPreview = ({ urlImage, color }: TypePreviewProps) => {
  return (
    <div
      className={`relative w-full space-y-5 rounded-md shadow-md h-60 ${color}`}
    >
      <img src={urlImage} alt="black" className="w-full h-full object-fit" />
    </div>
  );
};
