import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdBrowseGallery } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import scheduleImage from "../../assets/tempImages/schedule.png";
import videocam from "../../assets/icons/videocam.svg";
import globe from "../../assets/icons/globe_uk.svg";
import { IoMdLock } from "react-icons/io";

const ScheduleCall = () => {
  const { t } = useTranslation();
  const [scheduled, setScheduled] = useState<boolean>(true);
  return (
    <div className="lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-full xs:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full mt-[64px] lg:mt-0 lg:w-[954px]">
          <h2 className="text-white md:w-[712px] text-[24px] xs:text-[28px] lg:text-[32px] text-center">
            {t("schedule.heading")}
          </h2>
          <span className="md:w-[470px] text-center text-bodyText text-sm lg:text-base mt-4">
            {t("schedule.tagline")}
          </span>
        </div>
        <div className="w-full lg:w-auto xl:w-[1198px] rounded bg-lightBlack px-4 py-6 lg:p-[80px] mt-[80px] flex flex-col lg:flex-row">
          <div className="flex flex-col lg:justify-between mb-6 lg:mb-0 mr-5 xl:mr-[64px] lg:h-[518px]">
            <div className="flex flex-col">
              <div className="flex flex-col w-full items-center lg:items-start">
                <img
                  src={scheduleImage}
                  alt="schedule Image"
                  className="w-[105px] h-[105px] rounded"
                />
                <span className="text-white text-base mt-2">derrick rose</span>
                <span className="text-primary text-[20px] mt-4">
                  {t("schedule.timeText")}
                </span>
              </div>
              <div className="flex mt-8">
                <MdBrowseGallery className="text-primary text-[20px] mr-4" />
                <span className="text-sm text-bodyText">
                  {t("schedule.timeText")}
                </span>
              </div>
              <div className="flex mt-4">
                <img
                  src={videocam}
                  alt="videocam"
                  className="text-primary text-[20px] mr-4"
                />
                <span className="text-sm text-bodyText w-[211px]">
                  {t("schedule.webText")}
                </span>
              </div>
            </div>
            <span className="flex">
              <img src={globe} alt="globe" className="w-[20px] h-[20px] mr-4" />
              <span className="text-sm text-bodyText">
                13:48 (Name of the timezone)
              </span>
            </span>
          </div>
          <div className="border border-primary rounded-lg  px-6 py-4 lg:p-8 xl:p-[32px] lg:w-[635px] xl:w-[794px]">
            <h6 className="text-white text-[24px]">
              {t("schedule.dateHeading")}
            </h6>
            <div className="flex lg:flex-row flex-col w-full lg:w-auto mt-8">
              <Calendar
                className={
                  "rounded text-primary min-w-full lg:min-w-[300px] xl:min-w-[350px] h-[300px] sm:h-[327px] lg:h-auto "
                }
              />
              <div className="flex flex-col mt-8 lg:mt-0 ml-5 xl:ml-[64px] lg:h-[438px] ">
                <span className="text-base text-white mb-6">
                  Thursday, March 23
                </span>
                {scheduled ? (
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col mt-2 w-full lg:mb-0 lg:w-[240px] mr-4">
                      <label className="font-semibold text-sm text-white ml-[1px]">
                        {t("careers.form.label.name")}
                      </label>
                      <input
                        type="text"
                        placeholder={t(
                          "careers.form.placeholder.name"
                        ).toString()}
                        className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                      />
                    </div>
                    <div className="flex flex-col mt-2 w-full lg:mb-0 lg:w-[240px] mr-4">
                      <label className="font-semibold text-sm text-white ml-[1px]">
                        {t("careers.form.label.email")}
                      </label>
                      <input
                        type="text"
                        placeholder={t(
                          "careers.form.placeholder.email"
                        ).toString()}
                        className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                      />
                    </div>
                    <div className="flex mt-2 mb-6">
                      <div className="flex flex-col w-full lg:w-[240px]">
                        <label className="font-semibold text-sm text-white ml-[1px]">
                          {t("schedule.letter")}
                        </label>
                        <textarea
                          placeholder={t(
                            "careers.form.placeholder.coverLetter"
                          ).toString()}
                          className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                        />
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="w-[48%] lg:w-[116px] cursor-pointer bg-primaryLight mr-2 mb-2 flex justify-center items-center h-[52px] rounded text-white text-base">
                        13:00
                      </div>
                      <div className="w-[48%] lg:w-[116px] cursor-pointer bg-gradient-to-r from-primary to-gradientColor mr-2 mb-2 flex justify-center items-center h-[50px] rounded text-white text-base">
                        Confirm
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="w-full lg:w-[240px] cursor-pointer mb-2 flex justify-center items-center border border-primary h-[52px] rounded text-white text-base">
                      12:00
                    </div>
                    <div className="w-full lg:w-[240px] cursor-pointer mb-2 flex justify-center items-center border border-primary h-[52px] rounded text-white text-base">
                      12:30
                    </div>
                    <div className="flex w-full">
                      <div className="w-[50%] lg:w-[116px] cursor-pointer bg-primarySchedule mr-2 mb-2 flex justify-center items-center h-[52px] rounded text-white text-base">
                        13:00
                      </div>
                      <div className="w-[50%] lg:w-[116px] cursor-pointer bg-gradient-to-r from-primary to-gradientColor mb-2 flex justify-center items-center h-[50px] rounded text-white text-base">
                        Schedule
                      </div>
                    </div>
                    <div className=" w-full lg:w-[240px] cursor-pointer bg-primarySchedule mr-2 mb-2 flex justify-center items-center h-[52px] rounded text-white text-base">
                      13:30 Scheduled
                    </div>

                    <div className="relative w-full lg:w-[240px] cursor-pointer mb-2 flex justify-center items-center border border-primary h-[52px] rounded text-white text-base">
                      14:00
                      <IoMdLock className="absolute text-[20px] top-[16px] right-[14px] text-white" />
                    </div>
                    <div className="w-full lg:w-[240px] cursor-pointer mb-2 flex justify-center items-center border border-primary h-[52px] rounded text-white text-base">
                      14:30
                    </div>
                    <div className="w-full lg:w-[240px] cursor-pointer mb-2 flex justify-center items-center border border-primary h-[52px] rounded text-white text-base">
                      15:00
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
