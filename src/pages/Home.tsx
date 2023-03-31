import Intro from "../components/Intro/Intro";
import Tech from "../components/Tech/Tech";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className=" lg:mt-40 mb-3 lg:mb-12 w-full flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <Intro />
        <Tech />
        <Portfolio />
        <Services />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
