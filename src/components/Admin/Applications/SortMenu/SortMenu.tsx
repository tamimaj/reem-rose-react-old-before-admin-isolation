import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useOutsideClick } from "../../../../hooks/outsideClick/useOutsideClick";
import { initialCapital } from "../../../../hooks/InitialCapital/InitialCapital";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTES from "../../../../settings/ROUTES";

type sortType = {
  className?: string;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

const SortMenu: React.FC<sortType> = ({ className, sort, setSort }) => {
  const [sortMenu, setSortMenu] = useState(false);
  const sortRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchKeyData = queryParams.get("search-key");
  const searchValueData = queryParams.get("search-value");

  useOutsideClick(sortRef, setSortMenu);

  const handleClose = (v: string) => {
    const sortValue = v.split(" ").join("-");
    setSortMenu(false);
    if (searchKeyData) {
      navigate(
        ROUTES.ADMIN_HOME +
          ROUTES.ADMIN_APPLICATIONS +
          "?page=1&search-key=" +
          searchKeyData +
          "&search-value=" +
          searchValueData +
          "&sort=" +
          sortValue
      );
    } else
      navigate(
        ROUTES.ADMIN_HOME +
          ROUTES.ADMIN_APPLICATIONS +
          "?page=1&sort=" +
          sortValue
      );
    setSort(v);
  };

  return (
    <div className={`${className} relative mr-2`} ref={sortRef}>
      <button
        onClick={() => setSortMenu(!sortMenu)}
        className="flex items-center justify-between min-w-[200px] h-[40px] bg-primaryLight rounded pl-4 pr-2"
      >
        <div className="flex">
          <p className="mr-1 text-[14px] text-base text-white">
            {sort ? initialCapital(sort) : "Sort By"}
          </p>
        </div>
        <IoIosArrowDown className={`text-primary text-[24px] ml-2`} />
      </button>
      {sortMenu && (
        <div className="text-sm z-50 absolute bg-black text-bodyText w-full top-[46px] rounded  pl-3 py-4">
          {" "}
          <button
            onClick={() => handleClose("name asc")}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Name (asc)
          </button>
          <button
            onClick={() => handleClose("name desc")}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Name (desc)
          </button>
          <button
            onClick={() => handleClose("email asc")}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Email (asc)
          </button>
          <button
            onClick={() => handleClose("email desc")}
            className="w-full h-[20px] pb-[6px] mb-3 flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Email (desc)
          </button>
          <button
            onClick={() => handleClose("date asc")}
            className="w-full h-[20px] pb-[6px] mb-3 flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Date (asc)
          </button>
          <button
            onClick={() => handleClose("date desc")}
            className="w-full h-[20px] pb-[6px] flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            Date (desc)
          </button>
        </div>
      )}
    </div>
  );
};

export default SortMenu;
