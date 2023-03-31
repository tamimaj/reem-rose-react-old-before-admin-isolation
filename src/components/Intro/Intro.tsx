import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Intro = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);
  return (
    <>
      <h6 className="font-RobotoSlab text-base text-primary mt-[64px] lg:mt-0">
        {" "}
        {t("home.title")}
      </h6>
      <div className=" flex flex-col w-full sm:w-[359px] lg:w-[974px]">
        <h1 className="font-PlusJakartaSans text-center text-[24px] lg:text-[48px] text-white">
          {t("home.tagline1")}
        </h1>
        <span className="font-PlusJakartaSans text-center text-base text-bodyText mt-2">
          {t("home.tagline2")}
        </span>
      </div>
      <div className="flex items-center justify-between font-PlusJakartaSans mt-[48px] lg:mt-[96px] w-[270px] xs:w-[350px] sm:w-[390px] md:w-[460px]">
        <button className="flex items-center text-sm md:text-base justify-center w-[130px] xs:w-[169px] md:w-[208px]  h-[50px] xs:h-[60px] text-white rounded bg-gradient-to-r from-primary to-gradientColor ">
          {t("header.scheduleText")}{" "}
          {lang === "ar" ? (
            <FiChevronLeft className="text-[16px] lg:text-[20px] ml-2 md:ml-4" />
          ) : (
            <FiChevronRight className="text-[16px] lg:text-[20px] ml-2 md:ml-4" />
          )}
        </button>
        <div className="relative">
          <button className="flex items-center justify-center w-[130px] xs:w-[169px] md:w-[208px] h-[50px] xs:h-[60px]  bg-transparent btn "></button>
          <span className="absolute text-white text-sm md:text-base top-[15px] left-[27px] xs:top-[20px] xs:left-[42px] md:left-[61px]">
            {t("home.btnText")}{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Intro;
