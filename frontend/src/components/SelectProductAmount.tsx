import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}
type ProductAmountProps = {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};
type ProductCartProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => void;
};
const SelectProductAmount = ({
  mode,
  amount,
  setAmount,
}: ProductAmountProps | ProductCartProps) => {
  const cartItem = mode === Mode.CartItem;
  console.log(cartItem);
  return (
    <>
      <h4 className="mb-4">Amount :</h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, idx) => {
            const selectValue = (idx + 1).toString();
            return (
              <SelectItem key={idx} value={selectValue}>
                {selectValue}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectProductAmount;
