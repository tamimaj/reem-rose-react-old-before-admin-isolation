import { useRef, RefObject, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { portfolioData } from "../../../helpers/temphelpers/tempHelpers";

const Portfolio = () => {
  const { i18n, t } = useTranslation();
  const portfolioRef: RefObject<HTMLDivElement> = useRef(null);

  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const handleScrollLeft = () => {
    if (portfolioRef.current) {
      const scrollElement = portfolioRef?.current;
      const scrollOffset = 160; // adjust this value to control the scroll amount
      scrollElement.scrollLeft -= scrollOffset;
    }
  };

  const handleScrollRight = () => {
    if (portfolioRef.current) {
      const scrollElement = portfolioRef?.current;
      const scrollOffset = 160; // adjust this value to control the scroll amount
      scrollElement.scrollLeft += scrollOffset;
    }
  };
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row w-full mt-[64px] lg:mt-[204px]">
      <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:ml-6">
        <h6 className="text-white text-[20px] lg:text-[32px] mb-2 mr-[24px] lg:mr-0">
          {t("home.featured.heading")}
        </h6>
        <span className="text-bodyText text-sm lg:text-base w-full xs:w-[277px]">
          {t("home.featured.text")}
        </span>
        <div className="hidden lg:flex my-6">
          <div
            onClick={() =>
              lang === "ar" ? handleScrollRight() : handleScrollLeft()
            }
            className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-white border-2 border-white rounded-full me-3  "
          >
            {lang === "ar" ? <HiArrowRight /> : <HiArrowLeft />}
          </div>
          <div
            onClick={() =>
              lang === "ar" ? handleScrollLeft() : handleScrollRight()
            }
            className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-white border-2 border-white rounded-full ms-3"
          >
            {lang === "ar" ? <HiArrowLeft /> : <HiArrowRight />}
          </div>
        </div>
        <span className="hidden lg:flex text-primary text-base font-semibold cursor-pointer">
          {t("home.viewBtnText")}
        </span>
      </div>
      <div
        ref={portfolioRef}
        className="flex overflow-x-scroll scroll  w-full lg:w-[1076px] lg:ml-[63px]"
      >
        {portfolioData.map((v, idx) => (
          <div className="relative min-w-[300px] h-[240px] sm:min-w-[348px] sm:h-[264px] mr-4 cursor-pointer">
            <img
              key={idx}
              src={v.projectImage}
              alt="project"
              className="w-full h-full object-cover rounded"
            />
            <span className="absolute text-[24px] text-white bottom-[20px] left-[16px]">
              {v.title}
            </span>
            <button className="absolute top-[20px] right-[16px] flex items-center justify-center w-[40px] h-[40px] rounded bg-lighterWhite text-white text-[24px]">
              <FiArrowUpRight />
            </button>
          </div>
        ))}
      </div>
      <span className="lg:hidden mt-[32px] flex text-primary text-base font-semibold cursor-pointer">
        {t("home.viewBtnText")}
      </span>
    </div>
  );
};

export default Portfolio;
