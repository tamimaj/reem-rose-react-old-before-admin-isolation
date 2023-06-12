import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import ROUTES from "../../../settings/ROUTES";
import LanguageDetector from "../../../hooks/LanguageDetector/LanguageDetector";

const Intro = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<string | null>("");

  LanguageDetector(setLang);
  return (
    <>
      <h6 className="font-RobotoSlab text-base text-primary mt-[64px] lg:mt-0">
        {" "}
        {t("home.title")}
      </h6>
      <div className=" flex flex-col w-full sm:w-[359px] lg:w-[974px]">
        <h1 className="font-PlusJakartaSans text-center text-[24px] lg:text-[48px] text-white font-normal">
          {t("home.tagline1")}
        </h1>
        <span className="font-PlusJakartaSans text-center text-base text-bodyText mt-2">
          {t("home.tagline2")}
        </span>
      </div>
      <div className="flex items-center justify-between font-PlusJakartaSans mt-[48px] lg:mt-[96px] w-[270px] xs:w-[350px] sm:w-[390px] md:w-[460px]">
        <button
          onClick={() => navigate(ROUTES.SCHEDULE)}
          className="flex items-center text-sm md:text-base justify-center w-[130px] xs:w-[169px] md:w-[208px]  h-[52px] xs:h-[62px] pl-2 xs:pl-0 text-white rounded bg-gradient-to-r from-primary to-gradientColor "
        >
          {t("header.scheduleText")}{" "}
          {lang === "ar" ? (
            <FiChevronLeft className="text-[16px] lg:text-[20px] ml-1 xs:ml-2 md:ml-4 mt-[2px] xs:mt-0" />
          ) : (
            <FiChevronRight className="text-[16px] lg:text-[20px] ml-1 xs:ml-2 md:ml-4 mt-[2px] xs:mt-0" />
          )}
        </button>
        <div className="relative">
          <button
            onClick={() => navigate(ROUTES.ABOUT_US)}
            className="flex text-white items-center justify-center w-[130px] xs:w-[169px] md:w-[208px] h-[50px] xs:h-[60px]  border border-primary rounded cursor-pointer"
          >
            {t("home.btnText")}{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;
