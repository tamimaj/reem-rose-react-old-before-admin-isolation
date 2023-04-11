import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[80%] 2xl:w-[901px] h-[40px] pl-4 pr-2 py-2 bg-primaryLight rounded flex items-center mr-[64px]">
      <input
        className="outline-none bg-transparent w-[97%] text-bodyText"
        placeholder={t("admin.placeholder").toString()}
      />
      <AiOutlineSearch className="text-[20px] text-primary" />
    </div>
  );
};

export default Search;
