import React from "react";
import { Filters, PaginateContainer, ProductsContainer } from "../components/";
import { customFetch, type ProductsResponse } from "@/utilis";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const res = await customFetch<ProductsResponse>("products");
  console.log(res);
  return { ...res.data };
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
