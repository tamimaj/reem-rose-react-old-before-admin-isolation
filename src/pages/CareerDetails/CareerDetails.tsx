import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";

import CareerForm from "../../components/Career/CareerForm/CareerForm";
import CustomToast from "../../components/CustomToast/CustomToast";
import { getCareersDetails } from "../../api/public/careers";
import { HtmlConverter } from "../../hooks/HtmlConverter/HtmlConverter";
import Loader from "../../components/Loader/Loader";

const CareerDetails = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [careerData, setCareerData] = useState<any>({});

  const getCareerDetails = async () => {
    setLoading(true);
    let response = await getCareersDetails(slug ? slug : "");
    if (!response || response?.status !== 200) {
      setLoading(false);
      setCareerData([]);
      toast(<CustomToast message={t("careers.detailsError")} />);
      return;
    }
    setCareerData(response?.data?.careerData);
    setLoading(false);
  };

  useEffect(() => {
    getCareerDetails();
  }, [slug]);

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[30vh]" />
        ) : (
          <div className="flex flex-col w-full mt-[64px] lg:mt-0 lg:w-[712px]">
            <div className="flex items-end justify-between">
              <h2 className="text-primary font-semibold text-semibold font-RobotoSlab">
                {careerData.role}
              </h2>
              <span className="text-bodyText text-sm">
                {moment(careerData.createdAt).format("DD.MM.YY")}{" "}
              </span>
            </div>
            <p
              className="flex flex-col w-full mt-[48px] text-white"
              dangerouslySetInnerHTML={HtmlConverter(careerData.description)}
            />
            <CareerForm careerId={careerData._id} />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerDetails;
