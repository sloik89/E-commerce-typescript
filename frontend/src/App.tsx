import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  Error,
  About,
  Register,
  Login,
  Checkout,
  Cart,
  Orders,
  HomeLayout,
  Products,
  Product,
  TestPage,
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as testLoader } from "./pages/TestPage";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";
import { action as registerUser } from "@/pages/Register";
import { action as loginUser } from "@/pages/Login";
import { action as checkoutAction } from "@/components/CheckoutForm";
import { store } from "./store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      // test page

      {
        path: "products/:id",
        element: <Product />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
        // action and loader
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: "testpage",
        element: <TestPage />,
        loader: testLoader(store),
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginUser(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerUser,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
