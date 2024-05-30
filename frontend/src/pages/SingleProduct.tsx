import { useState } from "react";
import { useLoaderData, Link, type LoaderFunction } from "react-router-dom";
import { type Products as SingleProduct } from "../utilis/";
import { customFetch, formatDollars } from "@/utilis";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectProductAmount, SelectProductColor, Test } from "@/components/";
import { addItem } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/hooks";
import { Mode } from "../components/SelectProductAmount";
export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<SingleProduct> => {
  const searchParams = new URL(request.url).pathname.split("/")[2];
  const res = await customFetch<SingleProduct>(`products/${params.id}`);
  console.log(params);
  return res.data;
};
const SingleProduct = () => {
  const dispatch = useAppDispatch();
  const {
    category,
    colors,
    company,
    image,
    name,
    description,
    price,
    inventory,
    _id: id,
  } = useLoaderData() as SingleProduct;

  const dollarAmount = formatDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const [active, setActive] = useState(colors[0]);
  const handleBag = () => {
    console.log("handle bag");

    dispatch(
      addItem({
        id: id + active,
        title: name,
        price: price.toString(),
        amount,
        productColor: active,
        company,
        image,
      })
    );
  };
  return (
    <section>
      <div className="h-8 flex">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size="sm">
          <Link to="/products">Product</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-6 items-center md:flex-row md:items-start md:gap-x-9">
        <img
          className="w-96 h-96 object-cover rounded-lg"
          src={image}
          alt={name}
        />
        <div className="flex flex-col items-start">
          <h1 className="capitalize font-bold text-2xl ">{name}</h1>
          <h4 className="capitalize tracking-wide text-lg mb-4 font-semibold">
            {company}
          </h4>
          <p className="mb-3 font-bold bg-secondary p-2">{dollarAmount}</p>
          <p className="max-w-[500px] leading-8 mb-4">{description}</p>
          {/* colors */}
          <SelectProductColor
            colors={colors}
            active={active}
            handleActive={setActive}
          />
          <SelectProductAmount
            mode={Mode.SingleProduct}
            amount={amount}
            setAmount={setAmount}
          />
          <Button onClick={handleBag} size="lg">
            Add to bag
          </Button>
        </div>
      </div>
      <Test />
    </section>
  );
};

export default SingleProduct;
