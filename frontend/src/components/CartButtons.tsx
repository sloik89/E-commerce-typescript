import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
const CartButtons = () => {
  const numItemsCart = 3;
  return (
    <Button
      className="flex justify-center items-center relative"
      asChild
      variant="outline"
    >
      <Link to="/cart">
        <span className="absolute -top-3 -right-3 bg-primary rounded-full text-white h-6 w-6 flex items-center justify-center">
          {numItemsCart}
        </span>
        <ShoppingCart />
      </Link>
    </Button>
  );
};

export default CartButtons;
