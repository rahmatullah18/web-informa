import { useEffect } from "react";
import { Box } from "../../ui/box/box";
import { Heading } from "../../ui/heading/heading";
import { Input } from "../../ui/input/input";

type TypeProductAmount = {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
};

export const ProductAmount = ({
  amount,
  setAmount,
  stock,
}: TypeProductAmount) => {
  useEffect(() => {
    if (amount < 1 || null || NaN) {
      setAmount(1);
    }
  }, [amount, setAmount]);

  return (
    <Box label="Masukan Jumlah Beli">
      <Heading size="md">Jumlah : </Heading>
      <Input
        className={`w-24 ${stock > 0 ? "" : "bg-gray-300"}`}
        type="number"
        placeholder="Jumlah"
        value={amount}
        handleOnChange={(e) => setAmount(parseInt(e.target.value))}
        disable={stock > 0 ? false : true}
      />
    </Box>
  );
};
