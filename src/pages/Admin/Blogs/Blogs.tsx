import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import StatusTag from "../../../components/Admin/Blog/StatusTag/StatusTag";
import Modal from "../../../components/Modals/Modal";
import CustomToast from "../../../components/CustomToast/CustomToast";
import { toast } from "react-toastify";
import { getBlogPosts } from "../../../api/private/blogs";
import Filter from "../../../components/Admin/Blog/Filter/Filter";
import Pagination from "../../../components/pagination/pagination";
import Loader from "../../../components/Loader/Loader";
import { MdDeleteOutline } from "react-icons/md";

interface BlogType {
  _id: string;
  title: string;
  coverImage: string;
  summary: string;
  categoriesData: [
    {
      name: string;
    }
  ];
  isPublished: boolean;
}

const Blogs = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const pageData = queryParams.get("page");
  const searchData = queryParams.get("search");
  const category = queryParams.get("category");

  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchKey, setSearchKey] = useState("title");
  const [blogData, setBlogData] = useState<BlogType[]>([]);

  const getBlogData = async () => {
    setLoading(true);
    const page = parseInt(pageData ? pageData : "1");
    let response = await getBlogPosts(page, 10, searchKey, search, category);
    if (!response || response?.status !== 200) {
      setLoading(false);
      setBlogData([]);
      setCount(0);
      toast(<CustomToast message={t("blog.error")} />);
      return;
    }
    setBlogData(response?.data?.data);
    setCount(response?.data?.count);
    setLoading(false);
  };

  useEffect(() => {
    if (searchData) {
      setSearch(searchData);
    } else if (category) {
      setSearch("");
      setSearchKey("");
    }
    getBlogData();
  }, [searchData, pageData, category]);

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex w-full">
          <div className="flex flex-col w-[90%] xl:w-full">
            <Filter search={search} setSearch={setSearch} />

            {loading ? (
              <Loader className="h-[100vh]" />
            ) : (
              <div className="w-full my-6 overflow-x-scroll scroll">
                <table className="xl:w-full w-[95%] min-w-[1200px] border-separate border-spacing-x-0 border-spacing-y-[10px]">
                  <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
                    <tr>
                      <td className="pl-4 w-[300px]">
                        {t("admin.postTable.heading1")}
                      </td>
                      <td className="w-[300px]">
                        {t("admin.postTable.heading2")}
                      </td>
                      <td className="w-[400px]">
                        {t("admin.postTable.heading3")}
                      </td>
                      <td className="w-[300px]">
                        {t("admin.postTable.heading4")}
                      </td>
                      <td className="text-center w-[100px]">
                        {t("admin.postTable.heading5")}
                      </td>
                      <td className="text-center w-[100px]">
                        {t("admin.postTable.heading6")}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {blogData.map((v, idx) => (
                      <tr key={idx} className="text-white">
                        <td className="pb-[9px]">{v._id}</td>
                        <td className="flex w-[300px]">
                          <img
                            src={v.coverImage}
                            alt={v.title}
                            className="w-[30px] h-[25px]"
                          />{" "}
                          <span className="ml-4">{v.title}</span>
                        </td>
                        <td>{v.summary}</td>
                        <td>
                          {v.categoriesData.map((category, idx) => (
                            <>
                              {category.name}{" "}
                              {v.categoriesData.length !== idx + 1 && " , "}
                            </>
                          ))}
                        </td>
                        <td className="flex justify-center items-center">
                          {v.isPublished ? (
                            <StatusTag
                              value="Published"
                              className="text-primary bg-primaryLight"
                            />
                          ) : (
                            <StatusTag
                              value="Draft"
                              className="text-yellow bg-lightYellow"
                            />
                          )}
                        </td>
                        <td className="w-[100px] ">
                          <span className="flex justify-center">
                            <BsPlus className="text-primary text-[20px] cursor-pointer" />
                            <AiOutlineEdit className="text-primary text-[20px] cursor-pointer" />
                            <MdDeleteOutline className="text-primary text-[20px] cursor-pointer" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="flex w-full ml-[30%]  md:ml-0 md:justify-center items-center mt-[48px] text-heading text-sm">
              <Pagination
                className="flex justify-center items-center"
                currentPage={parseInt(pageData ? pageData : "1")}
                totalCount={count ? count : 0}
                pageSize={10}
                onPageChange={(v) => navigate("/admin?page=" + v)}
              />
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setDialogOpen={setModalOpen} />}
    </div>
  );
};

export default Blogs;
