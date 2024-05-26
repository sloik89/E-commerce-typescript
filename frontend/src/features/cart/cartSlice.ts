import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/use-toast";
import { type CartItem, type CartState } from "@/utilis";
const initialState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : initialState;
};
const cartSlice = createSlice({
  name: "user",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      console.log(newCartItem);
      const item = state.cartItems.find((i) => i.id === newCartItem.id);
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount;
      // invoke function in another reducers
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Item added to cart" });
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      // new state value if we return
      return initialState;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((i) => i.id === itemId);
      if (!cartItem) return;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.numItemsInCart -= cartItem.amount;
      state.cartTotal -= Number(cartItem.price) * cartItem.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Item removed from the cart" });
    },
    editItem: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const { id: itemId, amount } = action.payload;
      const cartItem = state.cartItems.find((i) => i.id === itemId);
      if (!cartItem) return;
      state.numItemsInCart += amount - cartItem.amount;
      cartSlice.caseReducers.calculateTotals(state);
      state.cartTotal += Number(cartItem.price) * (amount - cartItem.amount);
      cartItem.amount = amount;
      toast({ description: "Item edited" });
    },
    calculateTotals: (state) => {
      state.tax = 0.19 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { addItem, clearCart, calculateTotals, removeItem, editItem } =
  cartSlice.actions;
export default cartSlice.reducer;
