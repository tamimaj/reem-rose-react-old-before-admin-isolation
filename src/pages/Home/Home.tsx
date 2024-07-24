import Intro from "../../components/Home/Intro/Intro";
import Services from "../../components/Home/Services/Services";
import Tech from "../../components/Home/Tech/Tech";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import Container from "../../components/Container/Container";

const Home = () => {
  return (
    <div className="flex flex-col lg:mt-40 mb-3 lg:mb-12 w-full justify-center items-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col /overflow-x-hidden items-center"></div>
      <Container>
        <Intro />
        <Tech />
      </Container>
      <ImageGrid />

      <Container>
        <Services />
        <Testimonials />
      </Container>
    </div>
  );
};

export default Home;
