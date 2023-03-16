import { Heading } from "../../ui/heading/heading";

type TypeProductSize = {
  sizes?: string[];
};

export const ProductSize = ({ sizes }: TypeProductSize) => {
  const mapDataSizes = sizes?.map((size, idx) => {
    return (
      <div
        key={idx}
        className="flex items-center justify-center w-10 h-10 border-2 rounded-md shadow-md border-secondary-200"
      >
        <Heading size="md">{size}</Heading>
      </div>
    );
  });
  return (
    <div className="flex items-center justify-between">
      <Heading size="lg">Size :</Heading>
      <div className="flex items-center space-x-2">{mapDataSizes}</div>
    </div>
  );
};
