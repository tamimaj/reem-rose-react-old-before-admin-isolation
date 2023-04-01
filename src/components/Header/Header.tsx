import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";

import siteSettings from "../../settings/siteSettings";
import LanguagesMenu from "./LanguageMenu/LanguagesMenu";
import MobileMenuDrawer from "./MobileMenuDrawer/MobileMenuDrawer";
import { Link } from "react-router-dom";

interface HeaderTypes {
  text: string;
  link: string;
}
const Header = () => {
  const { i18n, t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((v) => !v);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <header className="flex justify-center w-full font-PlusJakartaSans">
        <div className="max-w-[1440px]  w-[90%] h-[40px] mt-5 flex items-center justify-between">
          <img
            src={siteSettings.logo.url}
            alt={siteSettings.logo.alt}
            className="w-[24px] h-[24px] cursor-pointer"
          />
          <div className="hidden lg:flex text-base w-[405px] ml-[220px] xl:ml-[256px]">
            {siteSettings.header.map((v: HeaderTypes, idx: number) => (
              <Link
                to={v.link}
                key={idx}
                className="mr-8 text-bodyText hover:text-white cursor-pointer"
              >
                {t(v.text)}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center ">
            {/* <div className="w-[40px] h-[40px] flex items-center justify-center bg-primaryLight cursor-pointer rounded-lg">
              <img
                src={siteSettings.translateIcon}
                alt="translate"
                className="w-[24px] h-[24px]"
              />
            </div> */}
            <LanguagesMenu />
            <div className="flex text-primary items-center ml-[48px] cursor-pointer">
              <span>{t(siteSettings.scheduleText)}</span>
              {lang === "ar" ? (
                <FiChevronLeft className="text-[20px] ml-4" />
              ) : (
                <FiChevronRight className="text-[20px] ml-4" />
              )}
            </div>
          </div>
          <div className="flex lg:hidden cursor-pointer">
            <IoMdMenu
              onClick={toggleMobileMenu}
              className="text-[32px] text-primary"
            />
          </div>
        </div>
        <MobileMenuDrawer
          handleMenuClose={closeMobileMenu}
          openMenu={mobileMenuOpen}
        />
      </header>
    </>
  );
};

export default Header;
