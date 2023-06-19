import { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";

import Loader from "../../../../components/Loader/Loader";
import { getSpecificApplication } from "../../../../api/private/applications";
import SocialLinks from "../../../../components/SocialLinks/SocialLinks";

interface ApplicationType {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  cv: string;
  coverLetter: string;
  socialLinks: [
    {
      provider: string;
      link: string;
    }
  ];

  careerData: [
    {
      role: string;
    }
  ];

  createdAt: string;
  updatedAt: string;
}

const ApplicationDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [applicationData, setApplicationData] = useState<ApplicationType>({
    _id: "",
    name: "",
    email: "",
    phoneNumber: "",
    cv: "",
    coverLetter: "",
    careerData: [{ role: "" }],
    socialLinks: [{ provider: "", link: "" }],
    createdAt: "",
    updatedAt: "",
  });

  const getApplicationData = async () => {
    if (id) {
      setLoading(true);
      let response = await getSpecificApplication(id);
      if (!response || response?.status !== 200) {
        return;
      }
      setApplicationData(response.data.applicationData);
      setLoading(false);
    }
  };
  useEffect(() => {
    getApplicationData();
  }, [id]);

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center overflow-x-hidden">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl mr-12">
              Application Details
            </h6>
            <div className="flex w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden">
              <div className="flex flex-col md:flex-row md:justify-between w-full text-white">
                <div className="flex flex-col ">
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Title : </span>{" "}
                    {applicationData.name}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Id : </span>{" "}
                    {applicationData._id}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Created At : </span>{" "}
                    {moment(applicationData.createdAt).format("DD.MM.YY")}
                  </span>

                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      Applied for :{" "}
                    </span>{" "}
                    {applicationData.careerData[0].role}
                  </span>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Email : </span>{" "}
                    {applicationData.email}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      Phone Number :{" "}
                    </span>{" "}
                    {applicationData.phoneNumber}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Updated At : </span>{" "}
                    {moment(applicationData.updatedAt).format("DD.MM.YY")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Cover Letter{" "}
              </span>{" "}
              <span className="text-white text-sm">
                {applicationData.coverLetter}
              </span>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Social Links{" "}
              </span>{" "}
              <div className="flex items-center mt-2">
                {applicationData.socialLinks?.map((v, idx) => (
                  <SocialLinks
                    key={idx}
                    provider={v.provider}
                    link={v.link}
                    className="text-white mr-2"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">CV </span>{" "}
              <a
                href={applicationData.cv}
                target="_blank"
                className="text-primary"
              >
                {applicationData.cv}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetails;
