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
import { type OrderResponse } from "@/utilis";
import { useLoaderData, useLocation } from "react-router-dom";
const ComplexPagination = () => {
  const { meta } = useLoaderData() as OrderResponse;
  const { page, pages } = meta.pagination;
  const { search, pathname } = useLocation();
  const pagination = Array.from({ length: pages }, (_, idx) => {
    return idx + 1;
  });
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
  const renderedPagination = () => {
    let pages: React.ReactNode[] = [];
    return [];
  };
  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    search,
    pageCount: pages,
    pathname,
  });
  console.log(prevUrl);
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
