import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../settings/ROUTES";

interface SearchType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchKey: string;
}

const Search: React.FC<SearchType> = ({ search, setSearch, searchKey }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search)
      navigate(
        ROUTES.ADMIN_HOME +
          ROUTES.ADMIN_CAREERS +
          "?page=1&search-key=" +
          searchKey +
          "&search-value=" +
          search
      );
    else navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_CAREERS + "?page=1");
  };

  const handleClearSearch = () => {
    console.log("working");
    setSearch("");
    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_CAREERS + "?page=1");
  };
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="w-[80%] h-[40px] pl-4 pr-2 py-2 bg-primaryLight rounded flex items-center mr-[20px]"
    >
      <input
        value={search}
        onChange={(e) => handleSearchText(e)}
        className="outline-none bg-transparent w-[97%] text-bodyText"
        placeholder={t("admin.placeholder").toString()}
      />
      {search ? (
        <button
          type="button"
          onClick={handleClearSearch}
          className="cursor-pointer"
        >
          <RxCross2 className="text-primary text-[24px]" />
        </button>
      ) : (
        <button type="submit" className="cursor-pointer">
          <AiOutlineSearch className="text-primary text-[24px]" />
        </button>
      )}{" "}
    </form>
  );
};

export default Search;
