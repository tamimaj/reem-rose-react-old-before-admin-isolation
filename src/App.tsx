import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import "rc-drawer/assets/index.css";
import "react-alice-carousel/lib/alice-carousel.css";

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
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Admin from "./pages/Admin/Admin";
import ROUTES from "./settings/ROUTES";
import { AuthProvider } from "./context/auth.context";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <ToastContainer
            position="top-center"
            theme="dark"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            closeButton={false}
            className="min-h-auto p-0 m-0"
          />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.BLOG} element={<Blogs />} />
            <Route path={ROUTES.BLOG_POST} element={<BlogPost />} />
            <Route path={ROUTES.CAREERS} element={<Careers />} />
            <Route path={ROUTES.CAREER_DETAILS} element={<CareerDetails />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
            <Route path={ROUTES.SCHEDULE} element={<ScheduleCall />} />
            <Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUse />} />
            <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
            <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />

            <Route path={ROUTES.ADMIN} element={<Admin />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
