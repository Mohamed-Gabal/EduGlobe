
import React from "react";
import EduGlobeIcon from "../../../assets/Icons/EduGlobe.svg";
import messageImg from "../../../assets/Image/Message.png";
import messageIcon from "../../../assets/Icons/messageIcon.svg";
import "./MessageSection.css";

const courses = [
  { value: "general", label: "General English" },
  { value: "business", label: "Business English" },
  { value: "ielts", label: "IELTS Preparation" },
  { value: "toefl", label: "TOEFL Success Program" },
  { value: "private", label: "Private Tutoring" },
  { value: "club", label: "Conversation Club" },
];

const supportFeatures = [
  {
    id: 1,
    title: "Quick Response Time",
    description: "We typically respond within 24 hours",
    icon: messageIcon,
  },
  {
    id: 2,
    title: "Expert Guidance",
    description: "Professional advisors ready to help",
    icon: messageIcon,
  },
  {
    id: 3,
    title: "Personalized Support",
    description: "Tailored solutions for your needs",
    icon: messageIcon,
  },
];

const MessageSection = () => {
  return (
    <section className="message-section">
      <div className="message-section__container">

        {/* Form */}
        <div className="message-section__form">
          <h2 className="message-section__title">Send Us a Message</h2>
          <p className="message-section__description">
            Fill out the form below and we'll get back to you shortly.
          </p>

          <form className="message-section__form_body">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="John Doe" required />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              required
            />

            <label htmlFor="course">Subject</label>
            <select id="course" defaultValue="" required>
              <option value="" disabled>
                Select a course
              </option>
              {courses.map((course) => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Tell us how we can help you..."
              rows="4"
              required
            />

            <button type="submit" className="message-section__form_button">
              Send Message <img src={EduGlobeIcon} alt="Send" />
            </button>
          </form>
        </div>

        {/* Info Panel */}
        <div className="message-section__info">
          <h3 className="message-section__info_title">We're Here to Help</h3>
          <p className="message-section__info_text">
            Our dedicated support team is ready to assist you with any questions
            about our programs, enrollment process, or learning opportunities.
          </p>

          {/* Cards Grid */}
          <div className="message-section__info_grid">
            {supportFeatures.map(({ id, title, description, icon }) => (
              <div key={id} className="message-section__info_card">
                <img src={icon} alt={title} className="message-section__info_card_icon" />
                <div className="message-section__info_card_text">
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="message-section__info_image">
            <img src={messageImg} alt="Support Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;


