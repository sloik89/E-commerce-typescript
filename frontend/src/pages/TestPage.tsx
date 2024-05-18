import React from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch } from "@/utilis";
import { type ProductsResponse } from "@/utilis";
import { Filters } from "../components";
export const loader: LoaderFunction = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const ress = await customFetch("products");
  console.log(params);
  return { ...ress.data, params };
};
const TestPage = () => {
  const { products } = useLoaderData() as ProductsResponse;

  return (
    <div>
      TestPage
      <Filters />
    </div>
  );
};

export default TestPage;
