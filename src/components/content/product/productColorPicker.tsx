import { Box } from "../../ui/box/box";
import { useEffect, useState } from "react";

type TypeColorProps = {
  colors?: { id: number; url: string; color: string }[];
  filterUrlImage: (id: number) => void;
  // filterStock: (id: number) => void;
  filterSizes: (id: number) => void;
};

export const ProductColorPicker = ({
  colors,
  filterUrlImage,
  // filterStock,
  filterSizes,
}: TypeColorProps) => {
  const [selected, setSelected] = useState<number>();

  const handleSelected = (id: number) => {
    setSelected(id);
    filterUrlImage(id);
    // filterStock(id);
    filterSizes(id);
  };

  useEffect(() => {
    const findFirstId = colors?.find((item) => item.id);
    setSelected(findFirstId?.id);
  }, [colors]);

  const mapDataColors = colors?.map((color) => {
    return (
      <button
        key={color.id}
        className={`w-10  h-10 rounded-md  ${
          selected === color.id
            ? "border-2 border-tertiary-100 shadow-xl"
            : "border shadow-md"
        } ${color.color}`}
        onClick={() => handleSelected(color.id)}
      ></button>
    );
  });
  return (
    <Box label="Pilih Warna Favorit">
      <div className="flex items-center space-x-2">{mapDataColors}</div>
    </Box>
  );
};
