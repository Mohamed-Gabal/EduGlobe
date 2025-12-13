import React from "react";
import contactImage from "../../../assets/Image/contact.png";
import sendIcon from "../../../assets/Icons/contact.svg";
import "./ContactEduGlobe.css";

const ContactEduGlobe = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        
        {/* Text Content */}
        <div className="contact__content">
          <h2 className="contact__title">
            Get in Touch
            <span>with Us</span>
            <strong>English <a className="span">EduGlobe</a></strong>
          </h2>

          <p className="contact__description">
            We're here to answer your questions and guide your learning journey.
          </p>

          <button type="button" className="contact__button">
            Send Message
            <img src={sendIcon} alt="Send message" />
          </button>
        </div>

        {/* Image */}
        <div className="contact__image">
          <img
            src={contactImage}
            alt="EduGlobe contact illustration"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactEduGlobe;
