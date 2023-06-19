import { useEffect, useState, Fragment } from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";
import StatusTag from "../../../../components/Admin/Blog/StatusTag/StatusTag";
import { initialCapital } from "../../../../hooks/InitialCapital/InitialCapital";
import SocialLinks from "../../../../components/SocialLinks/SocialLinks";
import { getSpecificTestimonial } from "../../../../api/private/testimonials";

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
  reviewAddedAt: string;
  createdAt: string;
  updatedAt: string;
}

const TestimonialDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [testimonialData, setTestimonialData] = useState<TestimonialType>({
    _id: "",
    name: "",
    profileImage: "",
    profession: "",
    socialLinks: [{ provider: "", link: "" }],
    review: "",
    reviewAddedAt: "",
    published: false,
    createdAt: "",
    updatedAt: "",
  });

  const getTestimonialData = async () => {
    if (id) {
      setLoading(true);
      let response = await getSpecificTestimonial(id);
      if (!response || response?.status !== 200) {
        return;
      }
      setTestimonialData(response.data.testimonialData);
      setLoading(false);
    }
  };
  useEffect(() => {
    getTestimonialData();
  }, [id]);

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center overflow-x-hidden">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl mr-12">
              Testimonial Details
            </h6>
            <div className="flex w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden">
              <div className="flex flex-col md:flex-row md:justify-between w-full text-white">
                <div className="flex flex-col ">
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Name : </span>{" "}
                    {testimonialData.name}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Created At : </span>{" "}
                    {moment(testimonialData.createdAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      Review Added At :{" "}
                    </span>{" "}
                    {moment(testimonialData.reviewAddedAt).format("DD.MM.YY")}
                  </span>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Id : </span>{" "}
                    {testimonialData._id}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Updated At : </span>{" "}
                    {moment(testimonialData.updatedAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm flex ">
                    <span className="font-normal text-base mr-2">
                      Status :{" "}
                    </span>{" "}
                    {testimonialData.published ? (
                      <StatusTag
                        value="Published"
                        className="text-primary bg-primaryLight"
                      />
                    ) : (
                      <StatusTag
                        value="Draft"
                        className="text-yellow bg-lightYellow"
                      />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Review </span>{" "}
              <span className="text-white text-sm">
                {testimonialData.review}
              </span>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Links </span>{" "}
              <div className="flex items-center mt-2">
                {testimonialData.socialLinks?.map((v, idx) => (
                  <SocialLinks
                    key={idx}
                    provider={v.provider && initialCapital(v?.provider)}
                    link={v.link}
                    className="text-white mr-2"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Profile Image{" "}
              </span>{" "}
              <img
                src={testimonialData.profileImage}
                alt={testimonialData.name}
                className="mt-4 w-full h-[500px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialDetails;
