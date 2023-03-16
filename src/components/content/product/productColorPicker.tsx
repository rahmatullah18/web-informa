import { Heading } from "../../ui/heading/heading";

type TypeColorProps = {
  colors?: string[];
};

export const ProductColorPicker = ({ colors }: TypeColorProps) => {
  const mapDataColors = colors?.map((color, idx) => {
    return (
      <div
        key={idx}
        className={`w-10 shadow-md h-10 rounded-md ${color}`}
      ></div>
    );
  });
  return (
    <div className="flex flex-wrap items-center justify-between">
      <Heading size="lg">Color :</Heading>
      <div className="flex items-center space-x-2">{mapDataColors}</div>
    </div>
  );
};
