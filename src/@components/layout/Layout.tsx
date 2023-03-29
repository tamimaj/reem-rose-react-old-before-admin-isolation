import React from "react";
import Header from "../Header/Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-w-full min-h-full layout relative bg-body">
      <Header />
      <main className="min-h-[100vh]">{children}</main>
    </div>
  );
};

export default Layout;
