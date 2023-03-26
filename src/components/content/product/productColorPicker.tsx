import { Box } from "../../ui/box/box";
import { useState } from "react";

type TypeColorProps = {
  colors?: { id: number; url: string; color: string }[];
  filterUrlImage: (url: string) => void;
  filterSizes: (id: number) => void;
  filterColor: (color: string) => void;
};

export const ProductColorPicker = ({
  colors,
  filterUrlImage,
  filterColor,
  filterSizes,
}: TypeColorProps) => {
  const [selected, setSelected] = useState<number>();

  const handleSelected = (id: number, url: string, color: string) => {
    setSelected(id);
    filterUrlImage(url);
    filterSizes(id);
    filterColor(color);
  };

  const mapDataColors = colors?.map((color) => {
    return (
      <button
        key={color.id}
        className={`w-10  h-10 rounded-md  ${
          selected === color.id
            ? "border-2 border-tertiary-100 shadow-xl scale-110"
            : "border shadow-md"
        } ${color.color}`}
        onClick={() => handleSelected(color.id, color.url, color.color)}
      ></button>
    );
  });
  return (
    <Box label="Pilih Warna Favorit">
      <div className="flex items-center space-x-2">{mapDataColors}</div>
    </Box>
  );
};
