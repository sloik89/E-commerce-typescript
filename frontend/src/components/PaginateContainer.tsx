import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  ProductsResponseWithParams,
  constructUrl,
  constructPrevOrNextUrl,
} from "@/utilis";
import { useLoaderData, useLocation } from "react-router-dom";
const PaginateContainer = () => {
  const { meta } = useLoaderData() as ProductsResponseWithParams;
  const { page, pages } = meta.pagination;
  const { search, pathname } = useLocation();
  const pagination = Array.from({ length: pages }, (_, idx) => {
    return idx + 1;
  });
  console.log(search, pathname);
  const renderedPagination = pagination.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = constructUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink
          className={isActive ? "bg-secondary pointer-events-none" : ""}
          to={url}
        >
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });
  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    search,
    pageCount: pages,
    pathname,
  });
  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderedPagination}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginateContainer;
