import React from "react";

import loader from "../../assets/icons/loader.svg";

interface LoaderTypes {
  className: string;
}
const Loader: React.FC<LoaderTypes> = ({ className }) => {
  return (
    <div
      className={`${className} flex justify-center items-center w-full bg-transparent`}
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
