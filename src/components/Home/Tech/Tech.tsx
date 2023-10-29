import { useTranslation } from "react-i18next";

import {
  DiAndroid,
  DiAngularSimple,
  DiApple,
  DiJava,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoPython,
  BiLogoWordpress,
  BiLogoShopify,
  BiLogoFlutter,
} from "react-icons/bi";

import { SiBigcommerce } from "react-icons/si";

const Tech = () => {
  const { t } = useTranslation();

  const tech = [
    { icon: RiJavascriptFill, name: "JavaScript" },
    { icon: BiLogoTypescript, name: "TypeScript" },
    { icon: DiNodejsSmall, name: "Node.js" },
    { icon: DiReact, name: "React" },
    { icon: DiAngularSimple, name: "Angular" },
    { icon: FaGolang, name: "Go" },
    { icon: BiLogoPython, name: "Python" },
    { icon: SiDjango, name: "Django" },
    { icon: BiLogoFlutter, name: "Flutter" },
    { icon: DiAndroid, name: "Android" },
    { icon: DiApple, name: "Apple" },
    { icon: DiJava, name: "Java" },
    { icon: BiLogoWordpress, name: "WordPress" },
    { icon: BiLogoShopify, name: "Shopify" },
    { icon: SiBigcommerce, name: "Bigcommerce" },
  ];

  return (
    <div className="mt-[144px] lg:mt-[216px] bg-primaryLight rounded flex flex-col items-center p-[48px] w-full">
      <div className="flex flex-col items-center lg:items-start lg:flex-row w-full max-w-[1344px] lg:justify-around">
        <div className="flex flex-col lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading font-semibold font-PlusJakartaSans text-base lg:text-[20px]">
            {t("home.banner.service1.title")}
          </h5>
          <div className="flex justify-center">
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service1.tag1")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service1.tag2")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service1.tag3")}
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading font-semibold font-PlusJakartaSans text-base lg:text-[20px]">
            {t("home.banner.service2.title")}
          </h5>
          <div className="flex justify-center">
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service2.tag1")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service2.tag2")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service2.tag3")}
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 w-[437px] items-center">
          <h5 className="text-heading  font-semibold font-PlusJakartaSans text-base lg:text-[20px] mr-4">
            {t("home.banner.service3.title")}
          </h5>
          <div className="ml-[12px] xs:ml-0 flex justify-center">
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service3.tag1")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service3.tag2")}
            </span>
            <span className="text-sm opacity-40 hover:opacity-100 text-primary font-RobotoSlab mr-4">
              {t("home.banner.service3.tag3")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[48px] flex w-full md:w-[622px] overflow-x-scroll scroll lg:w-full lg:justify-between">
        {tech.map((item, i) => (
          <div
            key={i}
            className="min-h-[32px] min-w-[32px] mr-4 h-[32px] flex items-center justify-center"
            title={item.name}
          >
            {item.icon({
              className:
                "w-full h-full opacity-50 hover:opacity-100 text-primary",
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
