import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import { testimonialData } from "../../../helpers/temphelpers/tempHelpers";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const { t } = useTranslation();

  const slider = document.querySelector(".testimonials") as HTMLElement;
  let mouseDown = false;
  let startX: any, scrollLeft: any;

  let startDragging = function (e: MouseEvent) {
    mouseDown = true;
    startX = e.pageX - slider?.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function () {
    mouseDown = false;
  };

  slider?.addEventListener("mousemove", (e: any) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider?.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  });
  slider?.addEventListener("mousedown", startDragging, false);
  slider?.addEventListener("mouseup", stopDragging, false);
  slider?.addEventListener("mouseleave", stopDragging, false);
  return (
    <div className="flex  w-full mt-[96px] lg:mt-[160px] xl:mt-[200px]">
      <div className="flex flex-col items-center w-full">
        <h6 className="text-white text-[32px] ">
          {t("home.testimonials.title")}
        </h6>
        <span className="mt-2 text-bodyText text-center text-base sm:w-[407px]">
          {t("home.testimonials.text")}
        </span>
        <div className="flex testimonials overflow-x-scroll scroll w-full px-1  2xl:w-[1440px] mt-[48px]">
          {testimonialData.map((data, idx) => (
            <Fragment key={idx}>
              <TestimonialCard data={data} />
            </Fragment>
          ))}
        </div>
        <button className="flex mt-[48px] text-white items-center justify-center w-full lg:w-[208px] h-[50px] xs:h-[60px] border border-primary rounded ">
          {t("home.viewMore")}{" "}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
