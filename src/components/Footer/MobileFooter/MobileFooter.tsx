import { useState, useEffect, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import siteSettings from "../../../settings/siteSettings";

const MobileFooter = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="flex lg:hidden flex-col w-full xs:w-auto">
      <div className="flex flex-col w-full xs:w-[272px]">
        <h2 className="text-white text-center text-[24px]">
          {t("footer.heading")}
        </h2>
        <span className="mt-2 text-bodyText text-center text-base">
          {t("footer.tagline")}
        </span>
        <button className="flex items-center justify-center w-full xs:w-[272px] h-[50px] xs:h-[60px] text-white rounded bg-gradient-to-r from-primary to-gradientColor mt-[48px]">
          {t("header.scheduleText")}{" "}
          {lang === "ar" ? (
            <FiChevronLeft className="text-[20px] ml-4" />
          ) : (
            <FiChevronRight className="text-[20px] ml-4" />
          )}
        </button>
      </div>
      <div className="flex justify-between text-white mt-[64px] w-full xs:w-[272px]">
        <div className="flex cursor-pointer">
          <AiFillGithub className="w-[20px] h-[20px] " />
          <span className="text-sm mr-[24px] ">{siteSettings.icons.text1}</span>
        </div>
        <div className="flex cursor-pointer">
          <AiFillLinkedin className="w-[20px] h-[20px] " />
          <span className="text-sm mr-[24px] ">{siteSettings.icons.text2}</span>
        </div>
        <div className="flex cursor-pointer">
          <AiOutlineTwitter className="w-[20px] h-[20px] " />
          <span className="text-sm ">{siteSettings.icons.text3}</span>
        </div>
      </div>
      <div className="flex flex-col items-center text-white xs:ml-2  mt-[64px]">
        <div className="flex w-[90%] xs:w-[245px] justify-between mb-3">
          <span className="mb-4 text-sm cursor-pointer">
            {t(siteSettings.footerMenu[0].text)}
          </span>
          <span className="mb-4 text-sm cursor-pointer">
            {t(siteSettings.footerMenu[1].text)}
          </span>
        </div>
        <div className="flex w-[90%] xs:w-[245px] justify-between mb-3">
          <span className="mb-4 text-sm cursor-pointer">
            {t(siteSettings.footerMenu[2].text)}
          </span>
          <span className="mb-4 text-sm cursor-pointer">
            {t(siteSettings.footerMenu[3].text)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
