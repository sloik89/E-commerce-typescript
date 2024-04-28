import React from "react";
import { SectionTitle, ProductsGrid } from "./";
const FeaturedProducts = () => {
  return (
    <section className="pt-5">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
};

export default FeaturedProducts;
