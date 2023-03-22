import { Box } from "../../ui/box/box";
import { Heading } from "../../ui/heading/heading";

type TypeProductSize = {
  sizes?: string[];
  filterSize: (number: string) => void;
};

export const ProductSize = ({ sizes, filterSize }: TypeProductSize) => {
  const mapDataSizes = sizes?.map((size, idx) => {
    return (
      <button
        onClick={() => filterSize(size)}
        key={idx}
        className="flex items-center justify-center w-10 h-10 border-2 rounded-md shadow-md border-secondary-200"
      >
        <Heading size="md">{size}</Heading>
      </button>
    );
  });
  return (
    <Box>
      <Heading size="lg">Size :</Heading>
      <div className="flex items-center space-x-2">{mapDataSizes}</div>
    </Box>
  );
};
