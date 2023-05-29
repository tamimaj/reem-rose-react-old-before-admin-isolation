import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin, AiFillPlusCircle } from "react-icons/ai";
import { BsGlobe, BsUpload } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { useFormik } from "formik";

import { initialValues } from "../../../helpers/intialValues";
import { validationSchema } from "../../../helpers/validationSchema";
import Loader from "../../Loader/Loader";
import { applicationSubmission } from "../../../api/public/applications";
import { toast } from "react-toastify";
import CustomToast from "../../CustomToast/CustomToast";

interface CareerType {
  careerId: string;
}

const CareerForm: React.FC<CareerType> = ({ careerId }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const cvRef = useRef<HTMLInputElement>(null);
  const formik = useFormik({
    initialValues: initialValues[0],
    validationSchema: validationSchema[0],
    onSubmit: (values) => handleFormSubmit(values),
  });

  const handleFormSubmit = async (values: any) => {
    setLoading(true);
    const socialLinks = [
      {
        provider: "Github",
        link: values.github,
      },
      {
        provider: "LinkedIn",
        link: values.linkedin,
      },
      {
        provider: "Website",
        link: values.website,
      },
    ];
    delete values.github;
    delete values.linkedin;
    delete values.website;
    const data = { socialLinks, ...values, careerId };
    let response = await applicationSubmission(data);
    if (!response || response?.status !== 200) {
      setLoading(false);
      toast(<CustomToast message={t("application.error")} />);
      return;
    }
    toast(<CustomToast type="success" message={t("application.success")} />);

    setLoading(false);
  };

  const checkFileType = (fileType: string) => {
    const mimeTypes = ["application/pdf"];
    return mimeTypes.includes(fileType);
  };
  const handleCoverImageFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.length) {
      setFileName(e.target.files[0].name);
      if (checkFileType(e?.target?.files[0].type)) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          if (e.target?.result) {
            formik.setFieldValue("cv", e.target.result);
          }
        };
        formik.setFieldError("cv", "");
      } else if (!checkFileType(e.target.files[0].type)) {
        formik.setFieldError("cv", "Only PDF format allowed");
      }
    }
  };

  return loading ? (
    <Loader className="h-[30vh]" />
  ) : (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full mt-[48px]"
      autoComplete="off"
    >
      <div className="flex lg:flex-row flex-col  mb-8">
        <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.name")}
          </label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            placeholder={t("careers.form.placeholder.name").toString()}
            className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red text-xs flex mt-1">{formik.errors.name}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.email")}
          </label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            placeholder={t("careers.form.placeholder.email").toString()}
            className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red text-xs flex mt-1">{formik.errors.email}</p>
          )}
        </div>
        <div className="flex flex-col w-full lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.phoneNo")}
          </label>
          <input
            type="text"
            onChange={formik.handleChange}
            name="phoneNumber"
            placeholder={t("careers.form.placeholder.phoneNo").toString()}
            className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-red text-xs flex mt-1">
              {formik.errors.phoneNumber}
            </p>
          )}
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
              name="github"
              autoComplete="off"
              onChange={formik.handleChange}
              placeholder={t("careers.form.placeholder.github").toString()}
              className=" w-[95%] lg:w-[80%] h-full  text-bodyText bg-transparent outline-none   text-base"
            />
            <AiFillGithub className="w-[20px] h-[20px] text-white ml-2" />
          </div>
          {formik.touched.github && formik.errors.github && (
            <p className="text-red text-xs flex mt-1">{formik.errors.github}</p>
          )}
        </div>

        <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.linkedinLink")}
          </label>
          <div className="flex items-center h-[36px] bg-primaryLight pl-4 py-2 pr-2 rounded mt-2">
            <input
              type="text"
              name="linkedin"
              autoComplete="off"
              onChange={formik.handleChange}
              placeholder={t("careers.form.placeholder.linkedin").toString()}
              className=" w-[95%] lg:w-[80%] h-full  text-bodyText bg-transparent outline-none   text-base"
            />
            <AiFillLinkedin className="w-[20px] h-[20px] text-white ml-2" />
          </div>
          {formik.touched.linkedin && formik.errors.linkedin && (
            <p className="text-red text-xs flex mt-1">
              {formik.errors.linkedin}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full  lg:w-[226px] mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.websiteLink")}
          </label>
          <div className="flex items-center h-[36px] bg-primaryLight pl-4 py-2 pr-2 rounded mt-2">
            <input
              type="text"
              name="website"
              autoComplete="off"
              onChange={formik.handleChange}
              placeholder={t("careers.form.placeholder.website").toString()}
              className=" w-[95%] lg:w-[80%] h-full  text-bodyText bg-transparent outline-none   text-base"
            />
            <BsGlobe className="w-[20px] h-[20px] text-white ml-2" />
          </div>
          {formik.touched.website && formik.errors.website && (
            <p className="text-red text-xs flex mt-1">
              {formik.errors.website}
            </p>
          )}
        </div>
      </div>
      <div className="flex  mb-8">
        <div className="flex flex-col min-w-[163px] mr-4">
          <label className="flex items-center font-semibold text-sm text-white ml-[1px]">
            <BsUpload className="text-primary text-[15px] mr-2" />{" "}
            {t("careers.form.label.uploadCv")}
          </label>
          <input
            accept="application/pdf"
            ref={cvRef}
            name="cv"
            onChange={handleCoverImageFileChange}
            type="file"
            className={`hidden`}
          />
          {!formik.values.cv && (
            <AiFillPlusCircle
              onClick={() => {
                if (formik.values.cv) {
                  return;
                } else {
                  cvRef?.current?.click();
                }
              }}
              className={`w-[30px] cursor-pointer h-[30px] text-primary mt-2`}
            />
          )}
          {formik.values.cv && (
            <div className="min-w-[150px] h-[34px] p-2 bg-primaryLight rounded mt-2 flex justify-between">
              <span className="text-sm text-white">{fileName}</span>
              <MdOutlineClose
                className="text-[18px] text-primary cursor-pointer "
                onClick={() => formik.setFieldValue("cv", "")}
              />
            </div>
          )}
          {formik.touched.cv && formik.errors.cv && (
            <p className="text-red text-xs flex mt-1">{formik.errors.cv}</p>
          )}
        </div>
      </div>
      <div className="flex mb-8">
        <div className="flex flex-col w-full mr-4">
          <label className="font-semibold text-sm text-white ml-[1px]">
            {t("careers.form.label.coverLetter")}
          </label>
          <textarea
            name="coverLetter"
            onChange={formik.handleChange}
            placeholder={t("careers.form.placeholder.coverLetter").toString()}
            className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
          />
          {formik.touched.coverLetter && formik.errors.coverLetter && (
            <p className="text-red text-xs flex mt-1">
              {formik.errors.coverLetter}
            </p>
          )}
          <button
            type="submit"
            className="flex mt-8 text-white items-center justify-center w-[175px] h-[52px] border border-primary rounded cursor-pointer"
          >
            {t("careers.form.label.btnText")}{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CareerForm;
