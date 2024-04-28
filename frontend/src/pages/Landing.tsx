import React from "react";
import { Hero, FeaturedProducts } from "@/components";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "@/utilis";
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(
    "/products?featured=true"
  );

  return { ...response.data };
};
const Landing = () => {
  const result = useLoaderData() as ProductsResponse;

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
