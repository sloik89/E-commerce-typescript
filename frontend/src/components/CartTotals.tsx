import { useAppSelector } from "@/hooks";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDollars } from "@/utilis";
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cartState
  );

  return (
    <Card className="p-8 bg-muted flex flex-col gap-y-4">
      <CartTotalRow label="Subtotal" amount={cartTotal} />
      <CartTotalRow label="Shipping" amount={shipping} />
      <CartTotalRow label="Tax" amount={tax} />
      <CardTitle className="mt-8 ">
        <CartTotalRow label="Order total" amount={orderTotal} lastRow />
      </CardTitle>
    </Card>
  );
};
function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="text-lg">{formatDollars(amount)}</span>
      </p>
      {lastRow ? null : <Separator />}
    </>
  );
}
export default CartTotals;
