import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import BlogFilter from "../../components/Blog/BlogFilter/BlogFilter";
import BlogCard from "../../components/Blog/BlogCard/BlogCard";
import CustomToast from "../../components/CustomToast/CustomToast";
import { getBlogPosts } from "../../api/public/blogs";
import Pagination from "../../components/pagination/pagination";
import Loader from "../../components/Loader/Loader";
import { getCategories } from "../../api/public/categories";

const Blogs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useLocation();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState({ title: "" });
  const [blogData, setBlogData] = useState([]);
  const [categoriesData, setCategoriesData] = useState<any>([]);

  const getBlogData = async () => {
    setLoading(true);
    const page = parseInt(params.page ? params.page : "1");
    let response = await getBlogPosts(page, 9, params?.title, params?.category);
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
  const getCategoriesData = async () => {
    setLoading(true);
    let response = await getCategories();
    if (!response || response?.status !== 200) {
      setLoading(false);

      toast(<CustomToast message={t("blog.CategoriesError")} />);
      return;
    }
    setCategoriesData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (params?.title) {
      setSearch({ title: params?.title });
    } else if (params?.category) {
      setSearch({ title: "" });
    }
    getBlogData();
  }, [params?.title, params?.page, params?.category]);

  useEffect(() => {
    getCategoriesData();
  }, []);
  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] min-h-[88vh] flex flex-col overflow-x-hidden items-center">
        <div className=" flex flex-col items-center w-full  sm:w-[379px] lg:w-[974px] mt-[64px] lg:mt-0">
          <h1 className="font-PlusJakartaSans text-[28px] text-center lg:text-[48px] text-white">
            {t("blog.title")}
          </h1>
          <span className="font-PlusJakartaSans text-center text-base text-bodyText mt-2 xs:w-[350px] lg:w-[470px]">
            {t("blog.tagline")}
          </span>
        </div>
        <BlogFilter
          search={search}
          setSearch={setSearch}
          categoriesData={categoriesData}
        />
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <>
            {blogData && blogData?.length > 0 ? (
              <div className="mt-6 lg:mt-[48px] grid w-full xl:w-auto lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {blogData.map((v, idx) => (
                  <BlogCard idx={idx} key={idx} data={v} />
                ))}
              </div>
            ) : (
              <div className="text-white mt-12">No Posts Found</div>
            )}
            <div className="flex items-center mt-8 lg:mt-[48px] text-heading text-sm">
              <Pagination
                className="flex justify-center items-center"
                currentPage={parseInt(params?.page ? params?.page : "1")}
                totalCount={count ? count : 0}
                pageSize={9}
                onPageChange={(v) =>
                  navigate("/blog/" + v, { state: { page: v } })
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
