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

### custom class in talwind

- in index.css

```css
@layer components {
  .align-element {
    @apply mx-auto max-w-6xl px-8;
  }
}
```

### Fetch data using loader

- setting up loader in the App.tsx route

```ts
{
       index: true,
       element: <Landing />,
       errorElement: <ErrorElement />,
       loader: landingLoader,
     },
```

- inport type of loaderFunction

```ts
import { type LoaderFunction } from "react-router-dom";
```

```ts
import { customFetch, type ProductsResponse } from "@/utilis";
```

- create function in the component

```ts
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const res = await customFetch<ProductsResponse>("products");
  console.log(res);
  return { ...res.data };
};
```

# use data in components

```ts
import { useLoaderData } from "react-router-dom";
const { products } = useLoaderData() as ProductsResponse;
```

# Using form data on react router

- get formData
- request is patameter of function

```ts
const formData = await request.formData();
```

- change form data array [[],[]] to object

```ts
const data = Object.fromEntries(formData);
```

- you can't using hooks in function
- pass store in router
- you invoke function here and , need to return function

```ts
 {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginUser(store),
  },
```

- in component

```ts
import { type ReduxStore } from "@/store";
import { ActionFunction } from "react-router-dom";
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const res = await customFetch.post("/auth/login", data);

      // dispatch action from store in fuction
      store.dispatch(loginUser(res.data.user));
      return redirect("/products");
    } catch (err) {
      console.log(err);
    }
    return null;
  };
```

## Action in react router

- by default form has get method
- change to post and we handle form submission by yourself
- post request must be provided aciton
- common aproach to handle action in the same file

```ts
<Form method="POST"></Form>
```

- handle action

```ts
export const action: ActionFunction = async ({ request }): Promise<null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const res = await customFetch.post("/auth/register", data);
    console.log(res);
  } catch (err) {
    const resError =
      err instanceof AxiosError ? err.response?.data.msg : "Register Failed";
    console.log(resError);
    toast({ description: resError });
  }
  console.log(data);
  return null;
};
```
