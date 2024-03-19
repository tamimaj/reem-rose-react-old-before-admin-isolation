import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { BsUpload } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Select from "react-select";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import { toast } from "react-toastify";

import "../../../../assets/styles/quill.css";
import { initialValues } from "../../../../helpers/intialValues";
import { validationSchema } from "../../../../helpers/validationSchema";
import { getCategories } from "../../../../api/public/categories";
import { customStyles } from "../../../../assets/styles/SelectStyles";
import Tag from "../../../../components/Admin/Tag/Tag";
import CustomToast from "../../../../components/CustomToast/CustomToast";
import { createPost } from "../../../../api/private/blogs";
import Loader from "../../../../components/Loader/Loader";
import ROUTES from "../../../../settings/ROUTES";
import { HtmlConverter } from "../../../../hooks/HtmlConverter/HtmlConverter";

interface categoriesType {
  _id: string;
  name: string;
  slug: string;
}

const AddBlogForm = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const contentRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string | undefined>("");
  const [addHtml, setAddHtml] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [tag, setTag] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([
    { value: "", label: "" },
  ]);
  const [contentQuillRef, setContentQuillRef] = useState<any>(null);

  const formik = useFormik({
    initialValues: initialValues[1],
    validationSchema: validationSchema[1],
    onSubmit: (values) => handleCreatePost(values),
  });

  const handleCreatePost = async (values: object) => {
    setLoading(true);
    let response = await createPost(values);
    if (!response || response?.status !== 200) {
      setLoading(false);
      toast(<CustomToast message="Post Not Created Successfully" />);
      return;
    }
    setLoading(false);
    toast(<CustomToast message="Post Created Successfully" type="success" />);

    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_BLOGS);
  };

  const getCategoriesData = async () => {
    let response = await getCategories();
    if (!response || response?.status !== 200) {
      return;
    }
    setCategoriesData(response.data);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    if (typeof contentRef?.current?.getEditor !== "function") return;
    setContentQuillRef(contentRef?.current?.getEditor());
  }, [contentRef]);

  useEffect(() => {
    if (categoriesData.length > 0) {
      const options = categoriesData.map((category: categoriesType) => {
        return { value: category._id, label: category.name };
      });
      setCategoryOptions(options);
    }
  }, [categoriesData]);

  const checkFileType = (fileType: string) => {
    const mimeTypes = ["image/jpeg", "image/png"];
    return mimeTypes.includes(fileType);
  };

  const handleCoverImageFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.length) {
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
      e.target.value = "";
    }
  };
  const textEditorOptions = {
    syntax: true,
    toolbar: [
      ["bold", "italic", "underline", "code-block"],
      [{ font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image"],
    ],
  };

  const handleOnNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
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

  const handleKeywordsFilter = (v: number) => {
    if (formik.values.keywords?.length) {
      const updatedTags = formik.values.keywords.filter((keyword, idx) => {
        return idx !== v;
      });
      formik.setFieldValue("keywords", updatedTags);
    }
  };
  const handleKeywordSubmit = () => {
    if (keyword && formik.values.keywords) {
      formik.setFieldValue("keywords", [...formik.values.keywords, keyword]);
      setKeyword("");
    }
  };
  const handleTagSubmit = () => {
    if (tag && formik.values.tags) {
      formik.setFieldValue("tags", [...formik.values.tags, tag]);
      setTag("");
    }
  };
  const handleTagsFilter = (v: number) => {
    if (formik.values.tags?.length) {
      const updatedTags = formik.values.tags.filter((tag, idx) => {
        return idx !== v;
      });
      formik.setFieldValue("tags", updatedTags);
    }
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
  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl">Add Blog Form</h6>
            <form className="flex flex-col mt-[48px]" autoComplete="off">
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    onBlur={(e) => handleOnNameBlur(e)}
                    placeholder="Title"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.title && formik.errors.title && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.title}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
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
                <div className="flex  mb-8">
                  <div className="flex flex-col mb-8 lg:mb-0 lg:w-[400px] mr-4">
                    <label className="flex items-center font-semibold text-sm text-white ml-[1px]">
                      <BsUpload className="text-primary text-[15px] mr-2" />{" "}
                      Upload Image
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
                        className={`w-[30px] cursor-pointer h-[30px] text-primary mt-3`}
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
                          onClick={() => formik.setFieldValue("coverImage", "")}
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

                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[400px] mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Categories
                  </label>
                  <Select
                    onChange={(values) => {
                      formik.setFieldValue(
                        "categories",
                        values.map((v) => {
                          return v.value;
                        })
                      );
                    }}
                    styles={customStyles}
                    isMulti
                    options={categoryOptions}
                    className="w-full  rounded py-2 text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full mr-4 flex mb-8">
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
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Tags
                  </label>
                  <div className="w-full flex items-center">
                    <input
                      type="text"
                      onChange={(e) => setTag(e.target.value)}
                      value={tag}
                      placeholder="Tags"
                      className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleTagSubmit();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleTagSubmit}
                      className="flex text-white items-center justify-center px-2 py-1 ml-2 w-[85px] mt-2 border border-primary rounded cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex items-center mt-2 flex-wrap">
                    {formik.values.tags &&
                      formik.values.tags?.length > 0 &&
                      formik.values.tags.map((tag, idx) => (
                        <Tag
                          idx={idx}
                          key={idx}
                          tag={tag}
                          handleClick={handleTagsFilter}
                        />
                      ))}
                  </div>
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Keywords
                  </label>
                  <div className="w-full flex items-center">
                    <input
                      type="text"
                      onChange={(e) => setKeyword(e.target.value)}
                      value={keyword}
                      placeholder="Keywords"
                      className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleKeywordSubmit();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleKeywordSubmit}
                      className="flex text-white items-center justify-center px-2 py-1 ml-2 w-[85px] mt-2 border border-primary rounded cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex items-center mt-2 flex-wrap">
                    {formik.values.keywords &&
                      formik.values.keywords?.length > 0 &&
                      formik.values.keywords.map((keyword, idx) => (
                        <Tag
                          idx={idx}
                          key={idx}
                          tag={keyword}
                          handleClick={handleKeywordsFilter}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Lang Code
                  </label>
                  <Select
                    defaultValue={{ value: "en", label: "English" }}
                    onChange={(v) => {
                      console.log(v, "value");
                      formik.setFieldValue("langCode", v?.value);
                    }}
                    styles={customStyles}
                    options={[
                      { value: "en", label: "English" },
                      { value: "ar", label: "Arabic" },
                      { value: "es", label: "Spanish" },
                      { value: "fr", label: "French" },
                    ]}
                    className="w-full  rounded py-2 text-base"
                  />
                </div>{" "}
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Published
                  </label>
                  <Select
                    onChange={(v) => {
                      formik.setFieldValue("isPublished", v?.value);
                    }}
                    value={{
                      value: formik.values.isPublished,
                      label: formik.values.isPublished?.toString(),
                    }}
                    styles={customStyles}
                    options={[
                      { value: true, label: "true" },
                      { value: false, label: "false" },
                    ]}
                    className="w-full  rounded py-2 text-base"
                  />
                </div>{" "}
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

export default AddBlogForm;
