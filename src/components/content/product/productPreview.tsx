type TypePreviewProps = {
  urlImage?: string;
  color?: string;
  stock?: number;
};

export const ProductPreview = ({ urlImage, color }: TypePreviewProps) => {
  return (
    <div
      className={`relative w-full space-y-5 rounded-lg overflow-hidden shadow-md h-[32rem] ${color}`}
    >
      <img
        src={urlImage ? urlImage : process.env.REACT_APP_IMAGE_NOT_FOUND_URL}
        alt="black"
        className="w-full h-full object-fit"
      />
    </div>
  );
};
