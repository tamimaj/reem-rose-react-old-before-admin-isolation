import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { testimonialData } from "../../../helpers/temphelpers/tempHelpers";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div className="flex  w-full mt-[96px] lg:mt-[160px] xl:mt-[200px]">
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
        <button className="flex mt-[48px] text-white items-center justify-center w-full xs:w-[208px] h-[50px] xs:h-[60px] border border-primary rounded ">
          {t("home.viewMore")}{" "}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
