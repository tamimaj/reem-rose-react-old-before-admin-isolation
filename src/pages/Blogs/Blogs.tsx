import { useTranslation } from "react-i18next";

import BlogFilter from "../../components/Blog/BlogFilter/BlogFilter";
import BlogCard from "../../components/Blog/BlogCard/BlogCard";

const Blogs = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className=" flex flex-col items-center w-full  sm:w-[379px] lg:w-[974px]">
          <h1 className="font-PlusJakartaSans text-[28px] text-center lg:text-[48px] text-white">
            {t("blog.title")}
          </h1>
          <span className="font-PlusJakartaSans text-center text-base text-bodyText mt-2 xs:w-[350px] lg:w-[470px]">
            {t("blog.tagline")}
          </span>
        </div>
        <BlogFilter />
        <div className="mt-[48px] grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...Array(9)].map((v, idx) => (
            <BlogCard idx={idx} />
          ))}
        </div>
        <div className="flex items-center mt-[48px] text-heading text-sm">
          <span className="mr-6">{t("pagination.previous")}</span>
          <span className="mr-4">1</span>
          <span className="mr-4">2</span>
          <span>3</span>
          <span className="ml-6">{t("pagination.next")}</span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
