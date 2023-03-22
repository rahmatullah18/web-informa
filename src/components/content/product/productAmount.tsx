import { Heading } from "../../ui/heading/heading";
import { Input } from "../../ui/input/input";

type TypeProductAmount = {
  amount?: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const ProductAmount = ({ amount, setAmount }: TypeProductAmount) => {
  return (
    <div className="flex items-center justify-between ">
      <Heading size="lg">Amount : </Heading>
      <Input
        className="w-24"
        type="number"
        placeholder="Jumlah"
        value={amount}
        handleOnChange={(e) => setAmount(parseInt(e.target.value))}
      />
    </div>
  );
};
