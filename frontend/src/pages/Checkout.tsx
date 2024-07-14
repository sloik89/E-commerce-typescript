import { useAppSelector } from "@/hooks";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { toast } from "@/components/ui/use-toast";
import { LoaderFunction, redirect } from "react-router-dom";
import { type ReduxStore } from "@/store";
export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<null | Response> => {
    const user = store.getState().userState.user;

    if (!user) {
      return redirect("/login");
    }
    return null;
  };
const Checkout = () => {
  const { user } = useAppSelector((state) => state.userState);
  const { cartTotal } = useAppSelector((state) => state.cartState);

  if (cartTotal === 0) {
    return <SectionTitle text="You cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
