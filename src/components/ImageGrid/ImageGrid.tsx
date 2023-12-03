import React from "react";

const ImageGrid = () => {
  return (
    <div className="relative overflow-hidden w-full my-24">
      <div className="flex flex-nowrap space-x-4 animate-scrolling-row1">
        {Array.from(Array(10).keys()).map((_, index) => (
          <div key={index} className="flex-none w-64 h-36 bg-gray rounded">
            {index + 1}
          </div>
        ))}
      </div>

      <div className="flex flex-nowrap space-x-4 animate-scrolling-row2 mt-4">
        {Array.from(Array(10).keys()).map((_, index) => (
          <div key={index} className="flex-none w-64 h-36 bg-gray rounded">
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
