import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import moment from "moment";

import blogImage1 from "../../../assets/tempImages/blogImage.png";
import blogImage2 from "../../../assets/tempImages/blogimage2.png";
import blogImage3 from "../../../assets/tempImages/blogImage3.png";
import blogImage4 from "../../../assets/tempImages/blogImage4.png";
import LanguageDetector from "../../../hooks/LanguageDetector/LanguageDetector";

type BlogCardType = {
  idx: any;
  className?: string;
  data: {
    title: string;
    summary: string;
    createdAt: string;
    tags: string[];
    slug: string;
    coverImage: string;
  };
};
const BlogCard: React.FC<BlogCardType> = ({ idx, className, data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<string | null>("");

  LanguageDetector(setLang);

  return (
    <div
      className={`${className} flex flex-col w-auto 3xl:w-[470px] rounded bg-primaryLight p-6`}
    >
      <img
        src={data.coverImage}
        alt="blog Image"
        className="w-full xl:w-[421px] lg:h-[200px]"
      />
      <h5 className="mt-[32px] font-RobotoSlab font-semibold text-base text-white line-clamp-2">
        {data.title}
      </h5>
      <div className="flex justify-between w-full text-sm text-bodyText mt-2">
        <span>By Tamim</span>
        <span>{moment(data.createdAt).format("DD.MM.YY")}</span>
      </div>
      <p className="text-base text-heading mt-4">{data.summary}</p>
      <div
        onClick={() => navigate("/blog-post/" + data.slug)}
        className="flex  text-sm text-primary mt-4 cursor-pointer"
      >
        {t("blog.readingText")}
        {lang === "ar" ? (
          <FiChevronLeft className="text-[18px] ml-4 mt-[2px]" />
        ) : (
          <FiChevronRight className="text-[18px] ml-4 mt-[2px]" />
        )}
      </div>
      <div className="mt-[32px] flex flex-wrap text-sm text-white font-RobotoSlab">
        {data.tags.length > 0 &&
          data.tags.map((tag, idx) => (
            <span className="mr-2" key={idx}>
              #{tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default BlogCard;
