import { useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

import SortMenu from "../../SortMenu/SortMenu";
import { useNavigate, useParams } from "react-router-dom";
import InputModal from "../../Modals/InputModal/InputModal";
import { useOutsideClick } from "../../../hooks/outsideClick/useOutsideClick";

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const params = useParams();

  const closeModal = () => {
    setDialogOpen(false);
  };
  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.title) navigate("/blog?page=1");
    else navigate("/blog?page=1&search=" + search.title);
  };

  const handleClearSearch = () => {
    setSearch({ title: "" });
    navigate("/blog?page=1");
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
        className="hidden lg:flex items-center border border-primary w-[227px] h-[40px] rounded bg-primaryLight"
      >
        <input
          type="text"
          placeholder="Find a article"
          value={search.title}
          className="text-bodyText pl-4 bg-transparent border-none outline-none"
          onChange={(e) => handleSearchText(e)}
        />
        {params?.title ? (
          <button onClick={handleClearSearch} className="cursor-pointer">
            <RxCross2 className="text-primary text-[24px]" />
          </button>
        ) : (
          <button type="submit" className="cursor-pointer">
            <AiOutlineSearch className="text-primary text-[24px]" />
          </button>
        )}
      </form>
      <div
        className={`lg:hidden static w-full ${dialogOpen && "mb-[40px]"}`}
        ref={modalRef}
      >
        <div
          className={` flex items-center justify-center cursor-pointer bg-primaryLight w-[40px] h-[40px] rounded ${
            dialogOpen && "hidden"
          }`}
        >
          <AiOutlineSearch
            className="text-primary text-[24px]"
            onClick={() => setDialogOpen(true)}
          />
        </div>

        {dialogOpen && (
          <InputModal
            search={search}
            handleSearchText={handleSearchText}
            handleSubmit={handleSubmit}
            handleClearSearch={handleClearSearch}
            title={params?.title}
          />
        )}
      </div>
      {!dialogOpen && (
        <SortMenu categoriesData={categoriesData} setSearch={setSearch} />
      )}
    </div>
  );
};

export default BlogFilter;
