import "rc-drawer/assets/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import BlogPost from "./pages/BlogPost/BlogPost";
import Careers from "./pages/Careers/Careers";
import CareerDetails from "./pages/CareerDetails/CareerDetails";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import ScheduleCall from "./pages/ScheduleCall/ScheduleCall";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career-details" element={<CareerDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/schedule" element={<ScheduleCall />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
