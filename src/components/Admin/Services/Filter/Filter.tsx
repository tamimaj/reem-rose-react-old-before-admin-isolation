import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

import Search from "../Search/Search";
import SortMenu from "../SortMenu/SortMenu";
import SearchFilter from "../Search/SearchFilter/SearchFilter";
import ROUTES from "../../../../settings/ROUTES";
import AddModal from "../AddModal/AddModal";

interface FilterType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchKey: string;
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  count: number;
  getCategoryData:()=>void
}

const Filter: React.FC<FilterType> = ({
  search,
  setSearch,
  searchKey,
  setSearchKey,
  sort,
  setSort,
  count,
  getCategoryData

}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchKeyData = queryParams.get("search-key");
  const searchValueData = queryParams.get("search-value");
  const sortData = queryParams.get("sort");
  const [addModal, setAddModal] = useState(false);
  const page = queryParams.get("page");
  const pageNumber = parseInt(page ? page : "1");
  const totalPages = Math.ceil(count / 10);

  const handleNext = (v: number) => {
    if (searchValueData) {
      if (sortData) {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_CATEGORIES +
            "?page=" +
            v +
            "&search-key=" +
            searchKeyData +
            "&search-value=" +
            searchValueData +
            "&sort=" +
            sortData
        );
      } else {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_CATEGORIES +
            "?page=" +
            v +
            "&search-key=" +
            searchKey +
            "&search-value=" +
            search
        );
      }
    } else {
      if (sortData)
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_CATEGORIES +
            "?page=" +
            v +
            "&sort=" +
            sortData
        );
      else navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_CATEGORIES + "?page=" + v);
    }
  };

  const handlePrevious = (v: number) => {
    if (searchValueData) {
      if (sortData) {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_CATEGORIES +
            "?page=" +
            v +
            "&search-key=" +
            searchKeyData +
            "&search-value=" +
            searchValueData +
            "&sort=" +
            sortData
        );
      } else {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_CATEGORIES +
            "?page=" +
            v +
            "&search-key=" +
            searchKey +
            "&search-value=" +
            search
        );
      }
    } else {
      if (sortData)
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_CATEGORIES +
            "?page=" +
            v +
            "&sort=" +
            sortData
        );
      else navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_CATEGORIES + "?page=" + v);
    }
  };

  return (
    <div className="flex 2xl:w-[1198px] md:flex-row flex-col  w-full md:justify-between">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row md:items-center w-[98%] md:w-[85%] 2xl:w-[901px]">
          <Search
            search={search}
            setSearch={setSearch}
            searchKey={searchKey}
            sort={sort}
          />
          <SearchFilter searchKey={searchKey} setSearchKey={setSearchKey} />
        </div>
      </div>
      <div className="flex flex-col pr-2">
        <div className="flex mt-4 md:mt-0">
          <SortMenu sort={sort} setSort={setSort} />
          <button
            onClick={() => {
              handlePrevious(pageNumber - 1);
            }}
            disabled={pageNumber === 1 ? true : false}
            className={`flex items-center ${
              pageNumber === 1 ? "cursor-not-allowed" : "cursor-pointer"
            } justify-center w-[40px] h-[40px] p-2 bg-primaryLight rounded mr-2`}
          >
            <BiChevronLeft className="text-[24px] text-primary" />
          </button>
          <button
            onClick={() => handleNext(pageNumber + 1)}
            disabled={pageNumber >= totalPages ? true : false}
            className={`flex items-center ${
              pageNumber === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } justify-center w-[40px] h-[40px] p-2 bg-primaryLight rounded`}
          >
            <BiChevronRight className="text-[24px] text-primary" />
          </button>
        </div>
        <div className="flex md:justify-end">
          <button
            onClick={() => setAddModal(true)}
            className="flex text-white items-center justify-center px-2 py-2 w-[85px] mt-2 border border-primary rounded cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>

      {addModal && <AddModal setDialogOpen={setAddModal} getData={getCategoryData}/>}
    </div>
  );
};

export default Filter;
