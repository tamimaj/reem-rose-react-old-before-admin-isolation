import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import LanguageDetector from "../../hooks/LanguageDetector/LanguageDetector";
import { initialValues } from "../../helpers/intialValues";
import { validationSchema } from "../../helpers/validationSchema";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../settings/ROUTES";
import siteSettings from "../../settings/siteSettings";
import { contactSubmission } from "../../api/public/contacts";
import { toast } from "react-toastify";
import CustomToast from "../../components/CustomToast/CustomToast";

const ContactUs = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState<string | null>("");
  const navigate = useNavigate();
  LanguageDetector(setLang);

  const handleSubmit = async (values: any) => {
    const response = await contactSubmission(values);

    if (!response || response?.status !== 200) {
      toast(<CustomToast message={t("contactus.form.error")} />);
      return;
    }

    toast(<CustomToast type="success" message={t("contactus.form.success")} />);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues[9],
    validationSchema: validationSchema[9],
    onSubmit: handleSubmit,
  });

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-full xs:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full mt-[64px] lg:mt-0 lg:w-[954px]">
          <h2 className="text-white md:w-[712px] px-2 md:px-0 text-[24px] xs:text-[28px] lg:text-[32px] text-center">
            {t("contactus.heading")}
          </h2>

          <span className="md:w-[470px] px-2 md:px-0 text-center text-bodyText text-sm lg:text-base mt-4">
            {t("contactus.tagline")}
          </span>

          <div className="w-full bg-lightBlack rounded py-6 px-4  mt-[48px] xl:w-[1198px] lg:mt-[80px] lg:p-[80px] flex flex-col">
            <div className="flex flex-col xs:flex-row mb-[48px] lg:mb-[80px]">
              <div className="flex flex-col xs:mr-[48px]">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  {t("contactus.form.label.email")}
                </label>

                <a href={"mailto:" + siteSettings.supportEmail}>
                  <span className="text-base text-heading">
                    {siteSettings.supportEmail}
                  </span>
                </a>
              </div>
              {/* <div className="flex flex-col mt-2 lg:mt-0">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    {t("contactus.phoneNo")}
                  </label>
                  <span className="text-base text-heading">+1 877 009 719</span>
                </div> */}
            </div>
            <div>
              {" "}
              <h6 className="font-semibold text-base text-white mb-6">
                {t("contactus.subheading")}:
              </h6>
              <div className="flex lg:flex-row flex-col  mb-4 lg:mb-8">
                <div className="flex flex-col w-full mb-4 lg:mb-0 lg:w-[389px] mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    {t("contactus.form.label.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder={t(
                      "contactus.form.placeholder.name"
                    ).toString()}
                    className="w-full h-[36px] rounded text-white placeholder:text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base "
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full lg:w-[389px] ">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    {t("contactus.form.label.email")}
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder={t(
                      "contactus.form.placeholder.email"
                    ).toString()}
                    className="w-full h-[36px] rounded text-white placeholder:text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full mr-4">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  {t("contactus.form.label.message")}
                </label>
                <textarea
                  name="message"
                  onChange={formik.handleChange}
                  placeholder={t(
                    "contactus.form.placeholder.message"
                  ).toString()}
                  value={formik.values.message}
                  className="w-full h-[120px] rounded text-white placeholder:text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                />

                {formik.touched.message && formik.errors.message && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.message}
                  </p>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                  }}
                  className="flex mt-6 text-white items-center justify-center w-full lg:w-[165px] h-[52px] border border-primary rounded cursor-pointer"
                >
                  {t("contactus.btnText")}{" "}
                </button>
              </div>
              <div className="flex flex-col mt-[48px] lg:mt-[80px]">
                <span className="text-primary text-center lg:text-start text-[20px] mb-6">
                  {t("contactus.scheduleText")}
                </span>
                <button
                  onClick={() => navigate(ROUTES.SCHEDULE)}
                  className="flex lg:text-base text-sm items-center justify-center w-full lg:w-[208px] h-[60px] text-white rounded bg-gradient-to-r from-primary to-gradientColor"
                >
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
  );
};

export default ContactUs;
