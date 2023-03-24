import { Box } from "../../ui/box/box";

import { useEffect, useState } from "react";

type TypeSizes = {
  size: string;
  stock: number;
};

type TypeProductSize = {
  sizes?: TypeSizes[];
  filterSize: (number: string) => void;
  filterStock: (stock: number) => void;
};

export const ProductSize = ({
  sizes,
  filterSize,
  filterStock,
}: TypeProductSize) => {
  const [selected, setSelected] = useState<string | undefined>("");

  const mapDataSizes = sizes?.map((size, idx) => {
    return (
      <button
        onClick={() => handleSelected(size.size, size.stock)}
        key={idx}
        className={`flex items-center justify-center w-10 h-10 border-2 rounded-md  ${
          selected === size.size
            ? "border-tertiary-100 shadow-xl"
            : "border-secondary-200 shadow-md text-secondary-200"
        }`}
      >
        <h1>{size.size}</h1>
      </button>
    );
  });

  const handleSelected = (size: string, stock: number) => {
    filterSize(size);
    setSelected(size);
    filterStock(stock);
  };

  useEffect(() => {
    const findFirstSize = sizes?.find((item) => item.size);

    // setSelected(findFirstSize);
  }, [sizes]);
  return (
    <Box label="Pilih Ukuran">
      <div className={`flex items-center space-x-2`}>{mapDataSizes}</div>
    </Box>
  );
};
