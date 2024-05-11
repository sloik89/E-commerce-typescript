export type ProductsResponse = {
  products: Products[];
  totalProducts: number;
};
type Products = {
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
  shippieng?: string;
  page?: number;
};
export type ProductsResponseWithParams = ProductsResponse & { params: Params };
