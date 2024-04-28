import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { formatDollars, type ProductsResponse } from "@/utilis";
import { Card, CardContent } from "@/components/ui/card";
const ProductsGrid = () => {
  const { products } = useLoaderData() as ProductsResponse;

  return (
    <div className="pt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => {
        const { price, image, name } = item;
        const dollarAmount = formatDollars(price);

        return (
          <Link key={item._id} to={`/products/${item._id}`}>
            <Card>
              <CardContent>
                <img
                  className="rounded-lg w-full h-64 object-cover"
                  src={image}
                />
                <div className="text-center">
                  <h2 className="font-semibold text-lg capitalize">{name}</h2>
                  <p className="text-primary">{dollarAmount}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
