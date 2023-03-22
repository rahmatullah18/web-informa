import { Box } from "../../ui/box/box";
import { Heading } from "../../ui/heading/heading";
import { useState } from "react";

type TypeColorProps = {
  colors?: { id: number; url: string; color: string }[];
  filterUrlImage: (id: number) => void;
};

export const ProductColorPicker = ({
  colors,
  filterUrlImage,
}: TypeColorProps) => {
  const [selected, setSelected] = useState<string>("");
  const mapDataColors = colors?.map((color, idx) => {
    return (
      <button
        key={color.id}
        className={`w-10 shadow-md h-10 rounded-md border ${color.color}`}
        onClick={() => filterUrlImage(color.id)}
      ></button>
    );
  });
  return (
    <Box>
      <Heading size="lg">Color :</Heading>
      <div className="flex items-center space-x-2">{mapDataColors}</div>
    </Box>
  );
};
