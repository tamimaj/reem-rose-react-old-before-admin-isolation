import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CustomToast from "../../components/CustomToast/CustomToast";
import Pagination from "../../components/pagination/pagination";
import { getProjectsData } from "../../api/public/projects";
import Loader from "../../components/Loader/Loader";
import PortFolioCard from "../../components/Portfolio/PortfolioCard/PortFolioCard";

const Portfolio = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pageData = queryParams.get("page");

  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [portfolioData, setPortfolioData] = useState([]);

  const getPortfolioData = async () => {
    setLoading(true);
    const page = parseInt(pageData ? pageData : "1");
    let response = await getProjectsData(page, 4);
    if (!response || response?.status !== 200) {
      setLoading(false);
      setPortfolioData([]);
      setCount(0);
      toast(<CustomToast message={t("blog.error")} />);
      return;
    }
    setPortfolioData(response?.data?.data);
    setCount(response?.data?.count);
    setLoading(false);
  };

  useEffect(() => {
    getPortfolioData();
  }, [pageData]);

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full mt-[64px] lg:mt-0 lg:w-[954px]">
          <h2 className="text-white md:w-[712px] text-[24px] xs:text-[28px] lg:text-[32px] text-center">
            {t("portfolio.heading")}
          </h2>
          <span className="md:w-[470px] text-center text-bodyText text-sm lg:text-base mt-4">
            {t("portfolio.tagline")}
          </span>
        </div>
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          portfolioData &&
          portfolioData?.length > 0 && (
            <div className="flex flex-col mt-[48px] lg:mt-[80px] w-full">
              {portfolioData?.map((data, idx) => (
                <PortFolioCard projectData={data} key={idx} idx={idx} />
              ))}
            </div>
          )
        )}
        <div className="flex items-center mt-[48px] text-heading text-sm">
          <Pagination
            className="flex justify-center items-center"
            currentPage={parseInt(pageData ? pageData : "1")}
            totalCount={count ? count : 0}
            pageSize={9}
            onPageChange={(v) => navigate("/blog?page=" + v)}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
