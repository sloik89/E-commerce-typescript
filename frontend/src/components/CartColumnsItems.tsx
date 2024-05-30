import { useAppSelector } from "@/hooks";
import { Button } from "@/components/ui/button";
import { editItem, removeItem } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Mode } from "./SelectProductAmount";
import { formatDollars } from "@/utilis/formatedDollar";
import { SelectProductAmount } from "./";
export const FirstColumn = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="rounded-lg max-w-[250px] md:h-24 md:w-24 "
    />
  );
};
export const SecondColumn = ({
  company,
  title,
  productsColor,
}: {
  company: string;
  title: string;
  productsColor: string;
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="font-bold capitalize text-lg">{title}</p>
      <p>{company}</p>
      <p className="flex items-center gap-x-3">
        Color:
        <span
          style={{ backgroundColor: `${productsColor}` }}
          className="w-5 h-5 rounded-full block"
        ></span>
      </p>
    </div>
  );
};
export const ThirdColumn = ({
  amount,
  cartId,
}: {
  amount: number;
  cartId: string;
}) => {
  const dispatch = useDispatch();
  console.log(cartId);
  const setAmount = (value: number) => {
    dispatch(editItem({ id: cartId, amount: value }));
  };
  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setAmount}
        mode={Mode.CartItem}
      />
      <Button onClick={() => dispatch(removeItem(cartId))} variant="link">
        remove
      </Button>
    </div>
  );
};
export const FourthColumn = ({ price }: { price: string }) => {
  return <p>{formatDollars(price)}</p>;
};
