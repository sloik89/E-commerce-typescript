export const formatDollars = (price: string | number): string => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) / 100);
  return dollarsAmount;
};
