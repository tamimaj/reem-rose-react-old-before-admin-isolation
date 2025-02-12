import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import CareerCard from "../../components/Career/CareerCard/CareerCard";
import { toast } from "react-toastify";
import CustomToast from "../../components/CustomToast/CustomToast";
import { getCareers } from "../../api/public/careers";
import Loader from "../../components/Loader/Loader";

const Careers = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const [careersData, setCareersData] = useState([]);
  const getCareersData = async () => {
    setLoading(true);
    let response = await getCareers();
    if (!response || response?.status !== 200) {
      setLoading(false);
      setCareersData([]);
      toast(<CustomToast message={t("careers.error")} />);
      return;
    }
    setCareersData(response?.data);
    setLoading(false);
  };

  useEffect(() => {
    getCareersData();
  }, []);
  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col w-full mt-[64px] lg:mt-0 lg:w-[712px]">
          <h2 className="text-white text-[24px] xs:text-[28px] lg:text-[32px] text-center mb-[48px]">
            {t("careers.heading")}
          </h2>
          {loading ? (
            <Loader className="h-[100vh]" />
          ) : (
            careersData?.map((career, idx) => (
              <CareerCard key={idx} careerData={career} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
