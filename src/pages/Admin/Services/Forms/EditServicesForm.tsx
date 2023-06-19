import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "../../../../assets/styles/quill.css";
import { initialValues } from "../../../../helpers/intialValues";
import { validationSchema } from "../../../../helpers/validationSchema";
import CustomToast from "../../../../components/CustomToast/CustomToast";
import Loader from "../../../../components/Loader/Loader";
import ROUTES from "../../../../settings/ROUTES";
import { HtmlConverter } from "../../../../hooks/HtmlConverter/HtmlConverter";
import {
  getSpecificService,
  updateService,
} from "../../../../api/private/services";

interface ServiceType {
  _id: string;
  title: string;
  content: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
}

const EditServicesForm = () => {
  const navigate = useNavigate();
  const contentRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string | undefined>("");
  const [addHtml, setAddHtml] = useState(false);
  const { id } = useParams();

  const [serviceData, setServiceData] = useState<ServiceType>({
    _id: "",
    title: "",
    summary: "",
    content: "",
    seoTitle: "",
    seoDescription: "",
  });

  const [contentQuillRef, setContentQuillRef] = useState<any>(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...serviceData,
    },
    validationSchema: validationSchema[5],
    onSubmit: (values) => handeEditService(values),
  });

  const handeEditService = async (values: object) => {
    setLoading(true);
    let response = await updateService(values);
    if (!response || response?.status !== 200) {
      setLoading(false);
      toast(<CustomToast message="Service Not Updated Successfully" />);
      return;
    }
    setLoading(false);
    toast(
      <CustomToast message="Service Updated Successfully" type="success" />
    );

    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_SERVICES);
  };

  useEffect(() => {
    if (typeof contentRef?.current?.getEditor !== "function") return;
    setContentQuillRef(contentRef?.current?.getEditor());
  }, [contentRef]);

  const textEditorOptions = {
    toolbar: [
      ["bold", "italic", "underline", "code-block"],
      [{ font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image"],
    ],
  };

  const handleHtmlConversion = () => {
    let deltaContent;
    if (htmlContent) deltaContent = HtmlConverter(htmlContent);

    formik.setFieldValue("content", deltaContent?.__html);
    setAddHtml(false);
  };

  const handleAddHtml = () => {
    setAddHtml(true);
    setHtmlContent(formik.values.content);
  };

  const getServiceData = async () => {
    if (id) {
      let response = await getSpecificService(id);
      if (!response || response?.status !== 200) {
        return;
      }
      if (response?.data?.serviceData) {
        delete response?.data?.serviceData?.__v;
        delete response?.data?.serviceData?.createdAt;
        delete response?.data?.serviceData?.updatedAt;
      }
      setServiceData(response.data.serviceData);
    }
  };

  useEffect(() => {
    getServiceData();
  }, []);

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl">
              Edit Services Form
            </h6>
            <form className="flex flex-col mt-[48px]" autoComplete="off">
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder="Title"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.title && formik.errors.title && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.title}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[400px] mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    name="seoTitle"
                    onChange={formik.handleChange}
                    value={formik.values.seoTitle}
                    placeholder="SEO Title"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.seoTitle && formik.errors.seoTitle && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.seoTitle}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[400px] mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    SEO Description
                  </label>
                  <input
                    type="text"
                    name="seoDescription"
                    onChange={formik.handleChange}
                    value={formik.values.seoDescription}
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

              <div className="flex flex-col w-full mr-4 flex mb-8">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Summary
                </label>
                <textarea
                  name="summary"
                  onChange={formik.handleChange}
                  value={formik.values.summary}
                  placeholder="Write Summary Here..."
                  className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                />
                {formik.touched.summary && formik.errors.summary && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.summary}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full mr-4 flex mb-8">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Content
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
                  value={formik.values.content}
                  onChange={(value) => {
                    if (contentQuillRef?.getLength() <= 1) {
                      formik.setFieldValue("content", "");
                    } else if (contentQuillRef?.getLength() > 1) {
                      formik.setFieldValue("content", value);
                    }
                  }}
                  ref={contentRef}
                />
                {formik.touched.content && formik.errors.content && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.content}
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
                Update
              </button>
            </form>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditServicesForm;
