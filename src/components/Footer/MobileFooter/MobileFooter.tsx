import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import siteSettings from "../../../settings/siteSettings";
import ROUTES from "../../../settings/ROUTES";
import { useNavigate } from "react-router";
import LanguageDetector from "../../../hooks/LanguageDetector/LanguageDetector";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<string | null>("");

  LanguageDetector(setLang);

  return (
    <div className="flex lg:hidden flex-col w-full //xs:w-auto">
      <div className="flex flex-col w-full //xs:w-[272px]">
        <h2 className="text-white text-center text-[24px]">
          {t("footer.heading")}
        </h2>
        <span className="mt-2 text-bodyText text-center text-base">
          {t("footer.tagline")}
        </span>
        <button
          onClick={() => navigate(ROUTES.SCHEDULE)}
          className="flex items-center justify-center w-full //xs:w-[272px] h-[50px] xs:h-[60px] text-white rounded bg-gradient-to-r from-primary to-gradientColor mt-[48px]"
        >
          {t("header.scheduleText")}{" "}
          {lang === "ar" ? (
            <FiChevronLeft className="text-[20px] ml-4" />
          ) : (
            <FiChevronRight className="text-[20px] ml-4" />
          )}
        </button>
      </div>
      <div className="flex justify-between px-1 text-white mt-[64px] w-full">
        {siteSettings.socialLinks.map((v) => (
          <div className="flex cursor-pointer" key={v.name}>
            <Link to={v.link} target="_blank" rel="noopener noreferrer">
              <v.iconComponent className="w-[24px] h-[24px]" />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex sm:text-sm text-xs justify-between text-white xs:ml-2  mt-[64px]">
        <div className="flex flex-col sm:w-full  mb-3">
          {/* // TODO. REVERT */}

          <Link
            to={siteSettings.footerMobileMenu[0].link}
            className="mb-4  cursor-pointer"
          >
            {t(siteSettings.footerMobileMenu[0].text)}
          </Link>
          <Link
            to={siteSettings.footerMobileMenu[2].link}
            className="mb-4  cursor-pointer"
          >
            {t(siteSettings.footerMobileMenu[2].text)}
          </Link>
          <Link
            to={siteSettings.footerMobileMenu[4].link}
            className=" cursor-pointer mb-4"
          >
            {t(siteSettings.footerMobileMenu[4].text)}
          </Link>
        </div>
        <div className="flex flex-col items-end sm:w-full  mb-3">
          <Link
            to={siteSettings.footerMobileMenu[1].link}
            className="cursor-pointer mb-4 w-[62px]"
          >
            {t(siteSettings.footerMobileMenu[1].text)}
          </Link>
          <Link
            to={siteSettings.footerMobileMenu[3].link}
            className="cursor-pointer mb-4 w-[62px]"
          >
            {t(siteSettings.footerMobileMenu[3].text)}
          </Link>

          <Link
            to={siteSettings.footerMobileMenu[5].link}
            className=" cursor-pointer mb-4 w-[62px]"
          >
            {t(siteSettings.footerMobileMenu[5].text)}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
