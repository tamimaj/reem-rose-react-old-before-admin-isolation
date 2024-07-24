import React from "react";

const Container = ({ children }: any) => {
  return (
    <div className="w-[90%] max-w-[1440px] flex flex-col /overflow-x-hidden items-center">
      {children}
    </div>
  );
};

export default Container;
