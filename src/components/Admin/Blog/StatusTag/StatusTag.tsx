import React from "react";

type TagType = {
  value: string;
  className: string;
};

const StatusTag: React.FC<TagType> = ({ value, className }) => {
  return (
    <div
      className={`flex items-center justify-center h-[25px] w-[120px] rounded text-xs font-semibold ${className}`}
    >
      {value}
    </div>
  );
};

export default StatusTag;
