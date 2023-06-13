import React from "react";
import { BsGlobe } from "react-icons/bs";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

type SocialLinksType = {
  provider: string;
  link: string;
  className: string;
};
const SocialLinks: React.FC<SocialLinksType> = ({
  provider,
  link,
  className,
}) => {
  return (
    <>
      {provider === "Website" && (
        <a href={link} target="_blank" className="[32px] mr-4 h-[32px]">
          <BsGlobe className={`w-[21px] h-[21px] mr-2 ${className}`} />
        </a>
      )}
      {(provider === "Github" || provider === "Code") && (
        <a href={link} target="_blank" className="[32px] mr-4 h-[32px]">
          <AiFillGithub className={`w-[24px] h-[24px] mr-2 ${className}`} />
        </a>
      )}
      {provider === "LinkedIn" && (
        <a href={link} target="_blank" className="[32px] mr-4 h-[32px]">
          <AiFillLinkedin className={`w-[24px] h-[24px] mr-2 ${className}`} />
        </a>
      )}
    </>
  );
};

export default SocialLinks;
