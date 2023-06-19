import React from "react";
import moment from "moment";

import SocialLinks from "../../../SocialLinks/SocialLinks";
import { initialCapital } from "../../../../hooks/InitialCapital/InitialCapital";

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
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h6 className="text-white text-sm xs:text-base font-semibold line-clamp-3 max-w-[123px]">
              {data.name}
            </h6>
            <div className="flex text-primary mt-1 sm:mt-0">
              {data.socialLinks.map((v, idx) => (
                <SocialLinks
                  key={idx}
                  provider={v.provider && initialCapital(v?.provider)}
                  link={v.link}
                  className="text-primaryDark"
                />
              ))}
            </div>
          </div>
          <span className="text-bodyText text-sm mt-2">{data.profession}</span>
        </div>
      </div>
      <p className="text-heading mt-6 text-base">{data.review}</p>
      <span className="absolute bottom-[16px] right-[16px] text-bodyText text-sm">
        {moment(data.reviewAddedAt).format("DD.MM.YY")}
      </span>
    </div>
  );
};

export default TestimonialCard;
