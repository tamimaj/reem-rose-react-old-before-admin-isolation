import {
  useEffect,
  useState,
  Fragment,
  createElement,
  ReactNode,
  useRef,
  MouseEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import moment from "moment";

import BlogCard from "../../components/Blog/BlogCard/BlogCard";
import LanguageDetector from "../../hooks/LanguageDetector/LanguageDetector";
import { getSpecificPost } from "../../api/public/blogs";
import ROUTES from "../../settings/ROUTES";
import Loader from "../../components/Loader/Loader";
import AliceCarousel from "react-alice-carousel";
import { HtmlConverter } from "../../hooks/HtmlConverter/HtmlConverter";

interface PostType {
  _id: string;
  title: string;
  summary: string;
  slug: string;
  coverImage: string;
  content: string;

  categoriesData: [
    {
      name: string;
    }
  ];

  tags: string[];

  publishedAt: string;
}

const BlogPost = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [headings, setHeadings] = useState<any>([]);
  const [lang, setLang] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [postData, setPostData] = useState<PostType>({
    _id: "",
    title: "",
    summary: "",
    slug: "",
    coverImage: "",
    content: "",
    categoriesData: [{ name: "" }],
    tags: [],
    publishedAt: "",
  });
  const [relatedPosts, setRelatedPosts] = useState([]);

  const getPostData = async () => {
    if (slug) {
      setLoading(true);
      let response = await getSpecificPost(slug);
      if (!response || response?.status !== 200) {
        return;
      }
      setRelatedPosts(response.data.relatedPosts);
      setPostData(response.data.postData);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPostData();
  }, [slug]);

  LanguageDetector(setLang);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(relatedPosts.length - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < relatedPosts.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(postData.content, "text/html");
    const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];

    const headingElements = headingLevels.flatMap((level) =>
      Array.from(doc.querySelectorAll(level))
    );
    const headingContents = headingElements.map((headingElement, index) =>
      headingElement.tagName === "H1"
        ? createElement("h2", { key: index }, headingElement.textContent)
        : createElement(
            headingElement.tagName,
            { key: index },
            headingElement.textContent
          )
    );
    setHeadings(headingContents);
    let contentHeadingElements;
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentHeadingElements = contentElement.querySelectorAll(
        "h1, h2, h3,h4,h5,h6"
      );

      contentHeadingElements.forEach((headingElement) => {
        const element = headingElement as HTMLElement;
        element.style.fontWeight = "bold";
        element.style.fontSize = "20px";
        const headingId = headingElement.textContent;
        if (headingId) headingElement.id = headingId;
      });
    }
  }, [postData]);

  const responsive = {
    0: { items: 1 },
    767: { items: 2 },
    1024: { items: 3 },
  };
  const handleClick = (event: MouseEvent<HTMLDivElement>, idx: number) => {
    setActive(idx);
    const clickedElement = event.target as HTMLElement;
    console.log(clickedElement.textContent, "clickedElement");
    if (clickedElement.textContent)
      document?.getElementById(clickedElement.textContent)?.scrollIntoView();
  };

  return loading ? (
    <Loader className="h-[30vh]" />
  ) : (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col  items-center">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full lg:mt-0 mt-[64px]">
          <div className="flex flex-col">
            <Link
              to={ROUTES.BLOG}
              className="mb-6 text-primary text-base font-semibold flex items-center cursor-pointer"
            >
              {lang === "ar" ? (
                <FiChevronRight className="text-[20px] mr-4 mt-[1px]" />
              ) : (
                <FiChevronLeft className="text-[20px] mr-4 mt-[1px]" />
              )}
              {t("blog.backToBlog")}{" "}
            </Link>
            <h2 className="font-RobotoSlab font-semibold text-[20px] lg:text-[24px] text-white w-full md:w-[714px] ">
              {postData.title}
            </h2>
            <span className="text-sm text-bodyText ">
              {postData.categoriesData.map((category, idx) => (
                <Fragment key={idx}>
                  {category.name}
                  {postData.categoriesData.length !== idx + 1 && ", "}
                </Fragment>
              ))}
            </span>
            <div className="font-RobotoSlab flex flex-wrap text-sm text-primary mt-2">
              <span className="mr-2">#NestJS</span>
              {postData.tags.map((tag, idx) => (
                <Fragment key={idx}>
                  {postData.tags.length !== idx + 1 && "# "}
                  {tag}{" "}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-row lg:flex-col items-end lg:items-start justify-between mt-6 lg:mt-0 lg:justify-start">
            <div className="flex flex-col">
              <span className="text-heading text-base font-semibold">
                By Tamim
              </span>
              <span className="text-sm text-bodyText">Tech Lead</span>
              <span className="text-sm text-primary">
                {moment(postData.publishedAt).format("DD.MM.YY")}
              </span>
            </div>

            <div className="flex justify-between text-heading mt-4 w-[168px]">
              <div className="flex cursor-pointer">
                <AiOutlineTwitter className="w-[24px] h-[24px] mr-2" />
              </div>
              <div className="flex cursor-pointer">
                <AiFillGithub className="w-[24px] h-[24px] mr-2" />
              </div>
              <div className="flex cursor-pointer">
                <AiFillLinkedin className="w-[24px] h-[24px] mr-2" />
              </div>

              <div className="flex cursor-pointer">
                <BsGlobe className="w-[24px] h-[24px] mr-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[80px] flex w-full" ref={scrollRef}>
          <div className="hidden lg:flex flex-col  h-full">
            <div className="text-primary text-base min-w-[348px] max-w-[348px] h-full">
              <StickyBox className=" w-full " offsetTop={80} offsetBottom={0}>
                {headings.length > 0 &&
                  headings.map((heading: ReactNode, idx: number) => (
                    <div
                      className="flex items-center mb-6 cursor-pointer w-full"
                      onClick={(e) => handleClick(e, idx)}
                      key={idx}
                    >
                      {active === idx &&
                        (lang === "ar" ? (
                          <MdArrowLeft
                            className={`text-[32px] mr-2 text-primary mb-[2px]`}
                          />
                        ) : (
                          <MdArrowRight
                            className={`text-[32px] mr-2 text-primary mb-[2px]`}
                          />
                        ))}
                      {heading}
                    </div>
                  ))}
              </StickyBox>
            </div>
          </div>
          <div className="lg:ml-2 flex flex-col text-sm lg:text-base text-heading">
            <div
              dangerouslySetInnerHTML={HtmlConverter(postData.content)}
              id="content"
            />
            <Link
              to={ROUTES.BLOG}
              className="mt-6 text-primary text-base font-semibold hidden lg:flex items-center cursor-pointer"
            >
              {lang === "ar" ? (
                <FiChevronRight className="text-[20px] mr-4 mt-[2px]" />
              ) : (
                <FiChevronLeft className="text-[20px]  mt-[2px]" />
              )}
              {t("blog.backToBlog")}{" "}
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-full mt-[160px]">
          <div className="flex justify-between">
            <h4 className="text-[32px] text-white mb-6">
              {t("blog.relatedBlogPost")}
            </h4>

            <div className="hidden lg:flex my-6">
              <div
                onClick={() =>
                  lang === "ar" ? handleNext() : handlePrevious()
                }
                className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-white border-2 border-white rounded-full me-3  "
              >
                {lang === "ar" ? <HiArrowRight /> : <HiArrowLeft />}
              </div>
              <div
                onClick={() =>
                  lang === "ar" ? handlePrevious() : handleNext()
                }
                className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-white border-2 border-white rounded-full ms-3"
              >
                {lang === "ar" ? <HiArrowLeft /> : <HiArrowRight />}
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <AliceCarousel
              mouseTracking
              infinite
              disableDotsControls
              disableButtonsControls
              activeIndex={activeIndex}
              responsive={responsive}
              paddingLeft={20}
              paddingRight={5}
              items={relatedPosts.map((data, idx) => (
                <Fragment key={idx}>
                  <BlogCard className="mr-4 h-[451px]" data={data} />
                </Fragment>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
