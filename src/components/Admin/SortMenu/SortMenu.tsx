import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useOutsideClick } from "../../../hooks/outsideClick/useOutsideClick";
import { useTranslation } from "react-i18next";

type sortType = {
  className?: string;
};

const SortMenu: React.FC<sortType> = ({ className }) => {
  const [sortMenu, setSortMenu] = useState(false);
  const sortRef = useRef(null);
  const { t } = useTranslation();

  useOutsideClick(sortRef, setSortMenu);
  const handleClose = () => {
    setSortMenu(false);
  };
  return (
    <div className={`${className} relative mr-2`} ref={sortRef}>
      <button
        onClick={() => setSortMenu(!sortMenu)}
        className="flex items-center justify-between w-[120px] h-[40px] bg-primaryLight rounded pl-4 pr-2"
      >
        <div className="flex">
          <p className="mr-1 text-[14px] text-base text-white">
            {t("admin.sortBy")}
          </p>
        </div>
        <IoIosArrowDown className={`text-primary text-[24px] ml-2`} />
      </button>
      {sortMenu && (
        <div className="text-sm z-50 absolute bg-black text-bodyText w-full top-[46px] rounded  pl-3 py-4">
          {" "}
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.menu.menuItem1")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.menu.menuItem2")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.menu.menuItem3")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.menu.menuItem4")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px] mb-3  flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.menu.menuItem5")}
          </button>
          <button
            onClick={handleClose}
            className="w-full h-[20px] pb-[6px]   flex items-center justify-between hover:font-semibold hover:text-primary"
          >
            {t("admin.menu.menuItem6")}
          </button>
        </div>
      )}
    </div>
  );
};

export default SortMenu;