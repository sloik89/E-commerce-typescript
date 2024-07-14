import { ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { toast } from "@/components/ui/use-toast";
import { ReduxStore } from "../store";
import { type Checkout } from "@/utilis/types";
import { customFetch, formatDollars } from "@/utilis";
import { clearCart } from "@/features/cart/cartSlice";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if (!name || !address) {
      toast({ description: "Please fill out all fields " });
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login" });
      return redirect("/login");
    }

    const { cartItems, orderTotal, numItemsInCart, tax, shipping } =
      store.getState().cartState;
    console.log(tax);
    const info: Checkout = {
      name,
      address,
      numItemsInCart,
      cartItems,
      orderTotal: formatDollars(orderTotal),
      tax: formatDollars(tax),
      shipping,
    };
    try {
      const res = await customFetch.post("/orders", info);
      console.log(res);
      toast({ description: "Order Placed" });
      store.dispatch(clearCart());
      return redirect("/orders");
    } catch (err) {
      toast({ description: "order failed" });
      return null;
    }
    return null;
  };
const CheckoutForm = () => {
  return (
    <Form method="post">
      <h4>Shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <SubmitBtn text="Place your order" />
    </Form>
  );
};

export default CheckoutForm;
