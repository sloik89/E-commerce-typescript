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
  return "/products";
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
