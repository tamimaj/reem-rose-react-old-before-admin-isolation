import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useOutsideClick } from "../../hooks/outsideClick/useOutsideClick";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

type SortType = {
  className?: string;
  categoriesData: [
    {
      _id: string;
      name: string;
      slug: string;
    }
  ];
  setSearch: React.Dispatch<React.SetStateAction<{ title: string }>>;
};
type CategoryType = {
  _id?: string;
  name?: string;
  slug?: string;
};
const SortMenu: React.FC<SortType> = ({
  className,
  categoriesData,
  setSearch,
}) => {
  const [sortMenu, setSortMenu] = useState(false);
  const sortRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();

  useOutsideClick(sortRef, setSortMenu);
  const handleClose = (v?: CategoryType) => {
    setSortMenu(false);

    if (v) navigate("/blog/1/filter/" + v.name + "/" + v._id);
    else {
      navigate("/blog/1");
      setSearch({ title: "" });
    }
  };
  return (
    <div className={`${className} relative`} ref={sortRef}>
      <button
        onClick={() => setSortMenu(!sortMenu)}
        className="flex items-center justify-between min-w-[200px] xs:min-w-[290px] lg:min-w-[200px] h-[40px] bg-primaryLight rounded pl-4 pr-2"
      >
        <div className="flex">
          <p className="mr-1 text-xs xs:text-base text-white">
            {params?.name ? params?.name : t("blog.categories.heading")}
          </p>
        </div>
        <IoIosArrowDown className={`text-primary text-[24px] ml-2`} />
      </button>
      {sortMenu && (
        <div className="text-sm z-50 absolute max-h-[200px] scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-gray-100 overflow-y-scroll  bg-black text-bodyText w-full top-[46px] rounded  pl-3 py-4">
          {" "}
          <button
            onClick={() => handleClose()}
            className={`w-full h-[20px] pb-[6px] mb-3 flex items-center justify-between hover:font-semibold hover:text-primary`}
          >
            {t("blog.categories.heading")}
          </button>
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
