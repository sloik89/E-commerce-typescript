import { Link, useLoaderData, type LoaderFunction } from "react-router-dom";
import { type ProductsResponse } from "@/utilis";
import { formatDollars } from "@/utilis/formatedDollar";
import { Card, CardContent } from "@/components/ui/card";
const ProductsList = () => {
  const { products } = useLoaderData() as ProductsResponse;
  console.log(products);
  return (
    <div className="mt-12 grid grid-cols-1 gap-y-6">
      {products.map((item, idx) => {
        return (
          <Link key={item._id} to={`${item._id}`}>
            <Card>
              <CardContent className=" p-[2rem] grid grid-cols-3 justify-items-start ">
                <img
                  className="h-[10rem] w-[9rem] object-cover rounded-sm "
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h2 className="text-2xl capitalize font-bold">{item.name}</h2>
                  <h4>{item.company}</h4>
                </div>
                <p className="text-primary justify-self-end font-bold text-lg">
                  {formatDollars(item.price)}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
