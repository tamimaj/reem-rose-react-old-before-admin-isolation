import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-w-full min-h-full layout relative bg-body">
      <Header />
      <main className="min-h-[50vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
