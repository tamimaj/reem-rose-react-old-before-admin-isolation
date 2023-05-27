import { useTranslation } from "react-i18next";
import { DOTS, usePagination } from "../../hooks/pagination/usePagination";

interface PaginationProps {
  onPageChange: (value: number | string) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;
  const { t } = useTranslation();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange?.length < 2)) {
    return null;
  }
  let lastPage =
    paginationRange && paginationRange[paginationRange?.length - 1];

  const onNext = () => {
    if (currentPage === lastPage) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };
  return (
    <ul className={className}>
      <li
        className={`mr-4 ${
          currentPage === 1 ? "opacity-50 cursor-default" : "cursor-pointer"
        }`}
        onClick={onPrevious}
      >
        {t("pagination.previous")}
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li key={idx} className="mr-4">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={idx}
              className={` mr-4 cursor-pointer ${
                pageNumber === currentPage && "text-base font-semibold"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={` ${
          currentPage === lastPage
            ? "opacity-50 cursor-default"
            : "cursor-pointer"
        }`}
        onClick={onNext}
      >
        {t("pagination.next")}
      </li>
    </ul>
  );
};

export default Pagination;
