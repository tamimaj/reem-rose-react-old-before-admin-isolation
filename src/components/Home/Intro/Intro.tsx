import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import ROUTES from "../../../settings/ROUTES";
import LanguageDetector from "../../../hooks/LanguageDetector/LanguageDetector";
import Button from "../../Button";

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
      <div className="flex items-center justify-center mt-[38px] lg:mt-[86px] w-full gap-x-3 md:gap-x-4 lg:gap-x-9">
        <Button
          text={t("header.scheduleText")}
          withArrow
          href={ROUTES.SCHEDULE}
          cleanDimensions
          className="h-[50px] md:h-[60px] w-[170px] lg:w-[210px] text-sm md:text-base my-2 md:my-0"
        />

        <div className="relative">
          <Button
            variant="secondary"
            text={t("home.btnText")}
            href={ROUTES.ABOUT_US}
            cleanDimensions
            className="h-[50px] md:h-[60px] w-[170px] lg:w-[210px] text-sm md:text-base my-2 md:my-0"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
