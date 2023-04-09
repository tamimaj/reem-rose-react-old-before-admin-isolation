import React from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[95%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="p-4 bg-black text-white rounded w-full sm:w-auto">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <h5 className="text-white text-[24px]">{t("login.heading")}</h5>
            <div className="flex flex-col w-full mb-4 ">
              <label className="font-semibold text-sm text-white ml-[1px]">
                {t("careers.form.label.email")}
              </label>
              <input
                type="text"
                placeholder={t("careers.form.placeholder.email").toString()}
                className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
              />
            </div>
            <div className="flex flex-col w-full ">
              <label className="font-semibold text-sm text-white ml-[1px]">
                {t("login.password")}
              </label>
              <input
                type="password"
                placeholder={t("login.enterPassword").toString()}
                className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
              />
            </div>
            <div className="flex mt-6 w-full sm:w-auto">
              <button className="flex items-center justify-center w-full sm:w-[400px] h-[52px] text-white rounded bg-gradient-to-r from-primary to-gradientColor">
                {t("login.btnText")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
