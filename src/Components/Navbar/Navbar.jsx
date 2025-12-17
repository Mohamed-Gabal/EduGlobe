import React, { useState } from "react";
import Logo from "../../assets/Image/logo_head.png";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav_left">
        <Link to="/" className="nav_logo">
          <img src={Logo} alt="EduGlobe Logo" className="nav_logo_img" />
          <div className="nav_logo_text">
            EduGlobe
            <p>Language Centre</p>
          </div>
        </Link>
      </div>

      {/* Menu Icon (Mobile) */}
      <button
        className="nav_menu_btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <IoClose /> : <GrMenu />}
      </button>

      {/* Links */}
      <ul className={`nav_links ${menuOpen ? "nav_links--active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/apply_now" onClick={() => setMenuOpen(false)}>Apply Now</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* Actions (Desktop Only) */}
      <div className="nav_actions">
        <button className="btn_signin">Sign In</button>
        <Link to="/contact">
          <button className="btn_apply">Apply Now</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
