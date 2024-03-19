import React from "react";
import { useTranslation } from "react-i18next";

const ImageGrid = () => {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden w-full /my-24 mt-[144px] lg:mt-[216px]">
      <div className="flex flex-col lg:w-full items-center lg:items-center mb-8 lg:mb-12 lg:ml-6">
        <h5 className="text-white text-[20px] lg:text-[32px]">
          {t("home.featured.heading")}
        </h5>

        <span className="text-bodyText text-center text-sm lg:text-base xs:w-[277px] sm:w-1/3 ">
          {t("home.featured.text")}
        </span>
      </div>

      <div className="flex flex-nowrap space-x-4 animate-scrolling-row1">
        {Array.from(Array(10).keys()).map((_, index) => (
          <div key={index} className="flex-none w-72 h-40 bg-gray rounded">
            {index + 1}
          </div>
        ))}
      </div>

      <div className="flex flex-nowrap space-x-4 animate-scrolling-row2 mt-4">
        {Array.from(Array(10).keys()).map((_, index) => (
          <div key={index} className="flex-none w-72 h-40 bg-gray rounded">
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
