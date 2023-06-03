import React from "react";
type tagType = {
  tag: string;
};
const Tags: React.FC<tagType> = ({ tag }) => {
  return (
    <div className="px-4 py-2 mb-2 rounded bg-primaryLight text-base text-white mr-2 cursor-pointer">
      {tag}
    </div>
  );
};

export default Tags;
