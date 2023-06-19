import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CustomToast from "../../../components/CustomToast/CustomToast";
import Pagination from "../../../components/pagination/pagination";
import Loader from "../../../components/Loader/Loader";
import ROUTES from "../../../settings/ROUTES";
import { getProjects } from "../../../api/private/projects";
import Filter from "../../../components/Admin/Projects/Filter/Filter";
import Table from "../../../components/Admin/Projects/Table/Table";

interface ProjectType {
  _id: string;
  title: string;
  coverImage: string;
  serviceProvidedAt: Date;
}

const Projects = () => {
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
  const [searchKey, setSearchKey] = useState("title");
  const [sort, setSort] = useState("");
  const [projectData, setProjectsData] = useState<ProjectType[]>([]);

  const getProjectData = async () => {
    setLoading(true);
    const page = parseInt(pageData ? pageData : "1");
    let sortValue = null;
    if (sortData === "title-asc") {
      sortValue = { title: 1 };
      setSort("title asc");
    } else if (sortData === "title-desc") {
      sortValue = { title: -1 };
      setSort("title desc");
    } else if (sortData === "description-asc") {
      sortValue = { description: 1 };
      setSort("description asc");
    } else if (sortData === "description-desc") {
      sortValue = { description: -1 };
      setSort("description desc");
    } else if (sortData === "date-asc") {
      sortValue = { createdAt: 1 };
      setSort("date asc");
    } else if (sortData === "date-desc") {
      sortValue = { createdAt: -1 };
      setSort("date desc");
    }
    let response = await getProjects(page, 10, searchKey, search, sortValue);
    if (!response || response?.status !== 200) {
      setLoading(false);
      setProjectsData([]);
      setCount(0);
      toast(<CustomToast message={"Projects Not found"} />);
      return;
    }
    setProjectsData(response?.data?.data);
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
    getProjectData();
  }, [searchValueData, pageData, sortData]);

  const handlePagination = (v: string | number) => {
    if (searchValueData) {
      if (sortData) {
        navigate(
          ROUTES.ADMIN_HOME +
            ROUTES.ADMIN_PROJECTS +
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
            ROUTES.ADMIN_PROJECTS +
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
            ROUTES.ADMIN_PROJECTS +
            "?page=" +
            v +
            "&sort=" +
            sortData
        );
      else navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_PROJECTS + "?page=" + v);
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
                projectData={projectData}
                getProjectData={getProjectData}
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

export default Projects;
