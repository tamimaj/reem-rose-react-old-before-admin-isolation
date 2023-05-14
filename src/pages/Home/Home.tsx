import { useEffect, useState } from "react";

import Intro from "../../components/Home/Intro/Intro";
import Portfolio from "../../components/Home/Portfolio/Portfolio";
import Services from "../../components/Home/Services/Services";
import Tech from "../../components/Home/Tech/Tech";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [testimonialsLoading, setTestimonialsLoading] = useState(false);

  useEffect(() => {
    if (!portfolioLoading && !servicesLoading && !testimonialsLoading) {
      setLoading(false);
    }
  }, [portfolioLoading, servicesLoading, testimonialsLoading]);

  return (
    <div className=" lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
          <Intro />
          <Tech />
          <Portfolio setLoading={setPortfolioLoading} />
          <Services setLoading={setServicesLoading} />
          <Testimonials setLoading={setTestimonialsLoading} />
        </div>
      )}
    </div>
  );
};

export default Home;
