import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Services = () => {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState<string>("Consulting");

  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const handleActiveItem = (v: string) => {
    setActive(v);
  };
  return (
    <div className="flex w-full mt-[120px] lg:mt-[204px]">
      <div className="flex flex-col items-center lg:items-start lg:ml-6 w-full">
        <h6 className="text-white text-[32px] mb-6">
          {t("home.services.heading")}
        </h6>
        <div
          onClick={() => handleActiveItem("Consulting")}
          className={`flex justify-between w-full lg:w-[450px] xl:w-[688px] h-[60px] px-[24px] py-[20px] ${
            active === "Consulting"
              ? "bg-primary text-white"
              : "bg-primaryLight text-bodyText"
          } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
        >
          <span>01</span>
          <span>{t("home.services.title1")}</span>
        </div>
        {active === "Consulting" && (
          <div className="flex lg:hidden flex-col mb-4">
            {" "}
            <h5 className="text-white text-[20px]">
              {t("home.services.title1")}
            </h5>
            <span className="text-sm  text-bodyText mt-2">
              {t("home.services.text1")}
            </span>
            <span className="mt-6 text-primary text-base font-semibold flex items-center cursor-pointer">
              {t("home.readMore")}{" "}
              {lang === "ar" ? (
                <FiChevronLeft className="text-[20px] ml-4 mt-[2px]" />
              ) : (
                <FiChevronRight className="text-[20px] ml-4 mt-[2px]" />
              )}
            </span>
          </div>
        )}
        <div
          onClick={() => handleActiveItem("Development")}
          className={`flex justify-between w-full lg:w-[450px] xl:w-[688px] h-[60px] px-[24px] py-[20px] ${
            active === "Development"
              ? "bg-primary text-white"
              : "bg-primaryLight text-bodyText"
          } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
        >
          <span>02</span>
          <span>{t("home.services.title2")}</span>
        </div>

        {active === "Development" && (
          <div className="flex lg:hidden flex-col mb-4">
            {" "}
            <h5 className="text-white text-[20px]">
              {t("home.services.title2")}
            </h5>
            <span className="text-sm 2xl:text-base text-bodyText mt-2">
              {t("home.services.text2")}
            </span>
            <span className="mt-6 text-primary text-base font-semibold flex items-center">
              {t("home.readMore")}{" "}
              {lang === "ar" ? (
                <FiChevronLeft className="text-[20px] ml-4 mt-[2px]" />
              ) : (
                <FiChevronRight className="text-[20px] ml-4 mt-[2px]" />
              )}
            </span>
          </div>
        )}
        <div
          onClick={() => handleActiveItem("Mentoring")}
          className={`flex justify-between w-full lg:w-[450px] xl:w-[688px] h-[60px] px-[24px] py-[20px] ${
            active === "Mentoring"
              ? "bg-primary text-white"
              : "bg-primaryLight text-bodyText"
          } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
        >
          <span>03</span>
          <span>{t("home.services.title3")}</span>
        </div>

        {active === "Mentoring" && (
          <div className="flex lg:hidden flex-col mb-4">
            {" "}
            <h5 className="text-white text-[20px]">
              {t("home.services.title3")}
            </h5>
            <span className="text-sm 2xl:text-base text-bodyText mt-2">
              {t("home.services.text3")}
            </span>
            <span className="mt-6 text-primary text-base font-semibold flex items-center">
              {t("home.readMore")}{" "}
              {lang === "ar" ? (
                <FiChevronLeft className="text-[20px] ml-4 mt-[2px]" />
              ) : (
                <FiChevronRight className="text-[20px] ml-4 mt-[2px]" />
              )}
            </span>
          </div>
        )}
        <div
          onClick={() => handleActiveItem("Open Source")}
          className={`flex justify-between w-full lg:w-[450px] xl:w-[688px] h-[60px] px-[24px] py-[20px] ${
            active === "Open Source"
              ? "bg-primary text-white"
              : "bg-primaryLight text-bodyText"
          } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
        >
          <span>04</span>
          <span>{t("home.services.title4")}</span>
        </div>

        {active === "Open Source" && (
          <div className="flex lg:hidden flex-col mb-4">
            {" "}
            <h5 className="text-white text-[24px]">
              {t("home.services.title4")}
            </h5>
            <span className="text-sm 2xl:text-base text-bodyText mt-2">
              {t("home.services.text4")}
            </span>
            <span className="mt-6 text-primary text-base font-semibold flex items-center">
              {t("home.readMore")}{" "}
              {lang === "ar" ? (
                <FiChevronLeft className="text-[20px] ml-4 mt-[2px]" />
              ) : (
                <FiChevronRight className="text-[20px] ml-4 mt-[2px] " />
              )}
            </span>
          </div>
        )}
      </div>
      <div className="hidden lg:flex flex-col ml-[137px] mt-[65px]">
        {active === "Consulting" && (
          <>
            {" "}
            <h5 className="text-white text-[24px]">
              {t("home.services.title1")}
            </h5>
            <span className="text-sm 2xl:text-base text-bodyText mt-6">
              {t("home.services.text1")}
            </span>
          </>
        )}
        {active === "Development" && (
          <>
            {" "}
            <h5 className="text-white text-[24px]">
              {t("home.services.title2")}
            </h5>
            <span className="text-sm 2xl:text-base text-bodyText mt-6">
              {t("home.services.text2")}
            </span>
          </>
        )}
        {active === "Mentoring" && (
          <>
            {" "}
            <h5 className="text-white text-[24px]">
              {t("home.services.title3")}
            </h5>
            <span className="text-sm 2xl:text-base text-bodyText mt-6">
              {t("home.services.text3")}
            </span>
          </>
        )}

        {active === "Open Source" && (
          <>
            {" "}
            <h5 className="text-white text-[24px]">
              {t("home.services.title4")}
            </h5>
            <span className="text-sm 2xl:text-base text-bodyText mt-6">
              {t("home.services.text4")}
            </span>
          </>
        )}
        <span className="mt-6 text-primary text-base font-semibold flex">
          {t("home.readMore")}{" "}
          {lang === "ar" ? (
            <FiChevronLeft className="text-[20px] ml-4 mt-[2px]" />
          ) : (
            <FiChevronRight className="text-[20px] ml-4 mt-[3px]" />
          )}
        </span>
      </div>
    </div>
  );
};

export default Services;
