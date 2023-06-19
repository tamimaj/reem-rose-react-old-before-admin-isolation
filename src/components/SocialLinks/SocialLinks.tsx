import React from "react";
import { BsGlobe } from "react-icons/bs";

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

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
        <a
          href={link.includes("https") ? link : "https://" + link}
          target="_blank"
          className="[32px] mr-4 h-[32px]"
        >
          <BsGlobe className={`w-[21px] h-[21px]  ${className}`} />
        </a>
      )}
      {(provider === "Github" || provider === "Code") && (
        <a
          href={link.includes("https") ? link : "https://" + link}
          target="_blank"
          className="[32px] mr-4 h-[32px]"
        >
          <AiFillGithub className={`w-[24px] h-[24px]  ${className}`} />
        </a>
      )}
      {provider === "LinkedIn" && (
        <a
          href={link.includes("https") ? link : "https://" + link}
          target="_blank"
          className="[32px] mr-4 h-[32px]"
        >
          <AiFillLinkedin className={`w-[24px] h-[24px]  ${className}`} />
        </a>
      )}
      {provider === "Twitter" && (
        <a
          href={link.includes("https") ? link : "https://" + link}
          target="_blank"
          className="[32px] mr-4 h-[32px]"
        >
          <AiOutlineTwitter className={`w-[24px] h-[24px] ${className}`} />
        </a>
      )}
    </>
  );
};

export default SocialLinks;
