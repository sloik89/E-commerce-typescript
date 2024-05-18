import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { FormInput, FormSelect, FormRange, FormChecbox } from "../components";

import { type ProductsResponseWithParams } from "../utilis";
import { Form, useLoaderData, Link } from "react-router-dom";
const Filters = () => {
  const { params, meta } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, order, price, shipping } = params;

  return (
    <Form className="border border-secondary rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* search */}
      <FormInput
        label="search product"
        type="text"
        name="search"
        defaultValue={search}
      />
      {/* category */}
      <FormSelect
        label="select category"
        name="category"
        defaultValue={category}
        options={meta.categories}
      />
      {/* company */}
      <FormSelect
        label="select company"
        name="company"
        defaultValue={company}
        options={meta.companies}
      />
      {/* order */}
      <FormSelect
        label="order by"
        name="order"
        defaultValue={order}
        options={["a-z", "z-a", "high", "low"]}
      />
      <FormRange label="price" name="price" defaultValue={price} />
      <FormChecbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">reset</Link>
      </Button>
      <Link to="/testpage">test</Link>
    </Form>
  );
};

export default Filters;
