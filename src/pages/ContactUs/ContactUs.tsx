import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ContactUs = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-full lg:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full mt-[64px] lg:mt-0 lg:w-[954px]">
          <h2 className="text-white md:w-[712px] px-2 md:px-0 text-[24px] xs:text-[28px] lg:text-[32px] text-center">
            {t("contactus.heading")}
          </h2>

          <span className="md:w-[470px] px-2 md:px-0 text-center text-bodyText text-sm lg:text-base mt-4">
            {t("contactus.tagline")}
          </span>
          <div className="flex w-full flex-col mt-[48px] lg:mt-[80px]">
            <div className="w-full bg-lighterBlack rounded py-6 px-4 lg:p-[80px] flex flex-col">
              <div className="flex flex-col xs:flex-row mb-[48px] lg:mb-[80px]">
                <div className="flex flex-col xs:mr-[48px]">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    {t("careers.form.label.email")}
                  </label>
                  <span className="text-base text-heading">
                    Support@Reemrose.com
                  </span>
                </div>
                <div className="flex flex-col mt-2 lg:mt-0">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    {t("contactus.phoneNo")}
                  </label>
                  <span className="text-base text-heading">+1 877 009 719</span>
                </div>
              </div>
              <div>
                {" "}
                <h6 className="font-semibold text-base text-white mb-6">
                  {t("contactus.subheading")}:
                </h6>
                <div className="flex lg:flex-row flex-col  mb-4 lg:mb-8">
                  <div className="flex flex-col w-full mb-4 lg:mb-0 lg:w-[389px] mr-4">
                    <label className="font-semibold text-sm text-white ml-[1px]">
                      {t("careers.form.label.name")}
                    </label>
                    <input
                      type="text"
                      placeholder={t(
                        "careers.form.placeholder.name"
                      ).toString()}
                      className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                    />
                  </div>
                  <div className="flex flex-col w-full lg:w-[389px] ">
                    <label className="font-semibold text-sm text-white ml-[1px]">
                      {t("careers.form.label.email")}
                    </label>
                    <input
                      type="text"
                      placeholder={t(
                        "careers.form.placeholder.email"
                      ).toString()}
                      className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    {t("careers.form.label.coverLetter")}
                  </label>
                  <textarea
                    placeholder={t(
                      "careers.form.placeholder.coverLetter"
                    ).toString()}
                    className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                  />

                  <button className="flex mt-6 text-white items-center justify-center w-full lg:w-[165px] h-[52px] border border-primary rounded cursor-pointer">
                    {t("contactus.btnText")}{" "}
                  </button>
                </div>
                <div className="flex flex-col mt-[48px] lg:mt-[80px]">
                  <span className="text-primary text-center lg:text-start text-[20px] mb-6">
                    {t("contactus.scheduleText")}
                  </span>
                  <button className="flex lg:text-base text-sm items-center justify-center w-full lg:w-[208px] h-[60px] text-white rounded bg-gradient-to-r from-primary to-gradientColor">
                    {t("header.scheduleText")}{" "}
                    {lang === "ar" ? (
                      <FiChevronLeft className="text-[18px] lg:text-[20px] ml-4" />
                    ) : (
                      <FiChevronRight className="text-[18px] lg:text-[20px] ml-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
