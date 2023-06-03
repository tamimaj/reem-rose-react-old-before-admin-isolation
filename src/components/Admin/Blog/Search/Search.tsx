import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";

interface SearchType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchType> = ({ search, setSearch }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchData = queryParams.get("search");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) navigate("/blog?page=1");
    else navigate("/blog?page=1&search-key=" + +search);
  };

  const handleClearSearch = () => {
    setSearch("");
    navigate("/blog?page=1");
  };
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="w-[80%] h-[40px] pl-4 pr-2 py-2 bg-primaryLight rounded flex items-center mr-[64px]"
    >
      <input
        value={search}
        onChange={(e) => handleSearchText(e)}
        className="outline-none bg-transparent w-[97%] text-bodyText"
        placeholder={t("admin.placeholder").toString()}
      />
      {searchData ? (
        <button onClick={handleClearSearch} className="cursor-pointer">
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
