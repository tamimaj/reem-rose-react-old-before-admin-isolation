import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className=" lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1680px] flex flex-col  items-center">
        <h6 className="font-RobotoSlab text-base text-primary">
          {" "}
          {t("home.title")}
        </h6>
      </div>
    </div>
  );
};

export default Home;
