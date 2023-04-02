import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import blogImage1 from "../../../assets/tempImages/blogImage.png";
import blogImage2 from "../../../assets/tempImages/blogimage2.png";
import blogImage3 from "../../../assets/tempImages/blogImage3.png";
import blogImage4 from "../../../assets/tempImages/blogImage4.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type BlogCardType = {
  idx: any;
};
const BlogCard: React.FC<BlogCardType> = ({ idx }) => {
  const { i18n, t } = useTranslation();

  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="flex flex-col 3xl:w-[470px] rounded bg-primaryLight p-6">
      <img
        src={
          idx === 0
            ? blogImage1
            : idx === 1
            ? blogImage2
            : idx === 2
            ? blogImage3
            : idx === 3
            ? blogImage4
            : blogImage1
        }
        alt="blog Image"
        className="w-full xl:w-[421px] lg:h-[200px]"
      />
      <h5 className="mt-[32px] font-RobotoSlab font-semibold text-base text-white line-clamp-2">
        Behind the Scenes: The Role and Importance of Back-End Development in
        Creating Seamless User ...
      </h5>
      <div className="flex justify-between w-full text-sm text-bodyText mt-2">
        <span>By William Griffin</span>
        <span>12.12.2022</span>
      </div>
      <p className="text-base text-heading mt-4">
        TDD is not as difficult as it may sound if you have never tried it
        before. With practice, this methodology greatly improves your
        productivity, your confidence in your code, and your love for
        programming. There is an undeniable rush of dopamine when you see your
        red tests becoming green with every step, hence your algorithm emerging
        from that...
      </p>
      <div className="flex  text-sm text-primary mt-4 cursor-pointer">
        {t("blog.readingText")}
        {lang === "ar" ? (
          <FiChevronLeft className="text-[18px] ml-4 mt-[2px]" />
        ) : (
          <FiChevronRight className="text-[18px] ml-4 mt-[2px]" />
        )}
      </div>
      <div className="mt-[32px] flex flex-wrap text-sm text-white font-RobotoSlab">
        <span className="mr-2">#NestJS</span>
        <span className="mr-2">#React</span>
        <span className="mr-2">#PHP</span>
        <span className="mr-2">#C++</span>
        <span className="mr-2">#Ruby</span>
        <span className="mr-2">#Python</span>
        <span className="mr-2">+ 7 tags</span>
      </div>
    </div>
  );
};

export default BlogCard;
