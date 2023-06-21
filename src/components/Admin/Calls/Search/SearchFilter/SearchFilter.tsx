import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useOutsideClick } from "../../../../../hooks/outsideClick/useOutsideClick";
import { initialCapital } from "../../../../../hooks/InitialCapital/InitialCapital";

type SearchType = {
  className?: string;
  searchKey: string;
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
};

const SearchFilter: React.FC<SearchType> = ({
  className,
  searchKey,
  setSearchKey,
}) => {
  const [filterMenu, setFilterMenu] = useState(false);
  const sortRef = useRef(null);
  useOutsideClick(sortRef, setFilterMenu);
  const handleClose = (v: string) => {
    setFilterMenu(false);
    setSearchKey(v);
  };
  return (
    <div className={`${className} relative`} ref={sortRef}>
      <button
        onClick={() => setFilterMenu(!filterMenu)}
        className="flex items-center justify-between w-[140px] h-[40px] bg-primaryLight rounded pl-4 pr-2 mt-2 md:mt-0"
      >
        <div className="flex">
          <p className="mr-1 text-[14px] text-base text-white">
            {searchKey === "_id"
              ? "Id"
              : searchKey === "requestorName"
              ? "Name"
              : searchKey === "requestorEmail" && "Email"}
          </p>
        </div>
        <IoIosArrowDown className={`text-primary text-[24px] ml-2`} />
      </button>
      {filterMenu && (
        <div className="text-sm z-50 absolute bg-black text-bodyText w-full top-[46px] rounded  pl-3 py-4">
          {" "}
          <button
            onClick={() => handleClose("requestorName")}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Name
          </button>
          <button
            onClick={() => handleClose("_id")}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Id
          </button>
          <button
            onClick={() => handleClose("requestorEmail")}
            className="w-full h-[20px] pb-[6px] flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Email
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
