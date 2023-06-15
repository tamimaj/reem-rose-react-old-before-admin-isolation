import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { BsUpload } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";

import "../../../../assets/styles/quill.css";
import { initialValues } from "../../../../helpers/intialValues";
import { validationSchema } from "../../../../helpers/validationSchema";
import CustomToast from "../../../../components/CustomToast/CustomToast";
import Loader from "../../../../components/Loader/Loader";
import ROUTES from "../../../../settings/ROUTES";
import {
  UpdateProject,
  createProject,
  getSpecificProject,
} from "../../../../api/private/projects";
import { getServices } from "../../../../api/public/services";
import { customStyles } from "../../../../assets/styles/SelectStyles";
import { techOptions } from "../../../../helpers/techOptons/techOptions";

type ServiceType = {
  _id: string;
  title: string;
};

interface ProjectType {
  _id: string;
  title: string;
  coverImage: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  links: [
    {
      name: string;
      link: string;
    }
  ];
  services: string[];
  techStacks: string[];
  serviceProvidedAt: string;
}

const AddProjectForm = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [servicesData, setServicesData] = useState([]);
  const [serviceOptions, setServiceOptions] = useState([
    { value: "", label: "" },
  ]);
  const [webInfo, setWebInfo] = useState({ name: "", link: "" });
  const [githubInfo, setGithubInfo] = useState({ name: "", link: "" });
  const [selectedProjectOption, setSelectedProjectOption] = useState<any>([
    {
      value: "",
      label: "",
    },
  ]);
  const [selectedTechOption, setSelectedTechOption] = useState<any>([
    {
      value: "",
      label: "",
    },
  ]);
  const [projectData, setProjectData] = useState<ProjectType>({
    _id: "",
    title: "",
    coverImage: "",
    description: "",
    links: [{ name: "", link: "" }],
    services: [""],
    techStacks: [""],
    serviceProvidedAt: "",
    seoTitle: "",
    seoDescription: "",
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...projectData,
    },
    validationSchema: validationSchema[3],
    onSubmit: (values) => handleUpdateProject(values),
  });

  const getServicesData = async () => {
    let response = await getServices();
    if (!response || response?.status !== 200) {
      return;
    }
    setServicesData(response.data);
  };

  useEffect(() => {
    getServicesData();
  }, []);

  useEffect(() => {
    if (servicesData.length > 0) {
      const options = servicesData.map((service: ServiceType) => {
        return { value: service._id, label: service.title };
      });
      setServiceOptions(options);
    }
  }, [servicesData]);

  useEffect(() => {
    const selectedOption = serviceOptions.filter((option) => {
      return formik.values.services?.includes(option.value);
    });
    if (selectedOption) setSelectedProjectOption(selectedOption);
  }, [serviceOptions]);

  useEffect(() => {
    const selectedOption = techOptions.filter((option) => {
      return formik.values.techStacks?.includes(option.value);
    });
    if (selectedOption) setSelectedTechOption(selectedOption);
    const githubData = formik.values.links.filter((v, idx) => {
      return v.name === "code";
    });
    const webData = formik.values.links.filter((v, idx) => {
      return v.name === "website";
    });
    setGithubInfo(githubData[0]);
    setWebInfo(webData[0]);
  }, [projectData]);
  const handleUpdateProject = async (values: any) => {
    setLoading(true);
    if (webInfo.link && githubInfo.link)
      values.links = [{ ...webInfo }, { ...githubInfo }];
    else if (webInfo.link && !githubInfo.link) values.links = [{ ...webInfo }];
    else if (!webInfo.link && githubInfo.link)
      values.links = [{ ...githubInfo }];
    else if (!webInfo.link && !githubInfo.link) {
      values.links = [];
    }

    let response = await UpdateProject(values);
    if (!response || response?.status !== 200) {
      setLoading(false);
      toast(<CustomToast message="Project Not Updated Successfully" />);
      return;
    }
    setLoading(false);
    toast(
      <CustomToast message="Project Updated Successfully" type="success" />
    );

    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_PROJECTS);
  };

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
  useEffect(() => {
    getProjectData();
  }, [id]);
  const getProjectData = async () => {
    if (id) {
      let response = await getSpecificProject(id);
      if (!response || response?.status !== 200) {
        return;
      }
      if (response?.data?.projectData) {
        delete response?.data?.projectData?.servicesData;
        delete response?.data?.projectData?.__v;
        delete response?.data?.projectData?.createdAt;
        delete response?.data?.projectData?.updatedAt;
      }
      setProjectData(response.data.projectData);
    }
  };
  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl">
              Edit Project Form
            </h6>
            <form
              className="flex flex-col mt-[48px] w-[500px] lg:w-[800px]"
              autoComplete="off"
            >
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
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
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    name="seoTitle"
                    value={formik.values.seoTitle}
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
                    SEO Description
                  </label>
                  <input
                    type="text"
                    name="seoDescription"
                    value={formik.values.seoDescription}
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

              <div className="flex flex-col w-full mr-4 flex mb-8">
                <label className="font-semibold text-sm text-white ml-[1px]">
                  Description
                </label>
                <textarea
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  placeholder="Write Description Here..."
                  className="w-full h-[120px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base resize-none"
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red text-xs flex mt-1">
                    {formik.errors.description}
                  </p>
                )}
              </div>

              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Services
                  </label>
                  <Select
                    onChange={(values) => {
                      setSelectedProjectOption(values);
                      formik.setFieldValue(
                        "services",
                        values.map((v) => {
                          return v.value;
                        })
                      );
                    }}
                    value={selectedProjectOption}
                    styles={customStyles}
                    isMulti
                    options={serviceOptions}
                    className="w-full  rounded py-2 text-base"
                  />
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Tech Stacks
                  </label>

                  <Select
                    onChange={(values) => {
                      setSelectedTechOption(values);
                      formik.setFieldValue(
                        "techStacks",
                        values.map((v) => {
                          return v.value;
                        })
                      );
                    }}
                    value={selectedTechOption}
                    isMulti
                    styles={customStyles}
                    options={techOptions}
                    className="w-full  rounded py-2 text-base"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col  mb-8">
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Website Link
                  </label>
                  <input
                    type="text"
                    value={webInfo?.link}
                    onChange={(e) =>
                      setWebInfo({ name: "website", link: e.target.value })
                    }
                    placeholder="Website Link"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryLight outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                </div>{" "}
                <div className="flex flex-col w-full mb-8 lg:mb-0 lg:w-1/2 mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Github Link
                  </label>{" "}
                  <input
                    type="text"
                    value={githubInfo?.link}
                    onChange={(e) =>
                      setGithubInfo({ name: "code", link: e.target.value })
                    }
                    placeholder="Github Link"
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

export default AddProjectForm;
