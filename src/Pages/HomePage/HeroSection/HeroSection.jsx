import React from "react";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { HiOutlinePlay } from "react-icons/hi2";
import hero from "../../../assets/Image/hero.png";
import hero1 from "../../../assets/Image/hero1.png";
import hero2 from "../../../assets/Image/hero2.png";
import hero3 from "../../../assets/Image/hero3.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero_section">
      <h4>Now Enrolling for 2025</h4>

      <div className="hero_right">
        <h1>
          Master English with <br />
          Expert Guidance
        </h1>
        <p>
          Transform your language skills with our comprehensive courses designed
          for all levels. Join thousands of successful learners worldwide.
        </p>

        <div className="hero_btn">
          <button className="btn1">
            Start Learning Today <FaArrowRightLong />
          </button>
          <button className="btn2">
            <HiOutlinePlay />
            Watch Demo
          </button>
        </div>

        <div className="hero_image">
          <div className="right_image">
            <img src={hero1} alt="Student learning 1" />
            <img src={hero2} alt="Student learning 2" />
            <img src={hero3} alt="Student learning 3" />
            <div className="student">
              <h3>5,000+ Students</h3>
              <p>Learning with us</p>
            </div>
          </div>

          <div className="left_pouns">
            <div className="left_icon">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="left_text">4.9/5 Rating</div>
          </div>
        </div>
      </div>

      <div className="hero_left">
        <img src={hero} alt="Hero illustration" />
      </div>
    </section>
  );
};
export default HeroSection;
