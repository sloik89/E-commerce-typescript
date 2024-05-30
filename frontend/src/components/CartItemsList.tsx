import { useAppSelector } from "@/hooks";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
} from "./CartColumnsItems";
const CartItemsList = () => {
  const { cartItems } = useAppSelector((state) => state.cartState);
  console.log(cartItems);
  return (
    <div className="flex flex-col gap-6">
      {cartItems.map((item) => {
        console.log(item);
        const { image, title, company, productColor, id, amount, price } = item;
        return (
          <Card
            key={item.id}
            className="md:flex md:flex-row justify-between sm:flex-col flex flex-col gap-y-4 items-center"
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productsColor={productColor}
            />
            <ThirdColumn amount={amount} cartId={id} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};

export default CartItemsList;
