import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

type ModalType = {
  search: { title: string };
  handleSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClearSearch: () => void;
  title: string | null;
};

const InputModal: React.FC<ModalType> = ({
  search,
  handleSearchText,
  handleSubmit,
  handleClearSearch,
  title,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="absolute flex  items-center border border-primary w-[90%] h-[40px] rounded bg-primaryLight pr-4"
      >
        <input
          type="text"
          placeholder="Find a article"
          value={search.title}
          className="text-bodyText pl-4 bg-transparent border-none outline-none w-full"
          onChange={(e) => handleSearchText(e)}
        />
        {title ? (
          <button onClick={handleClearSearch} className="cursor-pointer">
            <RxCross2 className="text-primary text-[24px]" />
          </button>
        ) : (
          <button type="submit" className="cursor-pointer">
            <AiOutlineSearch className="text-primary text-[24px]" />
          </button>
        )}
      </form>
    </>
  );
};

export default InputModal;
