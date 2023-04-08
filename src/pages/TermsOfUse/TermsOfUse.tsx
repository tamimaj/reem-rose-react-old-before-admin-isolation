import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element, scroller } from "react-scroll";

const TermsOfUse = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string>("intro");

  const firstScroll = () => {
    scroller.scrollTo("intro", {
      duration: 800,
      delay: 0,
      containerId: "parentId",
      smooth: "easeInOutQuart",
    });
    setSelected("intro");
  };

  const secondScroll = () => {
    scroller.scrollTo("data", {
      duration: 800,
      delay: 0,
      containerId: "parentId",
      smooth: "easeInOutQuart",
    });
    setSelected("data");
  };
  const thirdScroll = () => {
    scroller.scrollTo("tech", {
      duration: 800,
      delay: 0,
      containerId: "parentId",
      smooth: "easeInOutQuart",
    });
    setSelected("tech");
  };
  const forthScroll = () => {
    scroller.scrollTo("rights", {
      duration: 800,
      delay: 0,
      containerId: "parentId",
      smooth: "easeInOutQuart",
    });
    setSelected("rights");
  };

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full mt-[64px] lg:mt-0 lg:w-[954px]">
          <h2 className="text-white md:w-[712px] text-[24px] xs:text-[28px] lg:text-[32px] text-center">
            {t("terms.heading")}
          </h2>

          <div className="flex w-full flex-col mt-[80px]">
            <div className="flex w-full overflow-x-scroll scroll">
              <div className="flex w-full text-base justify-center min-w-[738px] text-bodyText  mb-8">
                <span
                  onClick={firstScroll}
                  className={`hover:text-primary hover:font-semibold mr-6 cursor-pointer`}
                >
                  {t("terms.title1")}
                </span>
                <span
                  onClick={secondScroll}
                  className={`hover:text-primary hover:font-semibold mr-6 cursor-pointer`}
                >
                  {t("terms.title2")}
                </span>
                <span
                  onClick={thirdScroll}
                  className={`hover:text-primary hover:font-semibold mr-6 cursor-pointer`}
                >
                  {t("terms.title3")}
                </span>
                <span
                  onClick={forthScroll}
                  className={`hover:text-primary hover:font-semibold mr-6 cursor-pointer`}
                >
                  {t("terms.title4")}
                </span>
              </div>
            </div>
            <div className="w-full bg-primaryLight rounded py-6 px-4 lg:p-[48px] ">
              <div
                id="parentId"
                className="w-full h-[848px]  overflow-y-scroll scroll"
              >
                <Element name="intro">
                  <p className="text-base font-semibold text-white mb-2">
                    {t("terms.title1")}{" "}
                  </p>
                </Element>
                <p className="text-base text-lightWhite mb-8">
                  {t("terms.titleData1")}
                </p>
                <Element name="data">
                  <p className="text-base font-semibold text-white mb-2">
                    {t("terms.title2")}
                  </p>
                </Element>
                <p className="text-base text-lightWhite mb-8">
                  {t("terms.titleData2")}
                </p>

                <Element name="tech">
                  <p className="text-base font-semibold text-white mb-2">
                    {t("terms.title3")}
                  </p>
                </Element>
                <p className="text-base text-lightWhite ">
                  {t("terms.titleData3.paragraph1")}
                </p>
                <p className="text-base text-lightWhite ">
                  {t("terms.titleData3.paragraph2")}
                </p>
                <div className="flex flex-col  font-text text-lightWhite mb-8">
                  <div className="flex ">
                    <div>{t("terms.titleData3.paragraph3")}</div>
                  </div>
                  <div className="flex ">
                    <div>{t("terms.titleData3.paragraph4")}</div>
                  </div>
                </div>
                <Element name="rights">
                  <p className="text-base font-semibold text-white mb-2">
                    {" "}
                    {t("terms.title4")}
                  </p>
                </Element>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.paragraph")}
                </p>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.point1")}
                </p>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.point2")}
                </p>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.point3")}
                </p>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.point4")}
                </p>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.point5")}
                </p>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.point6")}
                </p>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.point7")}
                </p>
                <p className="font-text text-lightWhite ">
                  {t("terms.titleData4.point8")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
