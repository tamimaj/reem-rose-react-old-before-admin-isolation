import { useTranslation } from "react-i18next";
import PorFolioCard from "../../components/Portfolio/PortfolioCard/PorFolioCard";
import { portfolioDetailsData } from "../../helpers/temphelpers/tempHelpers";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full mt-[64px] lg:mt-0 lg:w-[954px]">
          <h2 className="text-white md:w-[712px] text-[24px] xs:text-[28px] lg:text-[32px] text-center">
            {t("portfolio.heading")}
          </h2>
          <span className="md:w-[470px] text-center text-bodyText text-sm lg:text-base mt-4">
            {t("portfolio.tagline")}
          </span>
        </div>
        <div className="flex flex-col mt-[48px] lg:mt-[80px] w-full">
          {portfolioDetailsData.map((data, idx) => (
            <PorFolioCard projectData={data} key={idx} idx={idx} />
          ))}
        </div>
        <div className="flex items-center mt-[48px] text-heading text-sm">
          <span className="mr-6">{t("pagination.previous")}</span>
          <span className="mr-4 text-base font-semibold text-white">1</span>
          <span className="mr-4">2</span>
          <span>3</span>
          <span className="ml-6">{t("pagination.next")}</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
