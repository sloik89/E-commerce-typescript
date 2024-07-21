import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useLoaderData, useLocation } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { type OrderResponse } from "@/utilis";
const buildUrl = ({
  actualValue,
  search,
  pathname,
}: {
  actualValue: number;
  search: string;
  pathname: string;
}) => {
  const url = new URLSearchParams(search);
  url.set("page", actualValue.toString());
  const route = url.toString();
  return `${pathname}?${route}`;
};
const constructUrls = (
  page: number,
  pages: number,
  search: string,
  pathname: string
): { prevUrl: string; nextUrl: string } => {
  console.log(page);
  let prevValue = page - 1;
  if (prevValue < 1) prevValue = pages;
  let prevUrl = buildUrl({ actualValue: prevValue, search, pathname });
  let nextValue = page + 1;
  if (nextValue > pages) nextValue = 1;
  let nextUrl = buildUrl({ actualValue: nextValue, search, pathname });
  return { prevUrl, nextUrl };
};
const Test = () => {
  const { meta } = useLoaderData() as OrderResponse;
  const { page, pages } = meta.pagination;
  const { search, pathname } = useLocation();

  const { prevUrl, nextUrl } = constructUrls(page, pages, search, pathname);
  const renderedPagination = () => {
    let ReactPages: React.ReactNode[] = [];
    ReactPages.push(constructBtns({ pageNumber: 1, isActive: page === 1 }));
    if (page > 2) {
      ReactPages.push(buildEllipsis("dots-1"));
    }
    ReactPages.push(
      constructBtns({ pageNumber: pages, isActive: page === pages })
    );
    return ReactPages;
  };
  const constructBtns = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }) => {
    const route = buildUrl({ actualValue: pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink isActive={isActive} to={route}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };
  const buildEllipsis = (key: string) => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  };
  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderedPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Test;
