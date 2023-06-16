import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { initialValues } from "../../helpers/intialValues";
import { validationSchema } from "../../helpers/validationSchema";
import { useAuth } from "../../context/auth.context";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const { signInWithEmail, isCheckingAuth } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: initialValues[7],
    validationSchema: validationSchema[7],
    onSubmit: () => {
      if (formik.values.email && formik.values.password)
        signInWithEmail(formik.values.email, formik.values.password, navigate);
    },
  });

  return isCheckingAuth ? (
    <Loader className="h-[30vh]" />
  ) : (
    <div className="mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[95%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="p-4 bg-black text-white rounded w-full sm:w-auto">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center w-full sm:w-auto"
          >
            <h5 className="text-white text-[24px]">{t("login.heading")}</h5>
            <div className="flex flex-col w-full mb-4 ">
              <label className="font-semibold text-sm text-white ml-[1px]">
                {t("careers.form.label.email")}
              </label>
              <input
                onChange={formik.handleChange}
                name="email"
                type="text"
                placeholder={t("careers.form.placeholder.email").toString()}
                className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-red text-xs flex mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full ">
              <label className="font-semibold text-sm text-white ml-[1px]">
                {t("login.password")}
              </label>
              <input
                onChange={formik.handleChange}
                type="password"
                name="password"
                placeholder={t("login.enterPassword").toString()}
                className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
              />

              {formik.touched.password && formik.errors.password && (
                <p className="text-red text-xs flex mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div className="flex mt-6 mb-3 w-full sm:w-auto">
              <button className="flex items-center justify-center w-full sm:w-[400px] h-[52px] text-white rounded bg-gradient-to-r from-primary to-gradientColor">
                {t("login.btnText")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
