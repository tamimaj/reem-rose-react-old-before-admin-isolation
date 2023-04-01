import { AiOutlineSearch } from "react-icons/ai";

import SortMenu from "../../SortMenu/SortMenu";

const BlogFilter = () => {
  return (
    <div className="flex justify-between w-full mt-[48px]">
      <div className="hidden lg:flex  items-center border border-primary w-[227px] h-[40px] rounded bg-primaryLight">
        <input
          type="text"
          placeholder="Find a article"
          className="text-bodyText pl-4 bg-transparent border-none outline-none"
        />
        <AiOutlineSearch className="text-primary text-[24px]" />
      </div>
      <div className="lg:hidden flex items-center justify-center cursor-pointer bg-primaryLight w-[40px] h-[40px] rounded">
        <AiOutlineSearch className="text-primary text-[24px]" />
      </div>
      <SortMenu />
    </div>
  );
};

export default BlogFilter;
