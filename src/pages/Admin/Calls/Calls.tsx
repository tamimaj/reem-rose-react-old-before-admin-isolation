import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CustomToast from "../../../components/CustomToast/CustomToast";
import Pagination from "../../../components/pagination/pagination";
import Loader from "../../../components/Loader/Loader";
import ROUTES from "../../../settings/ROUTES";
import { getCalls } from "../../../api/private/call";
import Filter from "../../../components/Admin/Calls/Filter/Filter";
import Table from "../../../components/Admin/Calls/Table/Table";

interface CallType {
  _id: string;
  requestorName: string;
  requestorEmail: string;
  startDate: string;
  endDate: string;
}

const Calls = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const pageData = queryParams.get("page");
  const searchKeyData = queryParams.get("search-key");
  const searchValueData = queryParams.get("search-value");
  const sortData = queryParams.get("sort");

  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchKey, setSearchKey] = useState("requestorName");
  const [sort, setSort] = useState("");
  const [callData, setCallsData] = useState<CallType[]>([]);

  const getCallData = async () => {
    setLoading(true);
    const page = parseInt(pageData ? pageData : "1");
    let sortValue = null;

    if (sortData === "email-asc") {
      sortValue = { requestorEmail: 1 };
      setSort("email asc");
    } else if (sortData === "email-desc") {
      sortValue = { requestorEmail: -1 };
      setSort("email desc");
    } else if (sortData === "date-asc") {
      sortValue = { createdAt: 1 };
      setSort("date asc");
    } else if (sortData === "date-desc") {
      sortValue = { createdAt: -1 };
      setSort("date desc");
    }
    let response = await getCalls(page, 10, searchKey, search, sortValue);
    if (!response || response?.status !== 200) {
      setLoading(false);
      setCallsData([]);
      setCount(0);
      toast(<CustomToast message={"Calls Not Found"} />);
      return;
    }
    setCallsData(response?.data?.data);
    setCount(response?.data?.count);
    setLoading(false);
  };

  useEffect(() => {
    if (searchKeyData && searchValueData) {
      setSearchKey(searchKeyData);
      setSearch(searchValueData);
      setSort("");
    } else if (!searchValueData && !sortData) {
      setSort("");
    }
    getCallData();
  }, [searchValueData, pageData, sortData]);

  const handlePagination = (v: string | number) => {
    if (searchValueData) {
      if (sortData) {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_CALLS +
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
            ROUTES.ADMIN_CALLS +
            "?page=" +
            v +
            "&search-key=" +
            searchKey +
            "&search-value=" +
            search
        );
      }
    } else {
      if (sortData)
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_CALLS +
            "?page=" +
            v +
            "&sort=" +
            sortData
        );
      else navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_CALLS + "?page=" + v);
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
              <Table callData={callData} getCallData={getCallData} />
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

export default Calls;
