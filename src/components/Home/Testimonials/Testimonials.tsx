import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AliceCarousel from "react-alice-carousel";

import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { getTestimonials } from "../../../api/public/testimonials";
import Loader from "../../Loader/Loader";
import { toast } from "react-toastify";
import CustomToast from "../../CustomToast/CustomToast";

interface TestimonialDataProps {
  name: string;
  profileImage: string;
  profession: string;
  socialLinks: [
    {
      provider: string;
      link: string;
    }
  ];
  review: string;
  reviewAddedAt: string;
}

const Testimonials = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [testimonialData, setTestimonialData] = useState<
    TestimonialDataProps[]
  >([]);

  const getTestimonialData = async () => {
    setLoading(true);
    let response = await getTestimonials();
    if (response?.status === 200) {
      setTestimonialData(response.data);
    } else {
      toast(<CustomToast message={"Testimonials Not found"} />);
      console.log("error occurred:", response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTestimonialData();
  }, []);

  const responsive = {
    0: { items: 1 },
    767: { items: 2 },
    1024: { items: 3 },
    1500: { items: 4 },
  };
  return testimonialData.length > 0 ? (
    <div className="flex  w-full mt-[96px] lg:mt-[160px] xl:mt-[200px]">
      {loading ? (
        <Loader className="h-[30vh]" />
      ) : (
        <div className="flex flex-col items-center w-full">
          <h6 className="text-white text-[32px] ">
            {t("home.testimonials.title")}
          </h6>
          <span className="mt-2 text-bodyText text-center text-base sm:w-[407px]">
            {t("home.testimonials.text")}
          </span>
          <div className="flex justify-center  w-full px-1  2xl:w-[1440px] mt-[48px] cursor-grab">
            <AliceCarousel
              mouseTracking
              infinite
              disableDotsControls
              disableButtonsControls
              activeIndex={1}
              responsive={responsive}
              paddingLeft={20}
              paddingRight={5}
              items={testimonialData.map((data, idx) => (
                <Fragment key={idx}>
                  <TestimonialCard data={data} />
                </Fragment>
              ))}
            />
          </div>
          {/* <button className="flex mt-[48px] text-white items-center justify-center w-full lg:w-[208px] h-[50px] xs:h-[60px] border border-primary rounded ">
          {t("home.viewMore")}{" "}
        </button> */}
        </div>
      )}
    </div>
  ) : (
    <div></div>
  );
};

export default Testimonials;
