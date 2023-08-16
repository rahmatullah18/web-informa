import { Box } from "../../ui/box/box";
import { useState } from "react";

type TypeColor = {
  id: number;
  type_product_color: string;
  type_product_size: string;
  type_product_stock: number;
  type_product_url: string;
};

type TypeColorProps = {
  colors: TypeColor[];
  filterColor: (color: string, stock: number) => void;
};

export const ProductColorPicker = ({ colors, filterColor }: TypeColorProps) => {
  const [selected, setSelected] = useState<number>();
  console.log(colors);

  const handleSelectedColor = (id: number, color: string, stock: number) => {
    filterColor(color, stock);
    setSelected(id);
  };

  const mapDataColors = colors?.map((color) => {
    return (
      <button
        key={color.id}
        className={`p-1   rounded-md flex flex-col ${
          selected === color.id
            ? "border-2 border-tertiary-100 shadow-xl scale-110"
            : "border shadow-md"
        } bg-[${color.type_product_color}]`}
        onClick={() =>
          handleSelectedColor(
            color.id,
            color.type_product_color,
            color.type_product_stock
          )
        }
      >
        <span>{color.type_product_color}</span>
        <span className="text-xs text-gray-500">
          {" "}
          Stok: {color.type_product_stock}
        </span>
      </button>
    );
  });
  return (
    <Box label="Pilih Warna yang Tersedia">
      <div className="flex items-center space-x-2">{mapDataColors}</div>
    </Box>
  );
};
