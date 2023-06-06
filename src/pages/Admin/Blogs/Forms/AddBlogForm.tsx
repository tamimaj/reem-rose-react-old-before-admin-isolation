import { useState, useRef } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { BsGlobe, BsUpload } from "react-icons/bs";

import { initialValues } from "../../../../helpers/intialValues";
import { validationSchema } from "../../../../helpers/validationSchema";
import { AiFillGithub, AiFillLinkedin, AiFillPlusCircle } from "react-icons/ai";
import { MdCancel, MdOutlineClose } from "react-icons/md";

const AddBlogForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const formik = useFormik({
    initialValues: initialValues[1],
    validationSchema: validationSchema[1],
    onSubmit: (values) => console.log("working", values),
  });

  const checkFileType = (fileType: string) => {
    const mimeTypes = ["image/jpeg", "image/png"];
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
            formik.setFieldValue("coverImage", e.target.result);
          }
        };
        formik.setFieldError("coverImage", "");
      } else if (!checkFileType(e.target.files[0].type)) {
        formik.setFieldError("coverImage", "Only jpg or png format allowed");
      }
    }
  };

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <div className="flex flex-col items-center w-full">
          <h6 className="text-white font-medium text-xl">Add Blog Form</h6>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col mt-[48px]"
            autoComplete="off"
          >
            <div className="flex lg:flex-row flex-col  mb-8">
              <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[300px] mr-4">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={formik.handleChange}
                  placeholder="Title"
                  className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                />
                {formik.touched.title && formik.errors.title && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.title}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[300px] mr-4">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  onChange={formik.handleChange}
                  placeholder="Slug"
                  className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                />
                {formik.touched.slug && formik.errors.slug && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.slug}
                  </p>
                )}
              </div>
            </div>

            <div className="flex  mb-8">
              <div className="flex flex-col min-w-[163px] mr-4">
                <label className="flex items-center font-semibold text-sm text-white ml-[1px]">
                  <BsUpload className="text-primary text-[15px] mr-2" /> Upload
                  Image
                </label>
                <input
                  accept="image/jpg,image/jpeg,image/png"
                  ref={imageRef}
                  name="coverImage"
                  onChange={handleCoverImageFileChange}
                  type="file"
                  className={`hidden`}
                />
                {!formik.values.coverImage && (
                  <AiFillPlusCircle
                    onClick={() => {
                      if (formik.values.coverImage) {
                        return;
                      } else {
                        imageRef?.current?.click();
                      }
                    }}
                    className={`w-[30px] cursor-pointer h-[30px] text-primary mt-2`}
                  />
                )}
                {formik.values.coverImage && (
                  <div className="w-[100px] h-[100px] mt-4 mr-4 relative">
                    <img
                      src={formik.values.coverImage}
                      alt="coverImageFile"
                      className="w-full h-full object-fit rounded"
                    />
                    <MdCancel
                      onClick={() =>
                        formik.setFieldValue("product.photoUrl", "")
                      }
                      className="absolute top-[-16px] right-[-10px] w-[25px] h-[25px] text-red-600 cursor-pointer"
                    />
                  </div>
                )}
                {formik.touched.coverImage && formik.errors.coverImage && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.coverImage}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mb-8">
              <div className="flex flex-col w-full mr-4">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Summary
                </label>
                <textarea
                  name="summary"
                  onChange={formik.handleChange}
                  placeholder="Write Summary Here..."
                  className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                />
                {formik.touched.summary && formik.errors.summary && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.summary}
                  </p>
                )}
                <button
                  type="submit"
                  className="flex mt-8 text-white items-center justify-center w-[175px] h-[52px] border border-primary rounded cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddBlogForm;
