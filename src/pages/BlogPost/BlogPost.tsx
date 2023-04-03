import { RefObject, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { MdArrowLeft, MdArrowRight, MdOutlineCopyAll } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import StickyBox from "react-sticky-box";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import postImage from "../../assets/tempImages/postImage.png";
import BlogCard from "../../components/Blog/BlogCard/BlogCard";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost = () => {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState<string>("section 1");
  const [lang, setLang] = useState<string | null>("");
  const blogRef: RefObject<HTMLDivElement> = useRef(null);

  const handleScrollLeft = () => {
    if (blogRef.current) {
      const scrollElement = blogRef?.current;
      const scrollOffset = 160; // adjust this value to control the scroll amount
      scrollElement.scrollLeft -= scrollOffset;
    }
  };

  const handleScrollRight = () => {
    if (blogRef.current) {
      const scrollElement = blogRef?.current;
      const scrollOffset = 160; // adjust this value to control the scroll amount
      scrollElement.scrollLeft += scrollOffset;
    }
  };
  const handleScroll = (activeElement: string, elementName: string) => {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setActive(activeElement);
  };

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);
  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col  items-center">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full lg:mt-0 mt-[64px]">
          <div className="flex flex-col">
            <Link
              to={"/blog"}
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
              Behind the Scenes: The Role and Importance of Back-End Development
              in Creating Seamless User Experiences
            </h2>
            <span className="text-sm text-bodyText ">Back-end</span>
            <div className="font-RobotoSlab flex flex-wrap text-sm text-primary mt-2">
              <span className="mr-2">#NestJS</span>
              <span className="mr-2">#Python</span>
              <span className="mr-2">#React</span>
              <span className="mr-2">#PHP</span>
              <span className="mr-2">#React</span>
              <span className="mr-2">#C++</span>
              <span className="mr-2">#PHP</span>
              <span className="mr-2">#Ruby</span>
              <span className="mr-2">+6 More</span>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col items-end lg:items-start justify-between mt-6 lg:mt-0 lg:justify-start">
            <div className="flex flex-col">
              <span className="text-heading text-base font-semibold">
                By William Griffin
              </span>
              <span className="text-sm text-bodyText">Back-End Developer</span>
              <span className="text-sm text-primary">12.12.2022</span>
            </div>

            <div className="flex justify-between text-white mt-4 w-[168px]">
              <div className="flex cursor-pointer">
                <AiFillGithub className="w-[24px] h-[24px] mr-2" />
              </div>
              <div className="flex cursor-pointer">
                <AiFillLinkedin className="w-[24px] h-[24px] mr-2" />
              </div>
              <div className="flex cursor-pointer">
                <AiOutlineTwitter className="w-[24px] h-[24px] mr-2" />
              </div>
              <div className="flex cursor-pointer">
                <BsGlobe className="w-[24px] h-[24px] mr-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[80px] flex w-full">
          <div className="hidden lg:flex flex-col  h-full">
            <div className="text-primary text-base min-w-[348px] max-w-[348px] h-full">
              <StickyBox className=" w-full " offsetTop={80} offsetBottom={0}>
                <div
                  className="flex items-center mb-6 cursor-pointer w-full"
                  onClick={() => handleScroll("section 1", "title1")}
                >
                  {active === "section 1" &&
                    (lang === "ar" ? (
                      <MdArrowLeft
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ) : (
                      <MdArrowRight
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ))}

                  <span>Epilogue of the coding</span>
                </div>

                <div
                  className="flex items-center mb-6 cursor-pointer w-full"
                  onClick={() => handleScroll("section 2", "title2")}
                >
                  {active === "section 2" &&
                    (lang === "ar" ? (
                      <MdArrowLeft
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ) : (
                      <MdArrowRight
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ))}

                  <span>Things that are important in back end development</span>
                </div>

                <div
                  className="flex items-center mb-6 cursor-pointer w-full"
                  onClick={() => handleScroll("section 3", "title3")}
                >
                  {active === "section 3" &&
                    (lang === "ar" ? (
                      <MdArrowLeft
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ) : (
                      <MdArrowRight
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ))}
                  <div>Some other title of the thing</div>
                </div>

                <div
                  className="flex items-center mb-6 cursor-pointer w-full"
                  onClick={() => handleScroll("section 4", "title4")}
                >
                  {active === "section 4" &&
                    (lang === "ar" ? (
                      <MdArrowLeft
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ) : (
                      <MdArrowRight
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ))}
                  <div>More text for the titles</div>
                </div>
                <div
                  className="flex items-center mb-6 cursor-pointer w-full"
                  onClick={() => handleScroll("section 5", "title5")}
                >
                  {active === "section 5" &&
                    (lang === "ar" ? (
                      <MdArrowLeft
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ) : (
                      <MdArrowRight
                        className={`text-[32px] mr-6 text-primary mb-[2px]`}
                      />
                    ))}
                  <div>Things that are important in back end development</div>
                </div>
              </StickyBox>
            </div>
          </div>
          <div className="lg:ml-2 flex flex-col text-sm lg:text-base text-heading">
            <Element name="title1">
              <h5 className="text-[20px] font-semibold text-white">
                Epilogue of the coding
              </h5>
            </Element>
            <p className="mt-2">
              In a previous article, I presented a handy tool to deal with
              complex test dependencies: mocking and stubbing with the help of
              @golevelup/ts-jest. Although a valuable subject to discuss, it was
              narrowly scoped (with the good intention of making it easy to
              read). Nevertheless, there is another tool that I deem of higher
              priority to unlock the full potential of automated tests:
              Test-Driven Development (TDD). TDD is not as difficult as it may
              sound if you have never tried it before. With practice, this
              methodology greatly improves your productivity, your confidence in
              your code, and your love for programming. There is an undeniable
              rush of dopamine when you see your red tests becoming green with
              every step, hence your algorithm emerging from that. This will be
              the first article of a TDD series. Here, we aim to expose the
              fundamentals of TDD and how to apply it to the Nest ecosystem. In
              the upcoming posts, we'll dive deeper into integration test
              challenges and how a BDD mindset helps us with that. As a final
              note, you can check this github repository containing all the code
              used within this article, commit by commit, to help you in case
              you miss the big picture.
            </p>
            <p className="mt-6">
              TDD is not as difficult as it may sound if you have never tried it
              before. With practice, this methodology greatly improves your
              productivity, your confidence in your code, and your love for
              programming. There is an undeniable rush of dopamine when you see
              your red tests becoming green with every step, hence your
              algorithm emerging from that. This will be the first article of a
              TDD series. Here, we aim to expose the fundamentals of TDD and how
              to apply it to the Nest ecosystem. In the upcoming posts, we'll
              dive deeper into integration test challenges and how a BDD mindset
              helps us with that. As a final note, you can check this github
              repository containing all the code used within this article,
              commit by commit, to help you in case you miss the big picture.
            </p>

            <div className="w-full flex relative bg-primaryLight p-2 sm:p-3 lg:p-6 my-6 rounded">
              <SyntaxHighlighter
                language="javascript"
                wrapLongLines
                style={atomDark}
                customStyle={{ background: "transparent" }}
                className="w-[200px] xs:w-[300px] sm:w-[400px] lg:w-[500px] scroll"
              >{`
import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentService } from './appointment.service';

describe('AppointmentService', () => {  let service: AppointmentService; 
beforeEach(async () => {   
const module: TestingModule = await Test.createTestingModule({providers: [AppointmentService],}).compile(); 
service = module.get<AppointmentService>(AppointmentService);  }); 
it('should be defined', () => {    expect(service).toBeDefined();  });
it('should schedule an unconfirmed appointment for a user on success',
() => {    const startTime = new Date('2022-01-01T14:00:00Z');    
const endTime = new Date('2022-01-01T15:00:00Z');   
const newAppointment = service.scheduleAppointment({ patientId: 1,startTime,endTime});  
expect(newAppointment).toEqual({patientId: 1,startTime,endTime,confirmed: false,}); 
                             });});
              `}</SyntaxHighlighter>
              <div className="flex absolute top-[16px] right-[16px] items-center justify-center w-[40px] h-[40px] rounded cursor-pointer bg-primaryLight">
                <MdOutlineCopyAll className=" text-[24px] text-primary" />
              </div>
            </div>
            <Element name="title2">
              {" "}
              <h5 className="text-[20px] font-semibold text-white">
                Things that are important in back-end development
              </h5>
            </Element>
            <p className="mt-2">
              TDD is not as difficult as it may sound if you have never tried it
              before. With practice, this methodology greatly improves your
              productivity, your confidence in your code, and your love for
              programming. There is an undeniable rush of dopamine when you see
              your red tests becoming green with every step, hence your
              algorithm emerging from that. This will be the first article of a
              TDD series. Here, we aim to expose the fundamentals of TDD and how
              to apply it to the Nest ecosystem. In the upcoming posts, we'll
              dive deeper into integration test challenges and how a BDD mindset
              helps us with that. As a final note, you can check this github
              repository containing all the code used within this article,
              commit by commit, to help you in case you miss the big picture.
            </p>
            <img
              src={postImage}
              alt="postImage"
              className="w-full lg:w-[590px] md:h-[590px] rounded my-8"
            />

            <p>
              In a previous article, I presented a handy tool to deal with
              complex test dependencies: mocking and stubbing with the help of
              @golevelup/ts-jest. Although a valuable subject to discuss, it was
              narrowly scoped (with the good intention of making it easy to
              read). Nevertheless, there is another tool that I deem of higher
              priority to unlock the full potential of automated tests:
              Test-Driven Development (TDD). TDD is not as difficult as it may
              sound if you have never tried it before. With practice, this
              methodology greatly improves your productivity, your confidence in
              your code, and your love for programming. There is an undeniable
              rush of dopamine when you see your red tests becoming green with
              every step, hence your algorithm emerging from that. This will be
              the first article of a TDD series. Here, we aim to expose the
              fundamentals of TDD and how to apply it to the Nest ecosystem. In
              the upcoming posts, we'll dive deeper into integration test
              challenges and how a BDD mindset helps us with that. As a final
              note, you can check this github repository containing all the code
              used within this article, commit by commit, to help you in case
              you miss the big picture.
            </p>
            <Link
              to={"/blog"}
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
                  lang === "ar" ? handleScrollRight() : handleScrollLeft()
                }
                className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-white border-2 border-white rounded-full me-3  "
              >
                {lang === "ar" ? <HiArrowRight /> : <HiArrowLeft />}
              </div>
              <div
                onClick={() =>
                  lang === "ar" ? handleScrollLeft() : handleScrollRight()
                }
                className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer text-white border-2 border-white rounded-full ms-3"
              >
                {lang === "ar" ? <HiArrowLeft /> : <HiArrowRight />}
              </div>
            </div>
          </div>
          <div ref={blogRef} className="flex w-full overflow-x-scroll scroll">
            {[...Array(4)].map((v, idx) => (
              <BlogCard idx={idx} className="mr-4 min-w-[470px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
