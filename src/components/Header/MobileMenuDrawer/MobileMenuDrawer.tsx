import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RcDrawer from "rc-drawer";
import { useWindowSize } from "react-use";
import { MdOutlineClose, MdArrowRight } from "react-icons/md";

import siteSettings from "../../../settings/siteSettings";

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
  const [active, setActive] = useState("Home");

  const handleSelection = (v: string) => {
    setActive(v);
    handleMenuClose();
  };
  return (
    <RcDrawer
      width={width <= 520 ? "100%" : "390px"}
      open={openMenu}
      onClose={handleMenuClose}
      placement="left"
    >
      <div className="flex flex-col justify-between  w-full h-full bg-black text-primary overflow-x-hidden">
        {/* HEADER */}
        <div className="w-full flex justify-between items-center pt-[32px]  pb-[48px] px-4 mb-4">
          <Link to={"/"} onClick={handleMenuClose} className="flex ">
            <span className="text-primary text-[16px] font-RobotoSlab">
              {t("title")}
            </span>
          </Link>
          <div className="flex">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-primaryLight cursor-pointer rounded">
              <img
                src={siteSettings.translateIcon}
                alt="translate"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-primaryLight cursor-pointer rounded ml-2">
              <MdOutlineClose
                className="w-8 h-8 cursor-pointer "
                onClick={handleMenuClose}
              />
            </div>
          </div>
        </div>
        {siteSettings.header.map((v: HeaderTypes, idx: number) => (
          <div
            className="flex items-center ml-6 mb-6 "
            onClick={() => handleSelection(v.text)}
          >
            {v.text === active && (
              <MdArrowRight className="text-[32px] mr-3 text-primary" />
            )}
            <span
              key={idx}
              className={`text-[34px] xs:text-[48px] ${
                v.text === active ? "text-primary" : "text-bodyText"
              }  cursor-pointer`}
            >
              {t(v.text)}
            </span>
          </div>
        ))}
        <div className="flex flex-col mb-[38px] items-center justify-center">
          <span className="flex  text-[24px]">
            {t(siteSettings.scheduleText)}
          </span>
          <div className="flex items-center  mt-[48px] ml-[48px]">
            <img
              src={siteSettings.icons.github}
              alt="github"
              className="mr-[48px] cursor-pointer"
            />
            <img
              src={siteSettings.icons.linkedin}
              alt="linkedin"
              className="mr-[48px] cursor-pointer"
            />
            <img
              src={siteSettings.icons.twitter}
              alt="twitter"
              className="mr-[48px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </RcDrawer>
  );
};

export default MobileMenuDrawer;
