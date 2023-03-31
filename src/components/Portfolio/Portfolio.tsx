import { useRef, RefObject, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { portfolioData } from "../../helpers/temphelpers/tempHelpers";

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
    <div className="flex w-full mt-[204px]">
      <div className="flex flex-col ml-6">
        <h6 className="text-white text-[32px] mb-2">
          {t("home.featured.heading")}
        </h6>
        <span className="text-bodyText w-[277px]">
          {t("home.featured.text")}
        </span>
        <div className="flex my-6">
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
        <span className="text-primary text-base font-semibold cursor-pointer">
          {t("home.viewBtnText")}
        </span>
      </div>
      <div
        ref={portfolioRef}
        className="flex overflow-x-scroll scroll w-[1076px] ml-[63px]"
      >
        {portfolioData.map((v, idx) => (
          <div className="relative min-w-[348px] h-[264px] mr-4 cursor-pointer">
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
    </div>
  );
};

export default Portfolio;
