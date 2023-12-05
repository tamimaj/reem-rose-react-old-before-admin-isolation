import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import siteSettings from "../../../settings/siteSettings";
import ROUTES from "../../../settings/ROUTES";
import LanguageDetector from "../../../hooks/LanguageDetector/LanguageDetector";

const DesktopFooter = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<string | null>("");

  LanguageDetector(setLang);

  return (
    <div className="hidden lg:flex w-full justify-between">
      <div className="flex flex-col">
        <h2 className="text-white text-[32px]">{t("footer.heading")}</h2>
        <span className="mt-2 text-bodyText text-base">
          {t("footer.tagline")}
        </span>
        <button
          onClick={() => navigate(ROUTES.SCHEDULE)}
          className="flex items-center justify-center w-[208px] h-[60px] text-white rounded bg-gradient-to-r from-primary to-gradientColor mt-[48px]"
        >
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
          <Link to={v.link} className="mb-4 text-sm cursor-pointer" key={idx}>
            {t(v.text)}
          </Link>
        ))}
      </div>
      <div className="flex flex-col text-white">
        {siteSettings.footerPrivacy.map((v, idx) => (
          <Link to={v.link} className="text-sm cursor-pointer mb-3" key={idx}>
            {t(v.text)}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-x-5 text-white">
        {siteSettings.socialLinks.map((v) => (
          <Link
            key={v.link}
            to={v.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-0 flex"
            title={v.account}
          >
            <v.iconComponent className="w-[24px] h-[24px] hover:text-primary" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopFooter;
