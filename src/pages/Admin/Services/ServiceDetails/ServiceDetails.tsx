import { useEffect, useState, Fragment } from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";
import { HtmlConverter } from "../../../../hooks/HtmlConverter/HtmlConverter";
import { getSpecificService } from "../../../../api/private/services";

interface ServiceType {
  _id: string;
  title: string;
  content: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
  updatedAt: string;
}

const ServicesDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [serviceData, setServicesData] = useState<ServiceType>({
    _id: "",
    title: "",
    summary: "",
    content: "",
    seoTitle: "",
    seoDescription: "",
    createdAt: "",
    updatedAt: "",
  });

  const getServicesData = async () => {
    if (id) {
      setLoading(true);
      let response = await getSpecificService(id);
      if (!response || response?.status !== 200) {
        return;
      }
      setServicesData(response.data.serviceData);
      setLoading(false);
    }
  };
  useEffect(() => {
    getServicesData();
  }, [id]);

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center overflow-x-hidden">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl mr-12">
              Services Details
            </h6>
            <div className="flex w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden">
              <div className="flex flex-col md:flex-row md:justify-between w-full text-white">
                <div className="flex flex-col ">
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Title : </span>{" "}
                    {serviceData.title}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Seo Title : </span>{" "}
                    {serviceData.seoTitle}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Created At : </span>{" "}
                    {moment(serviceData.createdAt).format("DD.MM.YY")}
                  </span>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Id : </span>{" "}
                    {serviceData._id}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      Seo Description :{" "}
                    </span>{" "}
                    {serviceData.seoDescription}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Updated At : </span>{" "}
                    {moment(serviceData.updatedAt).format("DD.MM.YY")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Summary </span>{" "}
              <span className="text-white text-sm">{serviceData.summary}</span>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Content </span>{" "}
              <span
                className="text-white text-sm"
                dangerouslySetInnerHTML={HtmlConverter(serviceData.content)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesDetails;