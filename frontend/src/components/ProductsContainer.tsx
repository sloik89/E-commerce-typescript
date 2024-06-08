import { ProductsList, ProductsGrid } from "./";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { type ProductsResponse } from "@/utilis";
import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const ProductsContainer = () => {
  const { numofHists, meta } = useLoaderData() as ProductsResponse;

  const [layout, setLayout] = useState<"grid" | "list">("grid");
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <div>
            <h4>{numofHists} products</h4>
          </div>
          <div className="flex gap-x-5">
            <Button
              onClick={() => setLayout("list")}
              size="sm"
              variant={layout === "list" ? "default" : "ghost"}
            >
              <List />
            </Button>
            <Button
              size="sm"
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "default" : "ghost"}
            >
              <LayoutGrid />
            </Button>
          </div>
        </div>
        <Separator className="mt-5" />
      </section>
      <div>
        {numofHists > 0 ? (
          layout === "grid" ? (
            <ProductsGrid />
          ) : (
            <ProductsList />
          )
        ) : (
          <h4>Sorry, no products matched your search</h4>
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
