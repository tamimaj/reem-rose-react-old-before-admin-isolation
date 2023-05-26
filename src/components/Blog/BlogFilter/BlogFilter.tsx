import { AiOutlineSearch } from "react-icons/ai";

import SortMenu from "../../SortMenu/SortMenu";
import { useNavigate } from "react-router-dom";

interface FilterType {
  search: { title: string };
  setSearch: React.Dispatch<React.SetStateAction<{ title: string }>>;
  categoriesData: [{ _id: string; name: string; slug: string }];
}

const BlogFilter: React.FC<FilterType> = ({
  search,
  setSearch,
  categoriesData,
}) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/blog", { state: { searchData: { title: search }, page: 1 } });
  };
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ title: e.target.value });
  };
  return (
    <div className="flex justify-between w-full mt-[48px]">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="hidden lg:flex  items-center border border-primary w-[227px] h-[40px] rounded bg-primaryLight"
      >
        <input
          type="text"
          placeholder="Find a article"
          value={search.title}
          className="text-bodyText pl-4 bg-transparent border-none outline-none"
          onChange={(e) => handleSearchText(e)}
        />
        <button type="submit" className="cursor-pointer">
          <AiOutlineSearch className="text-primary text-[24px]" />
        </button>
      </form>
      <div className="lg:hidden flex items-center justify-center cursor-pointer bg-primaryLight w-[40px] h-[40px] rounded">
        <AiOutlineSearch className="text-primary text-[24px]" />
      </div>
      <SortMenu categoriesData={categoriesData} />
    </div>
  );
};

export default BlogFilter;
