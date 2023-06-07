import { useTranslation } from "react-i18next";
import { Link, Route, Routes } from "react-router-dom";
import { IoMdApps } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import { useWindowSize } from "react-use";
import "react-tooltip/dist/react-tooltip.css";

import ROUTES from "../../settings/ROUTES";
import siteSettings from "../../settings/siteSettings";
import Blogs from "./Blogs/Blogs";
import AddBlogForm from "./Blogs/Forms/AddBlogForm";
import Home from "./Home/Home";

const Admin = () => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      {width < 1500 && (
        <>
          {" "}
          {siteSettings.admin.map((v, idx) => (
            <Tooltip key={idx} id={t(v.text).toString()} content={v.text} />
          ))}
          <Tooltip id="Log out" content="Log out" />
        </>
      )}
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <Link
          to={ROUTES.HOME}
          className="text-white md:w-[712px] text-[24px] xs:text-[28px] lg:text-[32px] text-center mt-4 mb-[48px] lg:mb-[80px]"
        >
          {t("admin.heading")}
        </Link>
        <div className="flex w-full overflow-y-hidden">
          <div className="flex flex-col justify-between 2xl:items-start items-center 2xl:w-[227px] h-[405px] 2xl:h-full bg-primaryLight py-8 px-4 2xl:p-8 rounded mr-6">
            <div className="flex flex-col">
              {/* <div className="flex cursor-pointer mb-4">
                <img
                  src={dashboard}
                  alt="dashboard icon"
                  className="w-[20px] h-[20px] 2xl:mr-3"
                />
                <span className="2xl:flex hidden text-bodyText hover:text-white">
                  {t("admin.title")}
                </span>
              </div> */}
              {siteSettings.admin.map((v, idx) => (
                <Link
                  to={v.link ? v?.link : "/admin"}
                  key={idx}
                  className="flex cursor-pointer mb-4"
                >
                  <IoMdApps
                    data-tooltip-id={t(v.text)}
                    data-tooltip-content={t(v.text)}
                    className="w-[20px] h-[20px] 2xl:mr-3 text-primary"
                  />
                  <span className="text-bodyText hover:text-white 2xl:flex hidden">
                    {t(v.text)}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex cursor-pointer">
              <FiLogOut
                data-tooltip-id="Log out"
                data-tooltip-content="Log out"
                className="w-[20px] h-[20px] 2xl:mr-3 text-primary"
              />
              <span className="text-sm text-white 2xl:flex hidden">
                Log out
              </span>
            </div>
          </div>{" "}
          <Routes>
            <Route path={ROUTES.ADMIN_HOME} element={<Home />} />

            <Route path={ROUTES.ADMIN_BLOGS} element={<Blogs />} />
            <Route path={ROUTES.ADMIN_ADD_BLOG} element={<AddBlogForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
