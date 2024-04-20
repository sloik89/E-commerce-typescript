# Frontend

## Configure redux in typescript

- slice

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  name: "cart slice",
};
const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export default cartSlice.reducer;
```

- configure store

```ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    themeState: themeReducer,
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
```

## hooks

```ts
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Shared Layouts

- Home Layots display Landing

```ts
      {
        index: true,
        element: <Landing />,
      },
```

## Talwind

### custom class

- in index.css

```css
@layer components {
  .align-element {
    @apply mx-auto max-w-6xl px-8;
  }
}
```
