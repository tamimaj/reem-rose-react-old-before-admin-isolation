import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

import siteSettings from "../../settings/siteSettings";

const Footer = () => {
  const { i18n, t } = useTranslation();

  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <footer className="mt-[248px] pt-2.5 lg:pt-0 2xl:pt-2 pb-4 w-full flex justify-center">
      <div className="flex flex-col w-[90%] max-w-[1440px]">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <h2 className="text-white text-[32px]">{t("footer.heading")}</h2>
            <span className="mt-2 text-bodyText text-base">
              {t("footer.tagline")}
            </span>
            <button className="flex items-center justify-center w-[208px] h-[60px] text-white rounded bg-gradient-to-r from-primary to-gradientColor mt-[48px]">
              {t("header.scheduleText")}{" "}
              {lang === "ar" ? (
                <FiChevronLeft className="text-[20px] ml-4" />
              ) : (
                <FiChevronRight className="text-[20px] ml-4" />
              )}
            </button>
          </div>
          <div className="flex flex-col text-white">
            {siteSettings.footerMenu.map((v, idx) => (
              <span className="mb-4 text-sm cursor-pointer" key={idx}>
                {t(v.text)}
              </span>
            ))}
          </div>
          <div className="flex flex-col text-white">
            {siteSettings.footerPrivacy.map((v, idx) => (
              <span className="text-sm cursor-pointer mb-3" key={idx}>
                {t(v.text)}
              </span>
            ))}
          </div>
          <div className="flex text-white">
            <div className="flex cursor-pointer">
              <AiFillGithub className="w-[20px] h-[20px] mr-2 " />
              <span className="text-sm mr-[48px] ">
                {siteSettings.icons.text1}
              </span>
            </div>
            <div className="flex cursor-pointer">
              <AiFillLinkedin className="w-[20px] h-[20px] mr-2 " />
              <span className="text-sm mr-[48px] ">
                {siteSettings.icons.text2}
              </span>
            </div>
            <div className="flex cursor-pointer">
              <AiOutlineTwitter className="w-[20px] h-[20px] mr-2 " />
              <span className="text-sm ">{siteSettings.icons.text3}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-[121px]">
          <span className="text-xs text-bodyText">
            {t("footer.copyrightText")}
          </span>
          <div className="flex">
            <span className="text-bodyText text-xs mr-2">
              {siteSettings.companyName}
            </span>
            <img
              src={siteSettings.footerLogo.url}
              alt={siteSettings.footerLogo.alt}
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
