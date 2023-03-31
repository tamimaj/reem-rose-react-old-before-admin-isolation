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
      <h6 className="font-RobotoSlab text-base text-primary">
        {" "}
        {t("home.title")}
      </h6>
      <div className=" flex flex-col  w-[974px]">
        <h1 className="font-PlusJakartaSans text-center text-[48px] text-white">
          {t("home.tagline1")}
        </h1>
        <span className="font-PlusJakartaSans text-center text-base text-bodyText">
          {t("home.tagline2")}
        </span>
      </div>
      <div className="flex items-center justify-between font-PlusJakartaSans mt-[96px] w-[460px]">
        <button className="flex items-center justify-center w-[208px] h-[60px] text-white rounded bg-gradient-to-r from-primary to-gradientColor ">
          {t("header.scheduleText")}{" "}
          {lang === "ar" ? (
            <FiChevronLeft className="text-[20px] ml-4" />
          ) : (
            <FiChevronRight className="text-[20px] ml-4" />
          )}
        </button>
        <div className="relative">
          <button className="flex items-center justify-center w-[208px] h-[60px]  bg-transparent btn "></button>
          <span className="absolute text-white top-[20px] left-[61px]">
            {t("home.btnText")}{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Intro;
