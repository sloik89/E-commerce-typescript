import { customFetch } from "@/utilis";
import { ReduxStore } from "../store";
import { type LoaderFunction, useLoaderData } from "react-router-dom";
import { type OrderResponse } from "@/utilis";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Test } from "../components";
export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<null> => {
    const url = new URL(request.url).searchParams;
    const [x, y] = url.entries();
    console.log(x);
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const res = await customFetch("/orders/showAllMyOrder", { params });

      return res.data;
    } catch (err) {}
    return null;
  };
const TestPage = () => {
  const { order, meta } = useLoaderData() as OrderResponse;
  console.log(order);
  return (
    <div>
      <h4>total orders:{meta.pagination.total}</h4>
      <Table>
        <TableCaption>A list of recent orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order.map((item) => {
            const { userName, address, total, updatedAt, numItemsInCart } =
              item;
            return (
              <TableRow key={item._id}>
                <TableCell>{userName}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{numItemsInCart}</TableCell>
                <TableCell>{total + "$"}</TableCell>
                <TableCell>{new Date(updatedAt).toDateString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Test />
    </div>
  );
};

export default TestPage;
