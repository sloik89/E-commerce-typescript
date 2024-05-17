import { types } from "util";

type ConstructUrlParams = {
  pageNumber: number;
  search: string;
  pathname: string;
};
export const constructUrl = ({
  pageNumber,
  search,
  pathname,
}: ConstructUrlParams): string => {
  console.log(pageNumber, search, pathname);
  return `/products?page=${pageNumber}`;
};
type ConstructPrevUrlParams = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
};
export const constructPrevOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: ConstructPrevUrlParams): { prevUrl: string; nextUrl: string } => {
  const prevUrl = "/products";
  const nextUrl = "/products";
  return {
    prevUrl,
    nextUrl,
  };
};
