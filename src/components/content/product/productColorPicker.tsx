import { Heading } from "../../ui/heading/heading";

type TypeColorProps = {
  colors?: { id: number; url: string; color: string }[];
  filterUrlImage: (id: number) => void;
};

export const ProductColorPicker = ({
  colors,
  filterUrlImage,
}: TypeColorProps) => {
  const mapDataColors = colors?.map((color, idx) => {
    return (
      <button
        key={color.id}
        className={`w-10 shadow-md h-10 rounded-md ${color.color}`}
        onClick={() => filterUrlImage(color.id)}
      ></button>
    );
  });
  return (
    <div className="flex flex-wrap items-center justify-between">
      <Heading size="lg">Color :</Heading>
      <div className="flex items-center space-x-2">{mapDataColors}</div>
    </div>
  );
};
