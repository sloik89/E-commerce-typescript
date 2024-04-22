import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
import testTheme from "./features/theme/themeTestSlice";
export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    themeTest: testTheme,
    cartState: cartReducer,
    userState: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
