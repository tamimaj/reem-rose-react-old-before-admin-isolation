import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useTranslation } from "react-i18next";
import { useOutsideClick } from "../../../../../hooks/outsideClick/useOutsideClick";

type SearchType = {
  className?: string;
};

const SearchFilter: React.FC<SearchType> = ({ className }) => {
  const [filterMenu, SetFilterMenu] = useState(false);
  const sortRef = useRef(null);
  const { t } = useTranslation();

  useOutsideClick(sortRef, SetFilterMenu);
  const handleClose = () => {
    SetFilterMenu(false);
  };
  return (
    <div className={`${className} relative mr-2`} ref={sortRef}>
      <button
        onClick={() => SetFilterMenu(!filterMenu)}
        className="flex items-center justify-between w-[140px] h-[40px] bg-primaryLight rounded pl-4 pr-2"
      >
        <div className="flex">
          <p className="mr-1 text-[14px] text-base text-white">
            {t("admin.sortBy")}
          </p>
        </div>
        <IoIosArrowDown className={`text-primary text-[24px] ml-2`} />
      </button>
      {filterMenu && (
        <div className="text-sm z-50 absolute bg-black text-bodyText w-full top-[46px] rounded  pl-3 py-4">
          {" "}
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.postMenu.menuItem1")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.postMenu.menuItem2")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.postMenu.menuItem3")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.postMenu.menuItem4")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.postMenu.menuItem5")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px]   flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.postMenu.menuItem6")}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
