import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdBrowseGallery } from "react-icons/md";
import Calendar from "react-calendar";
import { IoMdLock } from "react-icons/io";
import moment from "moment";

import scheduleImage from "../../assets/tempImages/schedule.png";
import videocam from "../../assets/icons/videocam.svg";
import globe from "../../assets/icons/globe_uk.svg";
import "../../assets/styles/calendar.css";
import { getCalls, scheduleCallData } from "../../api/public/calls";
import Loader from "../../components/Loader/Loader";
import { callOptions } from "../../helpers/callOptions/callOptions";
import { initialValues } from "../../helpers/intialValues";
import { validationSchema } from "../../helpers/validationSchema";
import { useFormik } from "formik";
import CustomToast from "../../components/CustomToast/CustomToast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface CallDataType {
  startDate: string;
  endDate: string;
}

const ScheduleCall = () => {
  const { t } = useTranslation();
  const [scheduled, setScheduled] = useState<boolean>(false);
  const [timeConfirmed, setTimeConfirmed] = useState(false);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<any>(new Date());
  // const [currentDate, setCurrentDate] = useState()
  const [callData, setCallData] = useState<CallDataType[]>([]);
  const [disabledTime, setDisabledTime] = useState<any>([]);
  const navigate = useNavigate();

  const handleChange = (selectedOption: any) => {
    setScheduled(false);
    setTimeConfirmed(false);
    setDate(selectedOption);
  };

  useEffect(() => {
    if (!callData.length) getCallData();
  }, []);

  useEffect(() => {
    if (date) {
      const filteredDate = callData.filter((call) => {
        return (
          moment(call.startDate).format("YYYY-MM-DD") ===
          moment(date).format("YYYY-MM-DD")
        );
      });
      let scheduled = [];
      scheduled = filteredDate.map((date: CallDataType) => {
        if (callOptions.includes(moment.utc(date.startDate).format("HH:mm"))) {
          return {
            startTime: moment.utc(date.startDate).format("HH:mm"),
            endTime: moment.utc(date.endDate).format("HH:mm"),
          };
        }
      });
      if (scheduled.length) setDisabledTime(scheduled);
      else {
        setDisabledTime([]);
      }
    }
  }, [date, callData]);

  const getCallData = async () => {
    const startDate = moment(new Date()).utcOffset("+02:00").format();
    const endDate = moment().endOf("month").utcOffset("+02:00").format();
    let response = await getCalls({ startDate, endDate });
    if (!response || response?.status !== 200) {
      setLoading(false);
      setCallData([]);
      return;
    }
    setCallData(response?.data);
    setLoading(false);
  };
  const handleTime = (v: string) => {
    setTime(v);
    setTimeConfirmed(true);
  };
  const formik = useFormik({
    initialValues: initialValues[8],
    validationSchema: validationSchema[8],
    onSubmit: (values) => handleFormSubmit(values),
  });

  const handleFormSubmit = async (values: any) => {
    setLoading(true);
    const selectedDate = moment(date).format("YYYY-MM-DD");
    const startDate = moment(`${selectedDate} ${time}`).utc(true).format();
    const data = { ...values, startDate };
    let response = await scheduleCallData(data);
    if (!response || response?.status !== 200) {
      setLoading(false);
      if (response?.response?.status === 409)
        toast(<CustomToast message={t("schedule.existsError")} />);
      else toast(<CustomToast message={t("schedule.error")} />);
      return;
    }
    getCallData();
    toast(<CustomToast type="success" message={t("schedule.success")} />);
    navigate("/");
    setLoading(false);
  };

  const isDateDisabled = (scheduleTime: string) => {
    return disabledTime.some(
      (time: any) =>
        time?.startTime === scheduleTime || time?.endTime === scheduleTime
    );
  };
  const tileDisabled = ({ date }: any) => {
    return date.getDay() === 6 || date.getDay() === 0;
  };

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
        {loading ? (
          <Loader className="h-[30vh]" />
        ) : (
          <div className="w-full lg:w-auto xl:w-[1198px] rounded bg-lightBlack px-4 py-6 lg:p-[80px] mt-[80px] flex flex-col lg:flex-row">
            <div className="flex flex-col lg:justify-between mb-6 lg:mb-0 mr-5 xl:mr-[64px] lg:h-[518px]">
              <div className="flex flex-col">
                <div className="flex flex-col w-full items-center lg:items-start">
                  <img
                    src={scheduleImage}
                    alt="schedule Image"
                    className="w-[105px] h-[105px] rounded"
                  />
                  <span className="text-white text-base mt-2">
                    derrick rose
                  </span>
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
                <img
                  src={globe}
                  alt="globe"
                  className="w-[20px] h-[20px] mr-4"
                />
                <span className="text-sm text-bodyText">
                  {moment().utcOffset("+02:00").format("HH:mm")} (CET timezone)
                </span>
              </span>
            </div>
            <div className="border border-primary rounded-lg  px-6 py-4 lg:p-8 xl:p-[32px] lg:w-[635px] xl:w-[794px]">
              <h6 className="text-white text-[24px]">
                {t("schedule.dateHeading")}
              </h6>
              <div className="flex lg:flex-row flex-col w-full lg:w-auto mt-8">
                <Calendar
                  onChange={(v) => handleChange(v)}
                  value={date}
                  minDate={new Date()}
                  tileDisabled={tileDisabled}
                  className={
                    "rounded text-primary min-w-full lg:min-w-[300px] xl:min-w-[350px] h-[300px] sm:h-[327px] lg:h-auto bg-transparent"
                  }
                  selectRange={false}
                />
                <div className="flex flex-col mt-8 lg:mt-0 lg:ml-5 xl:ml-[64px]  ">
                  <span className="text-base text-white mb-6">
                    {moment(date).format("dddd, MMMM DD")}
                  </span>
                  {scheduled ? (
                    <form
                      onSubmit={formik.handleSubmit}
                      className="flex flex-col w-full"
                    >
                      <div className="flex flex-col mt-2 w-full lg:mb-0 lg:w-[240px] mr-4">
                        <label className="font-semibold text-sm text-white ml-[1px]">
                          {t("careers.form.label.name")}
                        </label>
                        <input
                          name="requestorName"
                          type="text"
                          value={formik.values.requestorName}
                          onChange={formik.handleChange}
                          placeholder={t(
                            "careers.form.placeholder.name"
                          ).toString()}
                          className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                        />

                        {formik.touched.requestorName &&
                          formik.errors.requestorName && (
                            <p className="text-red text-xs flex mt-1">
                              {formik.errors.requestorName}
                            </p>
                          )}
                      </div>
                      <div className="flex flex-col mt-2 w-full lg:mb-0 lg:w-[240px] mr-4">
                        <label className="font-semibold text-sm text-white ml-[1px]">
                          {t("careers.form.label.email")}
                        </label>
                        <input
                          name="requestorEmail"
                          type="text"
                          value={formik.values.requestorEmail}
                          onChange={formik.handleChange}
                          placeholder={t(
                            "careers.form.placeholder.email"
                          ).toString()}
                          className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                        />

                        {formik.touched.requestorEmail &&
                          formik.errors.requestorEmail && (
                            <p className="text-red text-xs flex mt-1">
                              {formik.errors.requestorEmail}
                            </p>
                          )}
                      </div>
                      <div className="flex mt-2 mb-6">
                        <div className="flex flex-col w-full lg:w-[240px]">
                          <label className="font-semibold text-sm text-white ml-[1px]">
                            {t("schedule.letter")}
                          </label>
                          <textarea
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            placeholder={t(
                              "careers.form.placeholder.coverLetter"
                            ).toString()}
                            className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                          />

                          {formik.touched.description &&
                            formik.errors.description && (
                              <p className="text-red text-xs flex mt-1">
                                {formik.errors.description}
                              </p>
                            )}
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="w-[48%] lg:w-[116px] cursor-pointer bg-primaryLight mr-2 mb-2 flex justify-center items-center h-[52px] rounded text-white text-base">
                          {time}
                        </div>
                        <button className="w-[48%] lg:w-[116px] cursor-pointer bg-gradient-to-r from-primary to-gradientColor mr-2 mb-2 flex justify-center items-center h-[50px] rounded text-white text-base">
                          Confirm
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex flex-col overflow-y-scroll text-primary scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-gray-100  max-h-[410px]">
                      <div className="flex flex-col mr-2">
                        {callOptions.map((scheduleTime, idx) => {
                          return moment(new Date()).format("YYYY-MM-DD") ===
                            moment(date).format("YYYY-MM-DD") &&
                            moment(new Date())
                              .utcOffset("+02:00")
                              .format("HH:mm") <= scheduleTime ? (
                            <div key={idx} className="flex w-full">
                              <button
                                disabled={isDateDisabled(scheduleTime)}
                                onClick={() => handleTime(scheduleTime)}
                                className={`${
                                  timeConfirmed ? "w-[50%]" : "w-full"
                                } relative lg:w-[116px] ${
                                  isDateDisabled(scheduleTime)
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                                } bg-primarySchedule mr-2 mb-2 flex justify-center items-center h-[52px] rounded text-white text-base`}
                              >
                                {scheduleTime}
                                {isDateDisabled(scheduleTime) && (
                                  <IoMdLock className="absolute text-[20px] top-[16px] right-[6px] text-white" />
                                )}
                              </button>
                              {timeConfirmed && time === scheduleTime && (
                                <div
                                  onClick={() => setScheduled(true)}
                                  className="w-[50%] lg:w-[116px] cursor-pointer bg-gradient-to-r from-primary to-gradientColor mb-2 flex justify-center items-center h-[50px] rounded text-white text-base transition ease-in-out duration-400"
                                >
                                  Schedule
                                </div>
                              )}
                            </div>
                          ) : (
                            moment(new Date()).format("YYYY-MM-DD") !==
                              moment(date).format("YYYY-MM-DD") && (
                              <div key={idx} className="flex w-full">
                                <button
                                  disabled={isDateDisabled(scheduleTime)}
                                  onClick={() => handleTime(scheduleTime)}
                                  className={`${
                                    timeConfirmed ? "w-[50%]" : "w-full"
                                  } relative lg:w-[116px] ${
                                    isDateDisabled(scheduleTime)
                                      ? "cursor-not-allowed"
                                      : "cursor-pointer"
                                  } bg-primarySchedule mr-2 mb-2 flex justify-center items-center h-[52px] rounded text-white text-base`}
                                >
                                  {scheduleTime}
                                  {isDateDisabled(scheduleTime) && (
                                    <IoMdLock className="absolute text-[20px] top-[16px] right-[6px] text-white" />
                                  )}
                                </button>
                                {timeConfirmed && time === scheduleTime && (
                                  <div
                                    onClick={() => setScheduled(true)}
                                    className="w-[50%] lg:w-[116px] cursor-pointer bg-gradient-to-r from-primary to-gradientColor mb-2 flex justify-center items-center h-[50px] rounded text-white text-base"
                                  >
                                    Schedule
                                  </div>
                                )}
                              </div>
                            )
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleCall;
