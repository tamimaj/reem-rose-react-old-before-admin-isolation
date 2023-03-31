import React from "react";
import { useTranslation } from "react-i18next";

import {
  DiAndroid,
  DiAngularSimple,
  DiApple,
  DiJava,
  DiNodejsSmall,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiDjango, SiJavascript } from "react-icons/si";

import gobbler from "../../assets/icons/gobbler.svg";
import net from "../../assets/icons/net.svg";
import techIcon from "../../assets/icons/techicon.svg";
import vue from "../../assets/icons/vue.svg";
import techIcon2 from "../../assets/icons/techIcon2.svg";

const Tech = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[144px] lg:mt-[216px] bg-primaryLight rounded flex flex-col items-center p-[48px] w-full">
      <div className="flex flex-col items-center lg:items-start lg:flex-row w-full max-w-[1344px] lg:justify-around">
        <div className="flex flex-col lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading font-semibold font-PlusJakartaSans text-[20px]">
            {t("home.frontend.title")}
          </h5>
          <div className="flex justify-center">
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.frontend.tag1")}
            </span>
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.frontend.tag2")}
            </span>
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.frontend.tag3")}
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading font-semibold font-PlusJakartaSans text-[20px]">
            {t("home.design.title")}
          </h5>
          <div className="flex justify-center">
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.design.tag1")}
            </span>
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.design.tag2")}
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading  font-semibold font-PlusJakartaSans text-[20px] mr-4">
            {t("home.backend.title")}
          </h5>
          <div className="ml-[12px] xs:ml-0 flex justify-center">
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag1")}
            </span>
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag2")}
            </span>
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag3")}
            </span>
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag4")}
            </span>
            <span className="text-sm text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag5")}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[48px] flex w-[822px] overflow-x-scroll  lg:w-full  justify-between">
        <img src={gobbler} alt="gobbler" className="w-[32px] h-[32px] " />
        <DiAndroid className="text-[32px] text-primary" />
        <DiApple className="text-[32px] text-primary" />
        <DiJava className="text-[32px] text-primary" />
        <DiPython className="text-[32px] text-primary" />
        <img src={net} alt="net" className="w-[32px] h-[32px] " />
        <SiJavascript className="text-[26px] text-primary" />
        <DiReact className="text-[32px] text-primary" />
        <DiAngularSimple className="text-[32px] text-primary" />
        <DiNodejsSmall className="text-[32px] text-primary" />
        <img src={techIcon} alt="net" className="w-[32px] h-[32px] " />
        <SiDjango className="text-[32px] text-primary" />
        <img src={vue} alt="net" className="w-[32px] h-[32px] " />
        <img src={techIcon2} alt="net" className="w-[32px] h-[32px] " />
      </div>
    </div>
  );
};

export default Tech;
