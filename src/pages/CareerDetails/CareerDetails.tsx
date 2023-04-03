import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import CareerForm from "../../components/Career/CareerForm/CareerForm";

const CareerDetails = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<string | null>("");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col w-full mt-[64px] lg:mt-0 lg:w-[712px]">
          <div className="flex items-end justify-between">
            <h2 className="text-primary font-semibold text-semibold font-RobotoSlab">
              Senior Back End Developer
            </h2>
            <span className="text-bodyText text-sm">12.02.23</span>
          </div>
          <div className="flex flex-col w-full mt-[48px]">
            <h6 className="text-heading text-base font-semibold">
              {t("careers.title1")}:
            </h6>
            <span className="mt-2 text-lightWhite">Remote</span>
          </div>
          <div className="flex flex-col w-full mt-[48px]">
            <h6 className="text-heading text-base font-semibold">
              {t("careers.title2")}:
            </h6>
            <span className="mt-2 text-lightWhite">
              We are a fast-growing technology company that provides innovative
              solutions to businesses around the world. We are looking for a
              highly motivated and experienced Back End Developer to join our
              dynamic team and help us build robust and scalable systems.
            </span>
          </div>
          <div className="flex flex-col w-full mt-[48px]">
            <h6 className="text-heading text-base font-semibold">
              {t("careers.title3")}:
            </h6>
            <span className="mt-2 text-lightWhite">
              The Back End Developer will be responsible for designing,
              developing, and maintaining the company's back-end systems. They
              will work closely with the front-end development team, data
              analysts, and project managers to ensure that all systems are
              integrated and operate efficiently. The ideal candidate should
              have a strong background in software development and be familiar
              with the latest technologies and programming languages.
            </span>
          </div>
          <div className="flex flex-col w-full mt-[48px]">
            <h6 className="text-heading text-base font-semibold mb-6">
              {t("careers.title4")}:
            </h6>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Develop and maintain the company's back-end systems.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Write efficient, scalable, and maintainable code.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Collaborate with front-end developers, data analysts, and project
              managers.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Ensure that systems are integrated and operate efficiently.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Participate in code reviews and help maintain code quality
              standards.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Keep up to date with the latest technologies and programming
              languages.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Troubleshoot and debug any issues that arise.
            </span>
          </div>
          <div className="flex flex-col w-full mt-[48px]">
            <h6 className="text-heading text-base font-semibold mb-6">
              {t("careers.title5")}:
            </h6>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Bachelor's degree in Computer Science or related field.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Write efficient, scalable, and maintainable code.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Collaborate with front-end developers, data analysts, and project
              managers.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Ensure that systems are integrated and operate efficiently.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Participate in code reviews and help maintain code quality
              standards.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Keep up to date with the latest technologies and programming
              languages.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Troubleshoot and debug any issues that arise.
            </span>
          </div>
          <div className="flex flex-col w-full mt-[48px]">
            <h6 className="text-heading text-base font-semibold mb-6">
              {t("careers.title6")}:
            </h6>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Competitive salary and benefits package.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Opportunity to work with a dynamic and innovative team.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Career growth and advancement opportunities.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Flexible work schedule.
            </span>
            <span className="mb-4 text-lightWhite flex items-center">
              {lang === "ar" ? (
                <MdArrowLeft className={`text-[20px] mr-1 text-primary `} />
              ) : (
                <MdArrowRight className={`text-[20px] mr-1 text-primary `} />
              )}
              Health insurance, 401(k), and other benefits.
            </span>
            <span className="text-lightWhite mt-8">
              If you are a highly motivated and experienced Back End Developer
              with a passion for building innovative solutions, we would love to
              hear from you. Please submit your resume and cover letter to apply
              for this exciting opportunity.
            </span>
          </div>
          <CareerForm />{" "}
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
