import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div>
      Cart
      <Link className="text-red-900 text-7xl" to="/">
        back home
      </Link>
      <Button asChild size="lg">
        <Link to="/">back home</Link>
      </Button>
    </div>
  );
};

export default Cart;
