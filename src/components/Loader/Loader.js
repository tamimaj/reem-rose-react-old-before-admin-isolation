import React from "react";

import loader from "../../assets/icons/loader.svg";

const Loader = () => {
  return (
    <div
      className={
        "flex justify-center items-center h-full w-[100%] bg-transparent"
      }
    >
      <img
        src={loader}
        draggable={false}
        className={"w-20 select-none"}
        alt="loading..."
      />
    </div>
  );
};

export default Loader;
