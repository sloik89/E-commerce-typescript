import React from "react";
import { Filters, PaginateContainer, ProductsContainer } from "../components/";
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from "@/utilis";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const res = await customFetch<ProductsResponse>("products", { params });

  return { ...res.data, params };
};
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginateContainer />
    </>
  );
};

export default Products;
