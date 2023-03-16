import { Heading } from "../../ui/heading/heading";
import { Input } from "../../ui/input/input";

type TypeProductAmount = {
  amount?: number;
};

export const ProductAmount = ({ amount }: TypeProductAmount) => {
  return (
    <div className="flex items-center justify-between ">
      <Heading size="lg">Amount : </Heading>
      <Input className="w-1/2" type="number" placeholder="Masukan Jumlah" />
    </div>
  );
};
