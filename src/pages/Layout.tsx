import React from "react";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
