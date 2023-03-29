import React from "react";

import siteSettings from "../../@settings/siteSettings";

interface HeaderTypes {
  text: string;
  link: string;
}
const Header = () => {
  return (
    <header className="flex justify-center w-full font-PlusJakartaSans">
      <div className="max-w-[1440px] w-[90%] h-[40px] mt-5 flex items-center justify-between">
        <img src={siteSettings.logo} alt="logo" className="w-[24px] h-[24px]" />
        <div className="flex text-base">
          {siteSettings.header.map((v: HeaderTypes, idx: number) => (
            <span
              key={idx}
              className="mr-8 text-gray hover:text-white cursor-pointer"
            >
              {v.text}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] flex items-center justify-center bg-primaryLight rounded-lg">
            <img
              src={siteSettings.translateIcon}
              alt="logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
