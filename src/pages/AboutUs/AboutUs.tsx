import { useTranslation } from "react-i18next";

import aboutImage from "../../assets/images/aboutUs.png";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full mt-[64px] lg:mt-0 lg:w-[954px]">
          <h2 className="text-white md:w-[712px]  text-[24px] xs:text-[28px] lg:text-[32px] text-center">
            {t("aboutus.heading")}
          </h2>

          <span className="md:w-[470px]  text-center text-bodyText text-sm lg:text-base mt-4">
            {t("aboutus.tagline")}
          </span>
          <img
            src={aboutImage}
            alt="about Image"
            className="w-full h-[240px] lg:h-[400px] mt-[40px]"
          />
          <div className="mt-6 flex flex-col text-heading text-sm">
            <span>{t("aboutus.text1")}</span>
            <span>{t("aboutus.text2")}</span>
            <span>{t("aboutus.text3")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
