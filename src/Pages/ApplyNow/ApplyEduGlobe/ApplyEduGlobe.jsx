import React from "react";
import EduGlobe from "../../../assets/Icons/EduGlobe.svg";
import EduGlobe1 from "../../../assets/Icons/EduGlobe1.svg";
import "./ApplyEduGlobe.css";

const ApplyEduGlobe = () => {
  return (
    <section className="apply__eduGlobe">
      <div className="apply__eduGlobe_wrapper">
        <div className="apply__eduGlobe_iconBox">
          <img src={EduGlobe} alt="EduGlobe Logo" className="apply__eduGlobe_icon" />

          <div className="apply__eduGlobe_text">
            <h1 className="apply__eduGlobe_title">
              Apply Online at <br /> EduGlobe English Plus
            </h1>

            <p className="apply__eduGlobe_description">
              Begin your journey with a simple online process. Fast, clear, and secure.
            </p>
          </div>
        </div>

        <button className="apply__eduGlobe_btn">
          Start Application
          <img src={EduGlobe1} alt="apply icon" className="apply__eduGlobe_btn_icon" />
        </button>
      </div>
    </section>
  );
};

export default ApplyEduGlobe;
