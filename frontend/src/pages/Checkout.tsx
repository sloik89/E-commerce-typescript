import { useAppSelector } from "@/hooks";
import React from "react";

const Checkout = () => {
  const { user } = useAppSelector((state) => state.userState);
  console.log(user);
  return <div>Checkout</div>;
};

export default Checkout;
