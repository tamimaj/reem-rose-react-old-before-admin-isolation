import React from "react";
import Lottie from "lottie-react";
import * as pageNotFoundJson from "../assets/lottie/404.json";

const PageNotFound = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Lottie animationData={pageNotFoundJson} loop={true} />
  </div>
);

export default PageNotFound;
