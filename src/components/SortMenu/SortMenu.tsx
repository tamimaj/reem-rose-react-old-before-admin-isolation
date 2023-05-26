import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useOutsideClick } from "../../hooks/outsideClick/useOutsideClick";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type SortType = {
  className?: string;
  categoriesData: [
    {
      _id: string;
      name: string;
      slug: string;
    }
  ];
};
type CategoryType = {
  _id: string;
  name: string;
  slug: string;
};
const SortMenu: React.FC<SortType> = ({ className, categoriesData }) => {
  const [sortMenu, setSortMenu] = useState(false);
  const sortRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useOutsideClick(sortRef, setSortMenu);
  const handleClose = (v: CategoryType) => {
    setSortMenu(false);

    navigate("/blog", {
      state: { filterData: { categories: v._id }, page: 1 },
    });
  };
  return (
    <div className={`${className} relative`} ref={sortRef}>
      <button
        onClick={() => setSortMenu(!sortMenu)}
        className="flex items-center justify-between w-[200px] xs:w-[290px] lg:w-[200px] h-[40px] bg-primaryLight rounded pl-4 pr-2"
      >
        <div className="flex">
          <p className="mr-1 text-[14px] text-base text-white">
            {t("blog.categories.heading")}
          </p>
        </div>
        <IoIosArrowDown className={`text-primary text-[24px] ml-2`} />
      </button>
      {sortMenu && (
        <div className="text-sm z-50 absolute max-h-[200px] scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-gray-100 overflow-y-scroll  bg-black text-bodyText w-full top-[46px] rounded  pl-3 py-4">
          {" "}
          {categoriesData.map((v: CategoryType, idx) => (
            <button
              onClick={() => handleClose(v)}
              key={idx}
              className={`w-full h-[20px] pb-[6px] ${
                categoriesData.length === idx + 1 ? "mb-0" : "mb-3"
              }   flex items-center justify-between hover:font-semibold hover:text-primary`}
            >
              {v.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortMenu;
