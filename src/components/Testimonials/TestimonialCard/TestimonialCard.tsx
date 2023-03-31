import React from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

type Data = {
  name: string;
  position: string;
  profilePicture: any;
  review: string;
  date: string;
};
type TestimonialDataType = {
  data: Data;
};
const TestimonialCard: React.FC<TestimonialDataType> = ({ data }) => {
  return (
    <div className="relative min-w-[348px] h-[378px] p-6 rounded bg-primaryLight mr-4 flex flex-col">
      <div className="flex ">
        <img
          src={data.profilePicture}
          alt={data.name}
          className="w-[64px] h-[64px] rounded"
        />
        <div className="ml-4 flex flex-col w-full">
          <div className="flex items-center justify-between">
            <h6 className="text-white text-base font-semibold line-clamp-3 max-w-[123px]">
              {data.name}
            </h6>
            <div className="flex text-primary">
              <AiFillLinkedin className="w-[20px] h-[20px]  cursor-pointer mr-4" />
              <AiOutlineTwitter className="w-[20px] h-[20px] cursor-pointer " />
            </div>
          </div>
          <span className="text-bodyText text-sm mt-2">{data.position}</span>
        </div>
      </div>
      <span className="text-heading mt-6 text-base">{data.review}</span>
      <span className="absolute bottom-[16px] right-[16px] text-white text-sm">
        {data.date}
      </span>
    </div>
  );
};

export default TestimonialCard;
