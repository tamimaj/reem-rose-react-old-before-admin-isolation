import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { BsUpload } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";

import "../../../../assets/styles/quill.css";
import { validationSchema } from "../../../../helpers/validationSchema";
import CustomToast from "../../../../components/CustomToast/CustomToast";
import Loader from "../../../../components/Loader/Loader";
import ROUTES from "../../../../settings/ROUTES";
import { customStyles } from "../../../../assets/styles/SelectStyles";
import {
  getSpecificTestimonial,
  updateTestimonial,
} from "../../../../api/private/testimonials";

const AddTestimonialForm = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [linkedinInfo, setLinkedinInfo] = useState({ provider: "", link: "" });
  const [twitterInfo, setTwitterInfo] = useState({ provider: "", link: "" });

  interface TestimonialType {
    _id: string;
    name: string;
    profileImage: string;
    profession: string;
    socialLinks: [
      {
        provider: string;
        link: string;
      }
    ];
    review: string;
    published: boolean;
  }

  const [testimonialData, setTestimonialData] = useState<TestimonialType>({
    _id: "",
    name: "",
    profileImage: "",
    profession: "",
    socialLinks: [{ provider: "", link: "" }],
    review: "",
    published: false,
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...testimonialData,
    },
    validationSchema: validationSchema[4],
    onSubmit: (values) => handleCreateTestimonial(values),
  });

  const handleCreateTestimonial = async (values: any) => {
    setLoading(true);
    if (linkedinInfo.link && twitterInfo.link)
      values.socialLinks = [{ ...linkedinInfo }, { ...twitterInfo }];
    else if (linkedinInfo.link && !twitterInfo.link)
      values.socialLinks = [{ ...linkedinInfo }];
    else if (!linkedinInfo.link && twitterInfo.link)
      values.socialLinks = [{ ...twitterInfo }];
    else if (!linkedinInfo.link && !twitterInfo.link) {
      values.socialLinks = [];
    }

    let response = await updateTestimonial(values);
    if (!response || response?.status !== 200) {
      setLoading(false);
      toast(<CustomToast message="Testimonial Not Updated Successfully" />);
      return;
    }
    setLoading(false);
    toast(
      <CustomToast message="Testimonial Updated Successfully" type="success" />
    );

    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_TESTIMONIALS);
  };

  const checkFileType = (fileType: string) => {
    const mimeTypes = ["image/jpeg", "image/png"];
    return mimeTypes.includes(fileType);
  };

  const handleProfileImageFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.length) {
      if (checkFileType(e?.target?.files[0].type)) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          if (e.target?.result) {
            formik.setFieldValue("profileImage", e.target.result);
          }
        };
        formik.setFieldError("profileImage", "");
      } else if (!checkFileType(e.target.files[0].type)) {
        formik.setFieldError("profileImage", "Only jpg or png format allowed");
      }
      e.target.value = "";
    }
  };
  useEffect(() => {
    getTestimonialData();
  }, [id]);
  const getTestimonialData = async () => {
    if (id) {
      let response = await getSpecificTestimonial(id);
      if (!response || response?.status !== 200) {
        return;
      }
      if (response?.data?.testimonialData) {
        delete response?.data?.testimonialData?.reviewAddedAt;
        delete response?.data?.testimonialData?.__v;
        delete response?.data?.testimonialData?.createdAt;
        delete response?.data?.testimonialData?.updatedAt;
      }
      setTestimonialData(response.data.testimonialData);
    }
  };
  useEffect(() => {
    const twitterData = formik.values.socialLinks?.filter((v, idx) => {
      return v.provider === "twitter";
    });
    const linkedInData = formik.values.socialLinks?.filter((v, idx) => {
      return v.provider === "linkedIn";
    });
    setTwitterInfo(twitterData[0]);
    setLinkedinInfo(linkedInData[0]);
  }, [testimonialData]);

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl">
              Edit Testimonial Form
            </h6>
            <form
              className="flex flex-col mt-[48px] w-[500px] lg:w-[800px]"
              autoComplete="off"
            >
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Name"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formik.values.profession}
                    onChange={formik.handleChange}
                    placeholder="Profession"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.profession && formik.errors.profession && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.profession}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex  mb-8">
                  <div className="flex w-full flex-col mb-8 lg:mb-0 lg:w-[400px] mr-4">
                    <label className="flex items-center font-semibold text-sm text-white ml-[1px]">
                      <BsUpload className="text-primary text-[15px] mr-2" />{" "}
                      Upload Image
                    </label>
                    <input
                      accept="image/jpg,image/jpeg,image/png"
                      ref={imageRef}
                      name="profileImage"
                      onChange={handleProfileImageFileChange}
                      type="file"
                      className={`hidden`}
                    />
                    {!formik.values.profileImage && (
                      <AiFillPlusCircle
                        onClick={() => {
                          if (formik.values.profileImage) {
                            return;
                          } else {
                            imageRef?.current?.click();
                          }
                        }}
                        className={`w-[30px] cursor-pointer h-[30px] text-primary mt-3`}
                      />
                    )}
                    {formik.values.profileImage && (
                      <div className="w-[100px] h-[100px] mt-4 mr-4 relative">
                        <img
                          src={formik.values.profileImage}
                          alt="profileImageFile"
                          className="w-full h-full object-fit rounded"
                        />
                        <MdCancel
                          onClick={() =>
                            formik.setFieldValue("profileImage", "")
                          }
                          className="absolute top-[-16px] right-[-10px] w-[25px] h-[25px] text-red-600 cursor-pointer"
                        />
                      </div>
                    )}
                    {formik.touched.profileImage &&
                      formik.errors.profileImage && (
                        <p className="text-red text-xs flex mt-1">
                          {formik.errors.profileImage}
                        </p>
                      )}
                  </div>
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-[400px] mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Published
                  </label>
                  <Select
                    onChange={(v) => {
                      formik.setFieldValue("published", v?.value);
                    }}
                    value={{
                      value: formik.values.published,
                      label: formik.values.published?.toString(),
                    }}
                    styles={customStyles}
                    options={[
                      { value: true, label: "true" },
                      { value: false, label: "false" },
                    ]}
                    className="w-full  rounded py-2 text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mr-4 flex mb-8">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Review
                </label>
                <textarea
                  name="review"
                  value={formik.values.review}
                  onChange={formik.handleChange}
                  placeholder="Write Review Here..."
                  className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                />
                {formik.touched.review && formik.errors.review && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.review}
                  </p>
                )}
              </div>

              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    LinkedIn Link
                  </label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setLinkedinInfo({
                        provider: "linkedIn",
                        link: e.target.value,
                      })
                    }
                    value={linkedinInfo?.link}
                    placeholder="LinkedIn Link"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                </div>{" "}
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Twitter Link
                  </label>{" "}
                  <input
                    type="text"
                    onChange={(e) =>
                      setTwitterInfo({
                        provider: "twitter",
                        link: e.target.value,
                      })
                    }
                    value={twitterInfo?.link}
                    placeholder="Twitter Link"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
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
                Update
              </button>
            </form>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTestimonialForm;
