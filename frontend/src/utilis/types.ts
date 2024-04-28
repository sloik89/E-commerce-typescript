export type ProductsResponse = {
  products: Products[];
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
