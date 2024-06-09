import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useAppSelector } from "@/hooks";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
const Cart = () => {
  const { user } = useAppSelector((state) => state.userState);
  const { numItemsInCart } = useAppSelector((state) => state.cartState);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Empty card" />;
  }
  return (
    <>
      <SectionTitle text="Shopping card" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Button asChild>
              <Link to="/checkout">Procced to checkout</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/login">Please login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
