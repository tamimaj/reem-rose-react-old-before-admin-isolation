import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RcDrawer from "rc-drawer";
import { useWindowSize } from "react-use";
import { MdOutlineClose, MdArrowRight, MdArrowLeft } from "react-icons/md";
import siteSettings from "../../../settings/siteSettings";
import LanguagesMenu from "../LanguageMenu/LanguagesMenu";
import ROUTES from "../../../settings/ROUTES";
import LanguageDetector from "../../../hooks/LanguageDetector/LanguageDetector";

interface drawerProps {
  openMenu: boolean;
  handleMenuClose: () => void;
}
interface HeaderTypes {
  text: string;
  link: string;
}

const MobileMenuDrawer: React.FC<drawerProps> = ({
  openMenu,
  handleMenuClose,
}) => {
  const { width } = useWindowSize();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [active, setActive] = useState<string>(pathname);
  const [lang, setLang] = useState<string | null>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname) setActive(pathname);
  }, [pathname]);

  const handleSelection = (v: string, link: string) => {
    navigate(link);
    setActive(v);
    handleMenuClose();
  };
  LanguageDetector(setLang);
  return (
    <RcDrawer
      width={width <= 520 ? "100%" : "390px"}
      open={openMenu}
      onClose={handleMenuClose}
      placement="left"
    >
      <div className="flex flex-col justify-between  w-full h-full bg-black text-primary scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-gray-100 overflow-x-hidden">
        {/* HEADER */}
        <div className="w-full flex justify-between items-center pt-[32px]  pb-[48px] px-4 mb-4">
          <Link to={ROUTES.HOME} onClick={handleMenuClose} className="flex ">
            <span className="text-primary text-[16px] font-RobotoSlab">
              {t("home.title")}
            </span>
          </Link>
          <div className="flex">
            {/* <LanguagesMenu /> */}
            <div className="w-[40px] h-[40px] flex items-center justify-center  bg-primaryLight cursor-pointer rounded ml-2">
              <MdOutlineClose
                className="w-8 h-8 cursor-pointer "
                onClick={handleMenuClose}
              />
            </div>
          </div>
        </div>
        {siteSettings.header.map((v: HeaderTypes, idx: number) => (
          <div
            key={idx}
            className="flex items-center ps-6 pe-6 mb-6"
            onClick={() => handleSelection(v.text, v.link)}
          >
            {v.link === active &&
              (lang === "ar" ? (
                <MdArrowLeft className={`text-[32px] mr-3 text-primary mt-3`} />
              ) : (
                <MdArrowRight className={`text-[32px] mr-3 text-primary`} />
              ))}
            <span
              className={`text-[34px] xs:text-[48px] ${
                v.link === active ? "text-primary" : "text-bodyText"
              }  cursor-pointer`}
            >
              {t(v.text)}
            </span>
          </div>
        ))}
        <div className="flex flex-col mb-[38px] items-center justify-center">
          <span
            onClick={() => {
              navigate(ROUTES.SCHEDULE);
              handleMenuClose();
            }}
            className="flex  text-[24px] cursor-pointer"
          >
            {t(siteSettings.scheduleText)}
          </span>
          <div className="flex items-center my-[32px] text-primary text-[24px]">
            {siteSettings.socialLinks.map((v: any) => (
              <Link
                key={v.link}
                to={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <v.iconComponent
                  size={28}
                  className="mx-[12px] cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </RcDrawer>
  );
};

export default MobileMenuDrawer;
