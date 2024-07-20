import { toast } from "@/components/ui/use-toast";
import { ReduxStore } from "../store";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { customFetch, formatDollars } from "@/utilis";

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
import { OrderList, SectionTitle, ComplexPagination } from "../components";
export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrderResponse | null | Response> => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const res = await customFetch.get<OrderResponse>(
        "/orders/showAllMyOrder",
        { params }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
    return null;
  };
const Orders = () => {
  const { meta, order } = useLoaderData() as OrderResponse;

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
      <ComplexPagination />
    </div>
  );
};

export default Orders;
