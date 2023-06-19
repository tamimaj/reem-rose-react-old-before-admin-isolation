import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Tags from "../../Tags/Tags";
import Icons from "../../Icons/Icons";
import { FiArrowUpRight } from "react-icons/fi";
import moment from "moment";
import { HtmlConverter } from "../../../hooks/HtmlConverter/HtmlConverter";

type ProjectDataType = {
  coverImage: string;
  title: string;
  description: string;
  servicesData: [
    {
      title: string;
    }
  ];
  techStacks: string[];
  links: [
    {
      name: string;
      link: string;
    }
  ];
  serviceProvidedAt: string;
};
type data = {
  projectData: ProjectDataType;
  idx: number;
};
const PortFolioCard: React.FC<data> = ({ projectData, idx }) => {
  const [isOdd, setIsOdd] = useState(false);
  const [websiteLink, setWebsiteLink] = useState<string | undefined>("");
  const [codeLink, setCodeLink] = useState<string | undefined>("");

  const { t } = useTranslation();
  useEffect(() => {
    if (idx % 2 !== 0) setIsOdd(true);
  }, [idx]);
  useEffect(() => {
    const webData = projectData?.links?.find((v, idx) => {
      return v.name === "website";
    });
    setWebsiteLink(webData?.link);
    const codeData = projectData?.links?.find((v, idx) => {
      return v.name === "code";
    });
    setCodeLink(codeData?.link);
  }, [projectData]);

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
          src={projectData.coverImage}
          alt={projectData.title}
          className={`w-full h-full rounded object-cover`}
        />
      </div>
      <div className="flex w-full lg:w-2/4 h-full flex-col mt-3 lg:mt-0 lg:justify-between lg:ml-8  ">
        <span className="text-white text-[20px] lg:text-[24px]">
          {projectData.title}
        </span>
        <span
          className="text-sm lg:text-base mt-2 text-lightWhite"
          dangerouslySetInnerHTML={HtmlConverter(projectData.description)}
        />

        <span className="text-sm lg:text-sm mt-2 text-lightWhite">
          {moment(projectData.serviceProvidedAt).format("DD.MM.YY")}
        </span>
        <div className="flex flex-col w-full">
          <span className="mt-3 text-primary text-sm lg:text-base font-semibold">
            {t("portfolio.services")}
          </span>
          <div className="flex flex-wrap w-full mt-3">
            {projectData?.servicesData?.map((v, idx) => (
              <Tags key={idx} tag={v.title} />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <span className="mt-3 text-primary text-sm lg:text-base font-semibold">
            {t("portfolio.techText")}
          </span>
          <div className="flex items-center flex-wrap w-full mt-3">
            {projectData?.techStacks?.map((v, idx) => (
              <Icons key={idx} v={v} />
            ))}
          </div>
        </div>

        <div className="flex mt-5">
          {
            <a
              href={
                websiteLink
                  ? websiteLink.includes("https")
                    ? websiteLink
                    : "https://" + websiteLink
                  : ""
              }
              target="_blank"
            >
              <button className="flex items-center text-sm md:text-base justify-center w-[190px]  h-[52px]  text-white rounded bg-gradient-to-r from-primary to-gradientColor">
                {t("portfolio.visitText")}{" "}
                <FiArrowUpRight className="text-[16px] lg:text-[20px] ml-2 md:ml-4" />
              </button>
            </a>
          }
          <a
            href={
              codeLink
                ? codeLink.includes("https")
                  ? codeLink
                  : "https://" + codeLink
                : ""
            }
            target="_blank"
          >
            <button className="flex text-sm md:text-base text-white items-center justify-center w-[140px] h-[51px] border border-primary rounded cursor-pointer ml-4">
              {t("portfolio.codeText")}{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortFolioCard;
