import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsGlobe, BsUpload } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

const CareerForm = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full mt-[48px]">
      <div className="flex lg:flex-row flex-col  mb-8">
        <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.name")}
          </label>
          <input
            type="text"
            placeholder={t("careers.form.placeholder.name").toString()}
            className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.email")}
          </label>
          <input
            type="text"
            placeholder={t("careers.form.placeholder.email").toString()}
            className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col mb-8">
        <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.githubLink")}
          </label>
          <div className="flex items-center h-[36px] bg-primaryLight pl-4 py-2 pr-2 rounded mt-2">
            <input
              type="text"
              placeholder={t("careers.form.placeholder.github").toString()}
              className=" w-[95%] lg:w-[80%] h-full  text-bodyText bg-transparent outline-none   text-base"
            />
            <AiFillGithub className="w-[20px] h-[20px] text-white ml-2" />
          </div>
        </div>

        <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.linkedinLink")}
          </label>
          <div className="flex items-center h-[36px] bg-primaryLight pl-4 py-2 pr-2 rounded mt-2">
            <input
              type="text"
              placeholder={t("careers.form.placeholder.linkedin").toString()}
              className=" w-[95%] lg:w-[80%] h-full  text-bodyText bg-transparent outline-none   text-base"
            />
            <AiFillLinkedin className="w-[20px] h-[20px] text-white ml-2" />
          </div>
        </div>
        <div className="flex flex-col w-full  lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.websiteLink")}
          </label>
          <div className="flex items-center h-[36px] bg-primaryLight pl-4 py-2 pr-2 rounded mt-2">
            <input
              type="text"
              placeholder={t("careers.form.placeholder.website").toString()}
              className=" w-[95%] lg:w-[80%] h-full  text-bodyText bg-transparent outline-none   text-base"
            />
            <BsGlobe className="w-[20px] h-[20px] text-white ml-2" />
          </div>
        </div>
      </div>
      <div className="flex  mb-8">
        <div className="flex flex-col w-[163px] mr-4">
          <label className="flex items-center font-semibold text-sm text-white ml-[1px]">
            <BsUpload className="text-primary text-[15px] mr-2" />{" "}
            {t("careers.form.label.uploadCv")}
          </label>
          <div className="w-full h-[34px] p-2 bg-primaryLight rounded mt-2 flex justify-between">
            <span className="text-sm text-white">CV FILE NAME.pdf</span>
            <MdOutlineClose className="text-[18px] text-primary cursor-pointer " />
          </div>
        </div>
      </div>
      <div className="flex mb-8">
        <div className="flex flex-col w-full mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.coverLetter")}
          </label>
          <textarea
            placeholder={t("careers.form.placeholder.coverLetter").toString()}
            className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
          />

          <button className="flex mt-8 text-white items-center justify-center w-[175px] h-[52px] border border-primary rounded cursor-pointer">
            {t("careers.form.label.btnText")}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
