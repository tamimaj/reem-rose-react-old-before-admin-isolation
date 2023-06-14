import { useEffect, useState, Fragment } from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import { HtmlConverter } from "../../../../hooks/HtmlConverter/HtmlConverter";
import Loader from "../../../../components/Loader/Loader";
import StatusTag from "../../../../components/Admin/Blog/StatusTag/StatusTag";
import { getSpecificProject } from "../../../../api/private/projects";
import { initialCapital } from "../../../../hooks/InitialCapital/InitialCapital";
import SocialLinks from "../../../../components/SocialLinks/SocialLinks";
import Icons from "../../../../components/Icons/Icons";

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
  servicesData: [
    {
      title: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
}

const ProjectDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [projectData, setProjectData] = useState<ProjectType>({
    _id: "",
    title: "",
    coverImage: "",
    description: "",
    links: [{ name: "", link: "" }],
    services: [""],
    techStacks: [""],
    serviceProvidedAt: "",
    servicesData: [{ title: "" }],
    seoTitle: "",
    seoDescription: "",
    createdAt: "",
    updatedAt: "",
  });

  const getProjectData = async () => {
    if (id) {
      setLoading(true);
      let response = await getSpecificProject(id);
      if (!response || response?.status !== 200) {
        return;
      }
      setProjectData(response.data.projectData);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProjectData();
  }, [id]);
  return (
    <div className=" pt-4 pb-20 w-full flex justify-center overflow-x-hidden">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl mr-12">
              Project Details
            </h6>
            <div className="flex w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden">
              <div className="flex flex-col md:flex-row md:justify-between w-full text-white">
                <div className="flex flex-col ">
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Title : </span>{" "}
                    {projectData.title}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">SEO Title : </span>{" "}
                    {projectData.seoTitle}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Created At : </span>{" "}
                    {moment(projectData.createdAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm flex">
                    <span className="font-normal text-base">
                      Services Provided:{" "}
                    </span>{" "}
                    <div className="flex flex-wrap max-w-[250px] ml-2 mt-[2px]">
                      {projectData.servicesData.map((service, idx) => (
                        <Fragment key={idx}>
                          {service.title}{" "}
                          {projectData.servicesData.length !== idx + 1 && " , "}
                        </Fragment>
                      ))}
                    </div>{" "}
                  </span>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Id : </span>{" "}
                    {projectData._id}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      SEO Description :{" "}
                    </span>{" "}
                    {projectData.seoDescription}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Updated At : </span>{" "}
                    {moment(projectData.updatedAt).format("DD.MM.YY")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Description{" "}
              </span>{" "}
              <span className="text-white text-sm">
                {projectData.description}
              </span>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Links </span>{" "}
              <div className="flex items-center mt-2">
                {projectData.links?.map((v, idx) => (
                  <SocialLinks
                    key={idx}
                    provider={v.name && initialCapital(v?.name)}
                    link={v.link}
                    className="text-white"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Tech Used </span>{" "}
              <div className="flex items-center mt-2">
                {projectData.techStacks?.map((v, idx) => (
                  <Icons key={idx} v={v && initialCapital(v)} />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Cover Image{" "}
              </span>{" "}
              <img
                src={projectData.coverImage}
                alt={projectData.seoTitle}
                className="mt-4 w-full h-[500px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
