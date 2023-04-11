import { useEffect, useState } from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import LanguageDetector from "../../hooks/LanguageDetector/LanguageDetector";

const DisclosureComponent = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<string | null>("");
  const [active, setActive] = useState("");

  LanguageDetector(setLang);

  const handleActive = (v: string) => {
    if (active === v) {
      setActive("");
    } else {
      setActive(v);
    }
  };

  return (
    <>
      <div
        onClick={() => handleActive("Consulting")}
        className={`flex justify-between w-full h-[60px] px-[24px] py-[20px] disclosure ${
          active === "Consulting"
            ? " bg-gradient-to-r from-primary to-gradientColor text-white"
            : "bg-primaryLight text-bodyText"
        } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
      >
        <h3 className="font-semibold text-start text-base ">
          {t("home.services.title1")}
        </h3>
        <div className="w-[24px] h-[24px] flex items-center justify-center ml-1">
          <FiChevronDown
            className={`text-[20px] mt-[2px] icon ${
              active === "Consulting"
                ? "rotate-180 text-white"
                : "rotate-0 text-primary"
            }`}
          />
        </div>
      </div>
      {active === "Consulting" && (
        <div className="mb-8 transition ease-in-out duration-1000">
          <div className="flex  flex-col ">
            {" "}
            <span className="lg:text-base text-sm  text-heading mb-8">
              Our web development services are designed to bring your vision to
              life. We believe in delivering customized solutions that align
              with your unique business needs and objectives. Whether you need a
              simple landing page or a complex e-commerce platform, we have the
              expertise to create responsive, user-friendly, and visually
              stunning websites that engage your audience and drive conversions.
              From design to development and deployment, we work with you every
              step of the way to ensure your website meets your expectations and
              beyond.
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website planning and strategy development
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website design and layout creation
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website development and coding
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Front-end development (HTML/CSS/JavaScript)
            </span>
            <span className="text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Back-end development (server-side scripting and database
              integration)
            </span>
            <span className="lg:text-base text-sm  text-heading my-8">
              Here are some of the things that a web development company
              typically does for a client in the development department
            </span>
            <button className="flex text-white items-center justify-center w-full lg:w-[208px] h-[52px] border border-primary rounded cursor-pointer">
              {t("header.scheduleText")}{" "}
              <FiArrowUpRight className="ml-2 text-[20px]" />
            </button>
          </div>
        </div>
      )}
      <div
        onClick={() => handleActive("Development")}
        className={`flex justify-between w-full h-[60px] px-[24px] py-[20px] disclosure ${
          active === "Development"
            ? " bg-gradient-to-r from-primary to-gradientColor text-white"
            : "bg-primaryLight text-bodyText"
        } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
      >
        <h3 className="font-semibold text-start text-base ">
          {t("home.services.title2")}
        </h3>
        <div className="w-[24px] h-[24px] flex items-center justify-center ml-1">
          <FiChevronDown
            className={`text-[20px] mt-[2px] icon ${
              active === "Development"
                ? "rotate-180 text-white"
                : "rotate-0 text-primary"
            }`}
          />
        </div>
      </div>
      {active === "Development" && (
        <div className="mb-8 transition ease-in-out duration-1000">
          <div className="flex  flex-col">
            {" "}
            <span className="lg:text-base text-sm  text-heading mb-8">
              Our web development services are designed to bring your vision to
              life. We believe in delivering customized solutions that align
              with your unique business needs and objectives. Whether you need a
              simple landing page or a complex e-commerce platform, we have the
              expertise to create responsive, user-friendly, and visually
              stunning websites that engage your audience and drive conversions.
              From design to development and deployment, we work with you every
              step of the way to ensure your website meets your expectations and
              beyond.
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website planning and strategy development
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website design and layout creation
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website development and coding
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Front-end development (HTML/CSS/JavaScript)
            </span>
            <span className="text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Back-end development (server-side scripting and database
              integration)
            </span>
            <span className="lg:text-base text-sm  text-heading my-8">
              Here are some of the things that a web development company
              typically does for a client in the development department
            </span>
            <button className="flex text-white items-center justify-center w-full lg:w-[208px] h-[52px] border border-primary rounded cursor-pointer">
              {t("header.scheduleText")}{" "}
              <FiArrowUpRight className="ml-2 text-[20px]" />
            </button>
          </div>
        </div>
      )}
      <div
        onClick={() => handleActive("Mentoring")}
        className={`flex justify-between w-full h-[60px] px-[24px] py-[20px] disclosure ${
          active === "Mentoring"
            ? " bg-gradient-to-r from-primary to-gradientColor text-white"
            : "bg-primaryLight text-bodyText"
        } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
      >
        <h3 className="font-semibold text-start text-base ">
          {t("home.services.title3")}
        </h3>
        <div className="w-[24px] h-[24px] flex items-center justify-center ml-1">
          <FiChevronDown
            className={`text-[20px] mt-[2px] icon ${
              active === "Mentoring"
                ? "rotate-180 text-white"
                : "rotate-0 text-primary"
            }`}
          />
        </div>
      </div>
      {active === "Mentoring" && (
        <div className="mb-8 transition ease-in-out duration-1000">
          <div className="flex  flex-col ">
            {" "}
            <span className="lg:text-base text-sm  text-heading mb-8">
              Our web development services are designed to bring your vision to
              life. We believe in delivering customized solutions that align
              with your unique business needs and objectives. Whether you need a
              simple landing page or a complex e-commerce platform, we have the
              expertise to create responsive, user-friendly, and visually
              stunning websites that engage your audience and drive conversions.
              From design to development and deployment, we work with you every
              step of the way to ensure your website meets your expectations and
              beyond.
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website planning and strategy development
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website design and layout creation
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website development and coding
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Front-end development (HTML/CSS/JavaScript)
            </span>
            <span className="text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Back-end development (server-side scripting and database
              integration)
            </span>
            <span className="lg:text-base text-sm  text-heading my-8">
              Here are some of the things that a web development company
              typically does for a client in the development department
            </span>
            <button className="flex text-white items-center justify-center w-full lg:w-[208px] h-[52px] border border-primary rounded cursor-pointer">
              {t("header.scheduleText")}{" "}
              <FiArrowUpRight className="ml-2 text-[20px]" />
            </button>
          </div>
        </div>
      )}
      <div
        onClick={() => handleActive("Open Source")}
        className={`flex justify-between w-full h-[60px] px-[24px] py-[20px] disclosure ${
          active === "Open Source"
            ? " bg-gradient-to-r from-primary to-gradientColor text-white"
            : "bg-primaryLight text-bodyText"
        } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
      >
        <h3 className="font-semibold text-start text-base ">
          {t("home.services.title4")}
        </h3>
        <div className="w-[24px] h-[24px] flex items-center justify-center ml-1">
          <FiChevronDown
            className={`text-[20px] mt-[2px] icon ${
              active === "Open Source"
                ? "rotate-180 text-white"
                : "rotate-0 text-primary"
            }`}
          />
        </div>
      </div>
      {active === "Open Source" && (
        <div className="mb-8 transition ease-in-out duration-1000">
          <div className="flex  flex-col ">
            {" "}
            <span className="lg:text-base text-sm  text-heading mb-8">
              Our web development services are designed to bring your vision to
              life. We believe in delivering customized solutions that align
              with your unique business needs and objectives. Whether you need a
              simple landing page or a complex e-commerce platform, we have the
              expertise to create responsive, user-friendly, and visually
              stunning websites that engage your audience and drive conversions.
              From design to development and deployment, we work with you every
              step of the way to ensure your website meets your expectations and
              beyond.
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website planning and strategy development
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website design and layout creation
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Website development and coding
            </span>
            <span className="mb-4 text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Front-end development (HTML/CSS/JavaScript)
            </span>
            <span className="text-bodyText flex items-center lg:text-base text-sm">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Back-end development (server-side scripting and database
              integration)
            </span>
            <span className="lg:text-base text-sm  text-heading my-8">
              Here are some of the things that a web development company
              typically does for a client in the development department
            </span>
            <button className="flex text-white items-center justify-center w-full lg:w-[208px] h-[52px] border border-primary rounded cursor-pointer">
              {t("header.scheduleText")}{" "}
              <FiArrowUpRight className="ml-2 text-[20px]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DisclosureComponent;
