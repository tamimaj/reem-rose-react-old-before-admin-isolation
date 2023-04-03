import { useTranslation } from "react-i18next";
import CareerCard from "../../components/Career/CareerCard/CareerCard";
import { CareerData } from "../../helpers/temphelpers/tempHelpers";

const Careers = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col w-full mt-[64px] lg:mt-0 lg:w-[712px]">
          <h2 className="text-white text-[24px] xs:text-[28px] lg:text-[32px] text-center mb-[48px]">
            {t("careers.heading")}
          </h2>
          {CareerData.map((career, idx) => (
            <CareerCard key={idx} careerData={career} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
