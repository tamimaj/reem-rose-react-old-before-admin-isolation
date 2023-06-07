import React from "react";
import { initialCapital } from "../../hooks/InitialCapital/InitialCapital";

type tagType = {
  tag: string;
  handleClick?: (v: string) => void;
  handleClearFilter?: () => void;
  selected?: string | null;
};
const Tags: React.FC<tagType> = ({ tag, handleClick, selected }) => {
  return (
    <div
      onClick={() => {
        if (handleClick) {
          handleClick(tag);
        }
      }}
      className={`px-4 py-2 mb-2 rounded ${
        tag === (selected && initialCapital(selected))
          ? "bg-primary"
          : "bg-primaryLight"
      } text-base text-white mr-2 cursor-pointer`}
    >
      {tag}
    </div>
  );
};

export default Tags;
