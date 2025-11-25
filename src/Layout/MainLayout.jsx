import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="Main_layout">
      <Navbar />
      <div className="layout_content">{children}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
