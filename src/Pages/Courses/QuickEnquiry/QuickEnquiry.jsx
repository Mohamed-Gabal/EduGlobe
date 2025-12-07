import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiStopwatch } from "react-icons/ci";
import { MdGroups2 } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";
import "./QuickEnquiry.css";

const QuickEnquiry = () => {
  return (
    <section className="quickEnquiry">
      {/* Right Side - Info */}
      <div className="quickEnquiry__right">
        <h1 className="quickEnquiry__right_title">
          The English Plus <br /> Programs (EPP)
        </h1>
        <p className="quickEnquiry__right_desc">
          Master English with our comprehensive programs designed for all
          levels. From beginner to advanced, develop your speaking, listening,
          reading, and writing skills in a supportive, interactive environment.
        </p>
        <button className="quickEnquiry__right_btn">
          Start Your Journey <IoIosArrowRoundForward />
        </button>
        <div className="quickEnquiry__features">
          <div className="quickEnquiry__feature_item">
            <CiStopwatch /> Flexible Duration
          </div>
          <div className="quickEnquiry__feature_item">
            <MdGroups2 /> Small Classes
          </div>
          <div className="quickEnquiry__feature_item">
            <FaRegSun /> Certified Instructors
          </div>
        </div>
      </div>

      {/* Left Side - Form */}
      <div className="quickEnquiry__left">
        <h2 className="quickEnquiry__left_title">Quick Enquiry</h2>
        <form className="quickEnquiry__form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <select defaultValue="" required>
            <option value="" disabled>
              Select a course
            </option>
            <option value="general">General English</option>
            <option value="business">Business English</option>
            <option value="ielts">IELTS Preparation</option>
            <option value="toefl">TOEFL Success Program</option>
            <option value="private">Private Tutoring</option>
            <option value="club">Conversation Club</option>
          </select>
          <button type="submit" className="quickEnquiry__btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuickEnquiry;
