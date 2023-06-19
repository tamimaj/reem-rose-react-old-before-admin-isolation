import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CustomToast from "../../../components/CustomToast/CustomToast";
import { getBlogPosts } from "../../../api/private/blogs";
import Pagination from "../../../components/pagination/pagination";
import Loader from "../../../components/Loader/Loader";
import ROUTES from "../../../settings/ROUTES";
import Filter from "../../../components/Admin/Services/Filter/Filter";
import Table from "../../../components/Admin/Services/Table/Table";
import { getServices } from "../../../api/private/services";

interface ServiceType {
  _id: string;
  title: string;
  seoTitle: string;
}

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const pageData = queryParams.get("page");
  const searchKeyData = queryParams.get("search-key");
  const searchValueData = queryParams.get("search-value");
  const filterData = queryParams.get("filter");
  const sortData = queryParams.get("sort");

  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchKey, setSearchKey] = useState("title");
  const [sort, setSort] = useState("");
  const [servicesData, setServicesData] = useState<ServiceType[]>([]);

  const getServicesData = async () => {
    setLoading(true);
    const page = parseInt(pageData ? pageData : "1");
    let sortValue = null;

    if (sortData === "title-asc") {
      sortValue = { title: 1 };
      setSort("title asc");
    } else if (sortData === "title-desc") {
      sortValue = { title: -1 };
      setSort("title desc");
    } else if (sortData === "date-asc") {
      sortValue = { createdAt: 1 };
      setSort("date asc");
    } else if (sortData === "date-desc") {
      sortValue = { createdAt: -1 };
      setSort("date desc");
    }
    let response = await getServices(page, 10, searchKey, search, sortValue);
    if (!response || response?.status !== 200) {
      setLoading(false);
      setServicesData([]);
      setCount(0);
      toast(<CustomToast message={t("blog.error")} />);
      return;
    }
    setServicesData(response?.data?.data);
    setCount(response?.data?.count);
    setLoading(false);
  };

  useEffect(() => {
    if (searchKeyData && searchValueData) {
      setSearchKey(searchKeyData);
      setSearch(searchValueData);
      setSort("");
    } else if (filterData) {
      setSearch("");
      setSearchKey("title");
      setSort("");
    } else if (!searchValueData && !filterData && !sortData) {
      setSort("");
    }
    getServicesData();
  }, [searchValueData, pageData, filterData, sortData]);

  const handlePagination = (v: string | number) => {
    if (searchValueData) {
      if (sortData) {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_SERVICES +
            "?page=" +
            v +
            "&search-key=" +
            searchKeyData +
            "&search-value=" +
            searchValueData +
            "&sort=" +
            sortData
        );
      } else {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_SERVICES +
            "?page=" +
            v +
            "&search-key=" +
            searchKey +
            "&search-value=" +
            search
        );
      }
    } else if (filterData) {
      if (sortData) {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_SERVICES +
            "?page=" +
            v +
            "&filter=" +
            filterData +
            "&sort=" +
            sortData
        );
      } else {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_SERVICES +
            "?page=" +
            v +
            "&filter=" +
            filterData
        );
      }
    } else {
      if (sortData)
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_SERVICES +
            "?page=" +
            v +
            "&sort=" +
            sortData
        );
      else navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_SERVICES + "?page=" + v);
    }
  };
  return (
    <div className=" pt-4 pb-20 w-full overflow-x-hidden flex justify-center">
      <div className="flex w-full">
        <div className="flex flex-col w-[90%] xl:w-full">
          <Filter
            search={search}
            setSearch={setSearch}
            searchKey={searchKey}
            setSearchKey={setSearchKey}
            sort={sort}
            setSort={setSort}
            count={count}
          />

          {loading ? (
            <Loader className="h-[100vh]" />
          ) : (
            <div className="w-full my-6 overflow-x-scroll scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-gray-100">
              <Table
                servicesData={servicesData}
                getServicesData={getServicesData}
              />
            </div>
          )}
          <div className="flex w-full ml-[30%]  md:ml-0 md:justify-center items-center mt-[48px] text-heading text-sm">
            <Pagination
              className="flex justify-center items-center"
              currentPage={parseInt(pageData ? pageData : "1")}
              totalCount={count ? count : 0}
              pageSize={10}
              onPageChange={(v) => handlePagination(v)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
