
import React from "react";
import { GrLanguage } from "react-icons/gr";
import { MdGroups2 } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa";
import ver1 from "../../../assets/Image/ver1.png";
import ver2 from "../../../assets/Image/ver2.png";
import "./OurVision.css";

const OurVision = () => {
  return (
    <div className="our_vision">
      <h3 className="vision_section_title">Our Vision</h3>

      {/* ======= TOP SECTION ======= */}
      <div className="vision_section">
        <div className="vision_left">
          <h1>Empowering Global Communication</h1>
          <p>
            We envision a world where language barriers don't limit opportunities.
            Our mission is to provide exceptional English education that enables
            global careers and cultural exchange.
          </p>

          <div className="vision_features_row">
            <div className="vision_item">
              <GrLanguage className="vision_icon1" />
              <h2>Global Standards</h2>
              <p>Curriculum aligned with CEFR and Cambridge frameworks</p>
            </div>

            <div className="vision_item">
              <MdGroups2 className="vision_icon2" />
              <h2>Expert Instructors</h2>
              <p>Native speakers and certified teachers</p>
            </div>
          </div>
        </div>

        <div className="vision_image_side">
          <img src={ver1} alt="Vision" />
        </div>
      </div>

      {/* ======= BOTTOM SECTION (REVERSED) ======= */}
      <div className="vision_section reverse">
        <div className="vision_left">
          <h1>Excellence in Every Lesson</h1>
          <p>
            Through innovative teaching methods and personalized attention, we help
            every learner achieve fluency and confidence.
          </p>

          <div className="vision_features_row">
            <div className="vision_item">
              <IoBook className="vision_icon1" />
              <h2>Comprehensive Curriculum</h2>
              <p>All skills covered from beginner to advanced</p>
            </div>

            <div className="vision_item">
              <FaRegSun className="vision_icon2" />
              <h2>Recognized Certification</h2>
              <p>Accepted by universities and employers worldwide</p>
            </div>
          </div>
        </div>

        <div className="vision_image_side">
          <img src={ver2} alt="Vision 2" />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
