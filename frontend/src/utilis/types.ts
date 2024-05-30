export type ProductsResponse = {
  products: Products[];
  totalProducts: number;
  numofHists: number;
  meta: MetaResponse;
};
type MetaResponse = {
  categories: string[];
  companies: string[];
  pagination: {
    page: number;
    pages: number;
  };
};
export type Products = {
  _id: string;
  averageRating: number;
  category: string;
  colors: string[];
  company: string;
  price: number;
  createdAt: string;
  description: string;
  featured: boolean;
  freeShipping: boolean;
  image: string;
  inventory: number;
  name: string;
};
export type Params = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  price?: string;
  shipping?: string;
  page?: number;
};
export type CartItem = {
  id: string;
  title: string;
  price: string;
  amount: number;
  productColor: string;
  company: string;
  image: string;
};
export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
export type ProductsResponseWithParams = ProductsResponse & { params: Params };
