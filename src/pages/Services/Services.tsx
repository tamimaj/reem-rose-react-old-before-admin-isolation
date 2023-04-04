import { useTranslation } from "react-i18next";
import DisclosureComponent from "../../components/DisclosureComponent/DisclosureComponent";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full mt-[64px] lg:mt-0 lg:w-[954px]">
          <h2 className="text-white md:w-[712px] text-[24px] xs:text-[28px] lg:text-[32px] text-center">
            {t("services.heading")}
          </h2>
          <span className="md:w-[470px] mb-[80px] text-center text-bodyText text-sm lg:text-base mt-4">
            {t("services.tagline")}
          </span>

          <DisclosureComponent />
        </div>
      </div>
    </div>
  );
};

export default Services;
