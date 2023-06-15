import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import { toast } from "react-toastify";

import "../../../../assets/styles/quill.css";
import { initialValues } from "../../../../helpers/intialValues";
import { validationSchema } from "../../../../helpers/validationSchema";

import CustomToast from "../../../../components/CustomToast/CustomToast";
import Loader from "../../../../components/Loader/Loader";
import ROUTES from "../../../../settings/ROUTES";
import { HtmlConverter } from "../../../../hooks/HtmlConverter/HtmlConverter";
import { createCareer } from "../../../../api/private/career";

const AddCareerForm = () => {
  const navigate = useNavigate();
  const descriptionRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string | undefined>("");
  const [addHtml, setAddHtml] = useState(false);

  const [descriptionQuillRef, setDescriptionRef] = useState<any>(null);

  const formik = useFormik({
    initialValues: initialValues[6],
    validationSchema: validationSchema[6],
    onSubmit: (values) => handleCreateCareer(values),
  });

  const handleCreateCareer = async (values: object) => {
    setLoading(true);
    let response = await createCareer(values);
    if (!response || response?.status !== 200) {
      setLoading(false);
      toast(<CustomToast message="Career Not Created Successfully" />);
      return;
    }
    setLoading(false);
    toast(<CustomToast message="Career Created Successfully" type="success" />);

    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_CAREERS);
  };

  useEffect(() => {
    if (typeof descriptionRef?.current?.getEditor !== "function") return;
    setDescriptionRef(descriptionRef?.current?.getEditor());
  }, [descriptionRef]);

  const textEditorOptions = {
    toolbar: [
      ["bold", "italic", "underline", "code-block"],
      [{ font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ size: ["small", false, "large", "huge"] }],
      ["link", "image"],
    ],
  };

  const handleOnRoleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let value = e.target.value;

    let slugifiedValue = slugify(value, { lower: true });

    formik.setFieldValue("slug", slugifiedValue);

    formik.handleBlur(e);
  };

  const handleOnSlugBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let value = e.target.value;

    let slugifiedValue = slugify(value, { lower: true });

    formik.setFieldValue("slug", slugifiedValue);

    formik.handleBlur(e);
  };

  const handleHtmlConversion = () => {
    let deltaContent;
    if (htmlContent) deltaContent = HtmlConverter(htmlContent);

    formik.setFieldValue("description", deltaContent?.__html);
    setAddHtml(false);
  };

  const handleAddHtml = () => {
    setAddHtml(true);
    setHtmlContent(formik.values.description);
  };
  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl">Add Career Form</h6>
            <form className="flex flex-col mt-[48px]" autoComplete="off">
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[400px] mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    onChange={formik.handleChange}
                    onBlur={(e) => handleOnRoleBlur(e)}
                    placeholder="Role"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.role && formik.errors.role && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.role}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[400px] mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    onChange={formik.handleChange}
                    value={formik.values?.slug || ""}
                    onBlur={(e) => handleOnSlugBlur(e)}
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
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    name="seoTitle"
                    onChange={formik.handleChange}
                    placeholder="SEO Title"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.seoTitle && formik.errors.seoTitle && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.seoTitle}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    SEO Description
                  </label>
                  <input
                    type="text"
                    name="seoDescription"
                    onChange={formik.handleChange}
                    placeholder="SEO Description"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.seoDescription &&
                    formik.errors.seoDescription && (
                      <p className="text-red text-xs flex mt-1">
                        {formik.errors.seoDescription}
                      </p>
                    )}
                </div>
              </div>
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0  mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    onChange={formik.handleChange}
                    placeholder="Location"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.location && formik.errors.location && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.location}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full mr-4 flex mb-8">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Short Description
                </label>
                <textarea
                  name="shortDescription"
                  onChange={formik.handleChange}
                  placeholder="Write Short Description Here..."
                  className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                />
                {formik.touched.shortDescription &&
                  formik.errors.shortDescription && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.shortDescription}
                    </p>
                  )}
              </div>
              <div className="flex flex-col w-full mr-4 flex mb-8">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Description
                </label>
                {!addHtml ? (
                  <button
                    type="button"
                    className="flex text-white items-center justify-center my-2 px-2 py-1 ml-2 w-[165px] mt-2 border border-primary rounded cursor-pointer"
                    onClick={handleAddHtml}
                  >
                    Add Html Content
                  </button>
                ) : (
                  <>
                    <textarea
                      placeholder="Write HTML Content Here..."
                      className="w-full min-h-[300px]  rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base "
                      onChange={(e) => {
                        setHtmlContent(e.target.value);
                      }}
                      value={htmlContent}
                    />
                    <button
                      type="button"
                      className="flex text-white items-center justify-center my-2 px-2 py-1 ml-2 w-[165px] mt-2 border border-primary rounded cursor-pointer"
                      onClick={handleHtmlConversion}
                    >
                      Convert to Content
                    </button>
                  </>
                )}
                <ReactQuill
                  className={`ql-toolbar.ql-snow .ql-container.ql-snow pt-1 form-control rounded-md min-h-[150px] mb-12 `}
                  theme="snow"
                  modules={textEditorOptions}
                  value={formik.values.description}
                  onChange={(value) => {
                    if (descriptionQuillRef?.getLength() <= 1) {
                      formik.setFieldValue("description", "");
                    } else if (descriptionQuillRef?.getLength() > 1) {
                      formik.setFieldValue("description", value);
                    }
                  }}
                  ref={descriptionRef}
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
                className="flex text-white items-center justify-center w-[175px] h-[52px] border border-primary rounded cursor-pointer"
              >
                Save
              </button>
            </form>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCareerForm;
