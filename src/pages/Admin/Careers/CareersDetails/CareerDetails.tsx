import { useEffect, useState, Fragment } from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";
import { HtmlConverter } from "../../../../hooks/HtmlConverter/HtmlConverter";
import { getSpecificService } from "../../../../api/private/services";
import { getSpecificCareer } from "../../../../api/private/career";

interface CareerDetails {
  _id: string;
  role: string;
  slug: string;
  location: string;
  shortDescription: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
  updatedAt: string;
}

const CareerDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [careerData, setCareerData] = useState<CareerDetails>({
    _id: "",
    role: "",
    slug: "",
    location: "",
    shortDescription: "",
    description: "",
    seoTitle: "",
    seoDescription: "",
    createdAt: "",
    updatedAt: "",
  });

  const getCareerData = async () => {
    if (id) {
      setLoading(true);
      let response = await getSpecificCareer(id);
      if (!response || response?.status !== 200) {
        return;
      }
      setCareerData(response.data.careerData);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCareerData();
  }, [id]);

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center overflow-x-hidden">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl mr-12">
              Career Details
            </h6>
            <div className="flex w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden">
              <div className="flex flex-col md:flex-row md:justify-between w-full text-white">
                <div className="flex flex-col ">
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Role : </span>{" "}
                    {careerData.role}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Seo Title : </span>{" "}
                    {careerData.seoTitle}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Created At : </span>{" "}
                    {moment(careerData.createdAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Slug : </span>{" "}
                    {careerData.slug}
                  </span>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Id : </span>{" "}
                    {careerData._id}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      Seo Description :{" "}
                    </span>{" "}
                    {careerData.seoDescription}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Updated At : </span>{" "}
                    {moment(careerData.updatedAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Location : </span>{" "}
                    {careerData.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Short Description{" "}
              </span>{" "}
              <span className="text-white text-sm">
                {careerData.shortDescription}
              </span>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Description{" "}
              </span>{" "}
              <span
                className="text-white text-sm"
                dangerouslySetInnerHTML={HtmlConverter(careerData.description)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerDetails;
