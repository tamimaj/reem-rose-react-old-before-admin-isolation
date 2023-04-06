import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Tags from "../../Tags/Tags";
import Icons from "../../Icons/Icons";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectDataType = {
  projectImage: string;
  title: string;
  text: string;
  services: string[];
  techs: string[];
  link: string;
  date: string;
};
type data = {
  projectData: ProjectDataType;
  idx: number;
};
const PorFolioCard: React.FC<data> = ({ projectData, idx }) => {
  const [isOdd, setIsOdd] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (idx % 2 !== 0) setIsOdd(true);
  }, [idx]);

  return (
    <div
      className={`w-full  flex-col ${
        idx === 3 ? "mb-4" : "mb-[48px] lg:mb-[120px]"
      } ${isOdd ? "flex lg:flex-row-reverse" : "flex lg:flex-row"}`}
    >
      <div
        className={`w-full lg:w-2/4 xl:h-[390px] rounded ${isOdd && "lg:ml-4"}`}
      >
        <img
          src={projectData.projectImage}
          alt={projectData.title}
          className={`w-full h-full rounded`}
        />
      </div>
      <div className="flex w-full lg:w-2/4 h-full flex-col mt-3 lg:mt-0 lg:justify-between lg:ml-8  ">
        <span className="text-white text-[20px] lg:text-[24px]">
          {projectData.title}
        </span>
        <span className="text-sm lg:text-base mt-2 text-lightWhite">
          {projectData.text}
        </span>
        <span className="text-sm lg:text-sm mt-2 text-lightWhite">
          {projectData.date}
        </span>
        <div className="flex flex-col w-full">
          <span className="mt-3 text-primary text-sm lg:text-base font-semibold">
            {t("portfolio.services")}
          </span>
          <div className="flex flex-wrap w-full mt-3">
            {projectData.services.map((v, idx) => (
              <Tags key={idx} tag={v} />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span className="mt-3 text-primary text-sm lg:text-base font-semibold">
            {t("portfolio.techText")}
          </span>
          <div className="flex flex-wrap w-full mt-3">
            {projectData.techs.map((v, idx) => (
              <Icons key={idx} v={v} />
            ))}
          </div>
        </div>
        <div className="flex mt-5">
          <button className="flex items-center text-sm md:text-base justify-center w-[190px]  h-[52px]  text-white rounded bg-gradient-to-r from-primary to-gradientColor">
            {t("portfolio.visitText")}{" "}
            <FiArrowUpRight className="text-[16px] lg:text-[20px] ml-2 md:ml-4" />
          </button>

          <button className="flex text-sm md:text-base text-white items-center justify-center w-[140px] h-[51px] border border-primary rounded cursor-pointer ml-4">
            {t("portfolio.codeText")}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PorFolioCard;
