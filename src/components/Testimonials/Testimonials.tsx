import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { testimonialData } from "../../helpers/temphelpers/tempHelpers";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div className="flex  w-full mt-[200px]">
      <div className="flex flex-col items-center w-full">
        <h6 className="text-white text-[32px] ">
          {t("home.testimonials.title")}
        </h6>
        <span className="mt-2 text-bodyText text-center text-base sm:w-[407px]">
          {t("home.testimonials.text")}
        </span>
        <div className="flex overflow-x-scroll scroll w-full px-1  2xl:w-[1440px] mt-[48px]">
          {testimonialData.map((data, idx) => (
            <Fragment key={idx}>
              <TestimonialCard data={data} />
            </Fragment>
          ))}
        </div>
        <div className="relative mt-[48px]">
          <button className="flex items-center justify-center w-[208px] h-[60px]  bg-transparent btn "></button>
          <span className="absolute text-white top-[20px] left-[61px]">
            {t("home.viewMore")}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
