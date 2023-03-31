import Intro from "../../components/Home/Intro/Intro";
import Portfolio from "../../components/Home/Portfolio/Portfolio";
import Services from "../../components/Home/Services/Services";
import Tech from "../../components/Home/Tech/Tech";
import Testimonials from "../../components/Home/Testimonials/Testimonials";

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
