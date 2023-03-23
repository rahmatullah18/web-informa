import { Box } from "../../ui/box/box";

import { useEffect, useState } from "react";

type TypeProductSize = {
  sizes?: string[];
  filterSize: (number: string) => void;
};

export const ProductSize = ({ sizes, filterSize }: TypeProductSize) => {
  const [selected, setSelected] = useState<string | undefined>("");

  const mapDataSizes = sizes?.map((size, idx) => {
    return (
      <button
        onClick={() => handleSelected(size)}
        key={idx}
        className={`flex items-center justify-center w-10 h-10 border-2 rounded-md  ${
          selected === size
            ? "border-tertiary-100 shadow-xl"
            : "border-secondary-200 shadow-md text-secondary-200"
        }`}
      >
        <h1>{size}</h1>
      </button>
    );
  });

  const handleSelected = (size: string) => {
    filterSize(size);
    setSelected(size);
  };

  useEffect(() => {
    const findFirstSize = sizes?.find((item) => item);
    setSelected(findFirstSize);
  }, [sizes]);
  return (
    <Box label="Pilih Ukuran">
      <div className={`flex items-center space-x-2`}>{mapDataSizes}</div>
    </Box>
  );
};
