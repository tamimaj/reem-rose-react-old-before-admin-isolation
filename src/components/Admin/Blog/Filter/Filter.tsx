import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import Search from "../Search/Search";
import Tags from "../../../Tags/Tags";
import SortMenu from "../SortMenu/SortMenu";
import SearchFilter from "../Search/SearchFilter/SearchFilter";

interface FilterType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterType> = ({ search, setSearch }) => {
  return (
    <div className="flex 2xl:w-[1198px] md:flex-row flex-col  w-full md:justify-between">
      <div className="flex flex-col w-full">
        <div className="flex items-center w-[80%] 2xl:w-[901px]">
          <Search search={search} setSearch={setSearch} />
          <SearchFilter />
        </div>
        <div className="flex mt-2 flex-wrap">
          <Tags tag="Published" />
          <Tags tag="Draft" />
        </div>
      </div>
      <div className="flex mt-4 md:mt-0">
        <SortMenu />
        <div className="flex items-center justify-center w-[40px] h-[40px] p-2 bg-primaryLight rounded mr-2">
          <BiChevronLeft className="text-[24px] text-primary" />
        </div>
        <div className="flex items-center justify-center w-[40px] h-[40px] p-2 bg-primaryLight rounded">
          <BiChevronRight className="text-[24px] text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
