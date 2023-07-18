import { useTranslation } from "react-i18next";

import siteSettings from "../../settings/siteSettings";
import DesktopFooter from "./DesktopFooter/DesktopFooter";
import MobileFooter from "./MobileFooter/MobileFooter";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../../settings/ROUTES";

const Footer = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <footer
      className={`mt-[120px] lg:mt-[248px] pt-2.5 lg:pt-0 2xl:pt-2 pb-4 w-full ${
        pathname === "/admin" ? "hidden" : "flex"
      } justify-center`}
    >
      <div className="flex flex-col w-[90%] max-w-[1440px] lg:items-start items-center">
        <DesktopFooter />
        <MobileFooter />
        <div className="mt-[64px] flex lg:hidden justify-between text-white w-full //xs:w-[350px]">
          {siteSettings.footerPrivacy.map((v, idx) => (
            <span className="text-xs xs:text-sm cursor-pointer " key={idx}>
              {t(v.text)}
            </span>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center  justify-between w-full mt-6 lg:mt-[121px]">
          <span className="text-xs text-bodyText mb-2 lg:mb-0">
            &copy;
            {new Date().getFullYear()}{" "}
            <b>
              <Link to={ROUTES.HOME} className="px-1 text-primary">
                {siteSettings.companyName}
              </Link>
            </b>
            {t("footer.copyrightTextSuffix")}
          </span>
          <div className="flex">
            <span className="text-bodyText text-xs mr-2">
              {siteSettings.companyName}
            </span>
            <img
              src={siteSettings.footerLogo.url}
              alt={siteSettings.footerLogo.alt}
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
