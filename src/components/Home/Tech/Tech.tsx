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

import gobbler from "../../../assets/icons/gobbler.svg";
import net from "../../../assets/icons/net.svg";
import techIcon from "../../../assets/icons/techicon.svg";
import vue from "../../../assets/icons/vue.svg";
import techIcon2 from "../../../assets/icons/techIcon2.svg";

const Tech = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[144px] lg:mt-[216px] bg-primaryLight rounded flex flex-col items-center p-[48px] w-full">
      <div className="flex flex-col items-center lg:items-start lg:flex-row w-full max-w-[1344px] lg:justify-around">
        <div className="flex flex-col lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading font-semibold font-PlusJakartaSans text-base lg:text-[20px]">
            {t("home.frontend.title")}
          </h5>
          <div className="flex justify-center">
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.frontend.tag1")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.frontend.tag2")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.frontend.tag3")}
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading font-semibold font-PlusJakartaSans text-base lg:text-[20px]">
            {t("home.design.title")}
          </h5>
          <div className="flex justify-center">
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.design.tag1")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.design.tag2")}
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading  font-semibold font-PlusJakartaSans text-base lg:text-[20px] mr-4">
            {t("home.backend.title")}
          </h5>
          <div className="ml-[12px] xs:ml-0 flex justify-center">
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag1")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag2")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag3")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag4")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.backend.tag5")}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[48px] flex w-full md:w-[622px] overflow-x-scroll scroll  lg:w-full  lg:justify-between">
        <img
          src={gobbler}
          alt="gobbler"
          className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px] opacity-40 hover:opacity-100"
        />
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <DiAndroid className="w-full h-full opacity-40 hover:opacity-100 text-primary" />
        </div>
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <DiApple className="w-full h-full opacity-40 hover:opacity-100 text-primary" />
        </div>
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <DiJava className="w-full h-full opacity-40 hover:opacity-100 text-primary" />
        </div>
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <DiPython className="w-full h-full opacity-40 hover:opacity-100 text-primary" />
        </div>
        <img
          src={net}
          alt="net"
          className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px] opacity-40 hover:opacity-100"
        />
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <SiJavascript className="text-[26px] opacity-40 hover:opacity-100 text-primary" />
        </div>
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <DiReact className="w-full h-full opacity-40 hover:opacity-100 text-primary" />
        </div>
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <DiAngularSimple className="w-full h-full opacity-40 hover:opacity-100 text-primary" />
        </div>
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <DiNodejsSmall className="w-full h-full opacity-40 hover:opacity-100 text-primary" />
        </div>
        <img
          src={techIcon}
          alt="tech"
          className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px] opacity-40 hover:opacity-100"
        />
        <div className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px]">
          <SiDjango className="w-full h-full opacity-40 hover:opacity-100 text-primary" />
        </div>
        <img
          src={vue}
          alt="vue"
          className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px] opacity-40 hover:opacity-100"
        />
        <img
          src={techIcon2}
          alt="tech2"
          className="min-w-[32px] max-w-[32px] mr-4 cursor-pointer h-[32px] opacity-40 hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Tech;
