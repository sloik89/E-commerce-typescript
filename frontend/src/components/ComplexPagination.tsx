import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  ProductsResponseWithParams,
  constructUrl,
  constructPrevOrNextUrl,
} from "@/utilis";
import { type OrderResponse } from "@/utilis";
import { useLoaderData, useLocation } from "react-router-dom";
import { PaginationNavigation } from "@/utilis/pagination";
const ComplexPagination = () => {
  const { meta } = useLoaderData() as OrderResponse;
  const { page, pages } = meta.pagination;
  const { search, pathname } = useLocation();

  // const renderedPagination = pagination.map((pageNumber) => {
  //   const isActive = pageNumber === page;
  //   const url = constructUrl({ pageNumber, search, pathname });
  //   return (
  //     <PaginationItem key={pageNumber}>
  //       <PaginationLink
  //         className={isActive ? "bg-secondary pointer-events-none" : ""}
  //         to={url}
  //       >
  //         {pageNumber}
  //       </PaginationLink>
  //     </PaginationItem>
  //   );
  // });
  const constructButtons = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = constructUrl({ pageNumber, pathname, search });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink isActive={isActive} to={url}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };
  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  };
  const renderedPagination = () => {
    let ReactPages: React.ReactNode[] = [];
    // first page
    ReactPages.push(constructButtons({ pageNumber: 1, isActive: page === 1 }));
    // elipsis
    if (page > 2) {
      ReactPages.push(constructEllipsis("dots-1"));
    }
    // active page
    if (page !== 1 && page !== pages) {
      ReactPages.push(constructButtons({ pageNumber: page, isActive: true }));
    }
    // elipsis
    if (page < pages - 1) {
      ReactPages.push(constructEllipsis("dots-1"));
    }
    // last page
    ReactPages.push(
      constructButtons({ pageNumber: pages, isActive: page === pages })
    );
    return ReactPages;
  };
  // const { prevUrl, nextUrl } = constructPrevOrNextUrl({
  //   currentPage: page,
  //   search,
  //   pageCount: pages,
  //   pathname,
  // });
  const { prevUrl, nextUrl } = PaginationNavigation({
    search,
    pathname,
    currentPage: page,
    pages,
  });
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

export default ComplexPagination;
