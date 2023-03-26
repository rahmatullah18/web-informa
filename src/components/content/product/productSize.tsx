import { Box } from "../../ui/box/box";

type TypeSizes = {
  size: string;
  stock: number;
};

type TypeProductSize = {
  sizes?: TypeSizes[];
  filterSize: (number: string | undefined) => void;
  filterStock: (stock: number) => void;
  handleSelectedSize: (size: string) => void;
  selectedSize: string | undefined;
};

export const ProductSize = ({
  sizes,
  filterSize,
  filterStock,
  handleSelectedSize,
  selectedSize,
}: TypeProductSize) => {
  const mapDataSizes = sizes?.map((size, idx) => {
    return (
      <button
        onClick={() => handleSelected(size.size, size.stock)}
        key={idx}
        className={`flex items-center justify-center  border-2 rounded-md flex-col space-y-1 p-2 ${
          selectedSize === size.size
            ? "border-tertiary-100 shadow-xl scale-110"
            : "border-secondary-200 shadow-md text-secondary-200"
        }`}
      >
        <h1>{size.size}</h1>
        <h2 className="text-xs">(Stok : {size.stock})</h2>
      </button>
    );
  });

  const handleSelected = (size: string, stock: number) => {
    filterSize(size);
    handleSelectedSize(size);
    filterStock(stock);
  };
  return (
    <Box label="Pilih Ukuran">
      <div className={`flex items-center space-x-2`}>{mapDataSizes}</div>
    </Box>
  );
};
