import React from "react";
import moment from "moment";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { HtmlConverter } from "../../../../hooks/HtmlConverter/HtmlConverter";

type Data = {
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
  reviewAddedAt: string;
};
type TestimonialDataType = {
  data: Data;
};
const TestimonialCard: React.FC<TestimonialDataType> = ({ data }) => {
  return (
    <div className="relative min-h-[485px] xs:min-h-[390px] md:min-h-[450px] md:min-h-[390px] lg:min-h-[378px] p-3 xs:p-6 rounded bg-primaryLight mr-4 flex flex-col">
      <div className="flex ">
        <img
          src={data.profileImage}
          alt={data.name}
          className="w-[64px] h-[64px] rounded"
        />
        <div className="ml-4 flex flex-col w-full">
          <div className="flex items-center justify-between">
            <h6 className="text-white text-sm xs:text-base font-semibold line-clamp-3 max-w-[123px]">
              {data.name}
            </h6>
            <div className="flex text-primary">
              <AiFillLinkedin className="w-[20px] h-[20px]  cursor-pointer mr-4 hover:opacity-100 cursor-pointer opacity-40" />
              <AiOutlineTwitter className="w-[20px] h-[20px] cursor-pointer hover:opacity-100 cursor-pointer opacity-40" />
            </div>
          </div>
          <span className="text-bodyText text-sm mt-2">{data.profession}</span>
        </div>
      </div>
      <p
        className="text-heading mt-6 text-base"
        dangerouslySetInnerHTML={HtmlConverter(data.review)}
      />
      <span className="absolute bottom-[16px] right-[16px] text-bodyText text-sm">
        {moment(data.reviewAddedAt).format("DD.MM.YY")}
      </span>
    </div>
  );
};

export default TestimonialCard;
