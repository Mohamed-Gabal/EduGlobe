import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./GetTouch.css";

const GetTouch = () => {
  return (
    <section className="get-touch">
      <div className="get-touch__container">

        {/* Left Side - Info + Social */}
        <div className="get-touch__left">
          <h5 className="get-touch__subtitle">Get In Touch</h5>
          <h2 className="get-touch__title">
            Start Your Learning <br /> Journey Today
          </h2>
          <p className="get-touch__description">
            Have questions? We're here to help. Contact us to learn more about
            our courses, schedule, or to book a free consultation.
          </p>

          <div className="get-touch__info">
            <div className="get-touch__info-item">
              <FaPhoneAlt className="get-touch__icon" />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="get-touch__info-item">
              <FaEnvelope className="get-touch__icon" />
              <span>info@englishcentre.com</span>
            </div>
            <div className="get-touch__info-item">
              <FaMapMarkerAlt className="get-touch__icon" />
              <span>123 Learning Street, Dubai, UAE</span>
            </div>
          </div>

          <div className="get-touch__social">
            <p className="social__text">Follow us on social media</p>
            <ul className="social__list">
              <li><Link to="#" className="social__link"><FaFacebookF /></Link></li>
              <li><Link to="#" className="social__link"><FaInstagram /></Link></li>
              <li><Link to="#" className="social__link"><FaLinkedinIn /></Link></li>
              <li><Link to="#" className="social__link"><FaTwitter /></Link></li>
            </ul>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="get-touch__right">
          <h5 className="get-touch__form-title">Send us a message</h5>
          <form className="get-touch__form">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="John Smith" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+1 (555) 000-0000" required />

            <label htmlFor="course">Course Interest</label>
            <select id="course" defaultValue="">
              <option value="" disabled>Select a course</option>
              <option value="general">General English</option>
              <option value="business">Business English</option>
              <option value="ielts">IELTS Preparation</option>
              <option value="toefl">TOEFL Success Program</option>
              <option value="private">Private Tutoring</option>
              <option value="club">Conversation Club</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell us about your learning goals..." rows="4" />

            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default GetTouch;
