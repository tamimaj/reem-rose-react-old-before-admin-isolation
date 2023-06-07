import React from "react";
import { RxCross2 } from "react-icons/rx";
type tagType = {
  tag: string;
  idx: number;
  handleClick: (v: number) => void;
};
const Tag: React.FC<tagType> = ({ tag, handleClick, idx }) => {
  return (
    <div
      className={` flex items-center px-4 py-2 mb-2 rounded bg-primaryLight text-base text-white mr-2 cursor-pointer`}
    >
      {tag}
      <RxCross2
        className="text-[20px] text-primary ml-2"
        onClick={() => handleClick(idx)}
      />
    </div>
  );
};

export default Tag;
