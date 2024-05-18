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
  let url = new URLSearchParams(search);

  url.set("page", pageNumber.toString());
  const route = url.toString();

  return `${pathname}?${route}`;
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
  let prevPage = currentPage - 1;
  if (prevPage < 1) prevPage = pageCount;
  const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname });
  let nextPage = currentPage + 1;
  if (nextPage > pageCount) nextPage = 1;
  const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname });

  return {
    prevUrl,
    nextUrl,
  };
};
