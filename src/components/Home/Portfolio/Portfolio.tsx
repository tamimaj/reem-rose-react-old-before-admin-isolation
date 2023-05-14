import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router";
import ROUTES from "../../../settings/ROUTES";
import LanguageDetector from "../../../hooks/LanguageDetector/LanguageDetector";
import AliceCarousel from "react-alice-carousel";
import { useWindowSize } from "react-use";
import { getProjects } from "../../../api/public/projects";

interface PortfolioDataProps {
  title: string;
  coverImage: string;
  links: {
    name: string;
    link: string;
  };
}
interface PortfolioProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Portfolio: React.FC<PortfolioProps> = ({ setLoading }) => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [portfolioData, setPortfolioData] = useState<PortfolioDataProps[]>([]);

  const responsive = {
    0: { items: 1 },
    767: { items: 2 },
    1024: { items: 3 },
  };
  const [lang, setLang] = useState<string | null>("");

  LanguageDetector(setLang);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(portfolioData.length - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < portfolioData.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };
  const getPortfolioData = async () => {
    setLoading(true);
    let response = await getProjects();
    if (response?.status === 200) {
      setPortfolioData(response.data);
    } else {
      console.log("error occurred");
    }
    setLoading(false);
  };
  useEffect(() => {
    getPortfolioData();
  });

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
            onClick={() => (lang === "ar" ? handleNext() : handlePrevious())}
            className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-white border-2 border-white rounded-full me-3  "
          >
            {lang === "ar" ? <HiArrowRight /> : <HiArrowLeft />}
          </div>
          <div
            onClick={() => (lang === "ar" ? handlePrevious() : handleNext())}
            className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-white border-2 border-white rounded-full ms-3"
          >
            {lang === "ar" ? <HiArrowLeft /> : <HiArrowRight />}
          </div>
        </div>
        <span
          onClick={() => navigate(ROUTES.PORTFOLIO)}
          className="hidden lg:flex text-primary text-base font-semibold cursor-pointer"
        >
          {t("home.viewBtnText")}
        </span>
      </div>
      <div className="flex  w-full lg:w-[1076px] lg:ml-[63px]">
        <AliceCarousel
          mouseTracking
          infinite
          activeIndex={activeIndex}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          paddingLeft={width <= 1024 ? 20 : 0}
          paddingRight={width <= 1024 ? 5 : 0}
          items={portfolioData.map((v, idx) => (
            <div className="relative  h-[240px] xs:h-[300px]  md:h-[264px] mr-4 cursor-grab">
              <img
                key={idx}
                draggable={false}
                src={v.coverImage}
                alt="project"
                className="w-full h-full object-cover rounded"
              />
              <span className="absolute text-[24px] text-white bottom-[20px] left-[16px]">
                {v.title}
              </span>
              <a
                href={v.links?.link}
                target="_blank"
                rel="noreferrer noopener"
                className="absolute top-[20px] right-[16px] flex items-center justify-center w-[40px] h-[40px] rounded bg-lighterWhite text-white text-[24px] cursor-pointer"
              >
                <FiArrowUpRight />
              </a>
            </div>
          ))}
        />
      </div>
      <span
        onClick={() => navigate(ROUTES.PORTFOLIO)}
        className="lg:hidden mt-[32px] flex text-primary text-base font-semibold cursor-pointer"
      >
        {t("home.viewBtnText")}
      </span>
    </div>
  );
};

export default Portfolio;
