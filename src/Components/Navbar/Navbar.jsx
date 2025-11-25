import React from "react";
import Logo from "../../assets/Image/logo_head.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      {/* Left Section: Logo */}
      <div className="nav_left">
        <img src={Logo} alt="EduGlobe Logo" className="nav_logo_img" />
        <div className="nav_logo_text">
          EduGlobe
          <p>Language Centre</p>
        </div>
      </div>

      {/* Center Section: Links */}
      <ul className="nav_links">
        <li>Home</li>
        <li>Courses</li>
        <li>Apply Now</li>
        <li>Contact</li>
      </ul>

      {/* Right Section: Buttons */}
      <div className="nav_actions">
        <button className="btn_signin">Sign In</button>
        <button className="btn_apply">Apply Now</button>
      </div>
    </nav>
  );
};
export default Navbar;
