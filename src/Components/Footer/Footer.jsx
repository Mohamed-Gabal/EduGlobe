import React from "react";
import Logo from "../../assets/Image/logo_head.png";
import { FaSquareFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import "./Footer.css";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: <FaSquareFacebook />, url: "https://facebook.com", label: "Facebook" },
  { icon: <SiInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        {/* About Section */}
        <div className="footer_about">
          <div className="nav_left">
            <Link to="/"><img src={Logo} alt="EduGlobe Logo" className="nav_logo_img" /></Link>
            <div className="nav_logo_text">
              EduGlobe
              <p>Language Centre</p>
            </div>
          </div>
          <p>
            Empowering learners worldwide with exceptional English language
            education since 2010.
          </p>
          <ul className="footer_links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" title={link.label}>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer_quicklinks">
          <h2>Quick Links</h2>
          <ul>
            <li>Our Courses</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Blog & Resources</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer_support">
          <h2>Support</h2>
          <ul>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
