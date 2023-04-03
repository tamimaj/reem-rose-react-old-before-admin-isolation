import React from "react";
import "rc-drawer/assets/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import BlogPost from "./pages/BlogPost/BlogPost";
import Careers from "./pages/Careers/Careers";
import CareerDetails from "./pages/CareerDetails/CareerDetails";

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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
