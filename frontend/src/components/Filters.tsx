import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { type ProductsResponseWithParams } from "../utilis";
import { Form, useLoaderData, Link } from "react-router-dom";
const Filters = () => {
  const { params } = useLoaderData() as ProductsResponseWithParams;
  console.log(params);
  return (
    <Form className="border border-secondary rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <div className="mb-2">
        <Label htmlFor="search">Search Product</Label>
        <Input id="search" name="search" defaultValue={params.search} />
      </div>
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
    </Form>
  );
};

export default Filters;
