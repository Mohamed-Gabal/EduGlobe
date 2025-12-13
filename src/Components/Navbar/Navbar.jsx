import React from "react";
import Logo from "../../assets/Image/logo_head.png";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      {/* Left Section: Logo */}
      <div className="nav_left">
        <Link to="/"><img src={Logo} alt="EduGlobe Logo" className="nav_logo_img" /></Link>
        <div className="nav_logo_text">
          EduGlobe
          <p>Language Centre</p>
        </div>
      </div>

      {/* Center Section: Links */}
      <ul className="nav_links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/apply_now">Apply Now</Link>
        <Link to="/contact">Contact</Link>
      </ul>

      {/* Right Section: Buttons */}
      <div className="nav_actions">
        <button className="btn_signin">Sign In</button>
        <Link to="/contact"><button className="btn_apply">Apply Now</button></Link>
      </div>
    </nav>
  );
};
export default Navbar;
