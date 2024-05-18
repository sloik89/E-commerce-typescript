import React from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { type Products as SingleProduct } from "../utilis/";
import { customFetch } from "@/utilis";
export const loader: LoaderFunction = async ({
  request,
}): Promise<SingleProduct> => {
  const searchParams = new URL(request.url).pathname.split("/")[2];
  const res = await customFetch<SingleProduct>(`products/${searchParams}`);
  console.log(res);
  return res.data;
};
const SingleProduct = () => {
  const { category } = useLoaderData() as SingleProduct;
  console.log(category);
  return <div>SingleProduct</div>;
};

export default SingleProduct;
