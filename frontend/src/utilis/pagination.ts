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
  let url = new URLSearchParams(search);

  url.set("page", pageNumber.toString());

  const route = url.toString();
  console.log(route);
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
type PaginationType = {
  pages: number;
  currentPage: number;
  search: string;
  pathname: string;
};
export const PaginationNavigation = ({
  search,
  pathname,
  pages,
  currentPage,
}: PaginationType): { prevUrl: string; nextUrl: string } => {
  let prevPage = currentPage - 1;
  if (prevPage === 0) prevPage = pages;
  console.log(prevPage);
  const prevUrl = createUrl({ pageNumber: prevPage, search, pathname });
  let nextPage = currentPage + 1;
  if (nextPage > pages) nextPage = 1;
  const nextUrl = createUrl({ pageNumber: nextPage, search, pathname });
  return { prevUrl, nextUrl };
};
type URLType = {
  pageNumber: number;
  search: string;
  pathname: string;
};
const createUrl = ({ pageNumber, search, pathname }: URLType) => {
  const url = new URLSearchParams(search);
  url.set("page", pageNumber.toString());
  const route = url.toString();
  return `${pathname}?${route}`;
};
