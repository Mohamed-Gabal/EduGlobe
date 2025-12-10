import React from "react";
import EduGlobe1 from "../../../assets/Icons/EduGlobe1.svg";

import ReadyData from "./ReadyData";
import readyIcon4 from "../../../assets/Icons/readyIcon4.svg";
import readyIcon2 from "../../../assets/Icons/readyIcon2.svg";
import readyIcon6 from "../../../assets/Icons/readyIcon6.svg";
import readyIcon7 from "../../../assets/Icons/readyIcon7.svg";
import readyIcon8 from "../../../assets/Icons/readyIcon8.svg";

import "./Ready.css";

const Ready = () => {
  return (
    <section className="ready">

      {/* ---------- TOP SECTION ---------- */}
      <div className="ready__top">
        <h2 className="ready__title">Ready to Begin Your English Journey?</h2>

        <p className="ready__subtitle">
          Join thousands of learners worldwide. Apply now in just a few minutes
          and unlock your potential.
        </p>

        {/* Steps */}
        <div className="ready__steps">
          {ReadyData.map(({ id, icon, title, description, url_icon, sub_title }) => (
            <article key={id} className="ready__step">
              <img src={icon} alt={title} className="ready__step_icon" />

              <div className="ready__step_content">
                <h3>{title}</h3>
                <p>{description}</p>

                {url_icon && (
                  <span className="ready__step_link">
                    <img src={url_icon} alt="" />
                    {sub_title}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Secure Note */}
        <div className="ready__secure">
          <img src={readyIcon4} alt="secure" />
          <span>All documents are securely encrypted and protected</span>
        </div>
      </div>

      {/* ---------- CTA SECTION ---------- */}
      <div className="ready__cta">
        <img src={readyIcon2} alt="apply" className="ready__cta_icon" />

        <div className="ready__cta_text">
          <h1>Ready to Begin Your English Journey?</h1>
          <p>
            Join thousands of learners worldwide. Apply now in just a few
            minutes and unlock your potential.
          </p>
        </div>

        <button className="ready__cta_btn">
          Start Your Application <img src={EduGlobe1} alt="apply" />
        </button>

        <ul className="ready__cta_list">
          <li>
            <img src={readyIcon6} alt="secure payment" />
            Secure Payment
          </li>
          <li>
            <img src={readyIcon7} alt="program" />
            Certified Program
          </li>
          <li>
            <img src={readyIcon8} alt="support" />
            24/7 Support
          </li>
        </ul>

        <div className="ready__cta_help">
          Need Help? Contact Us <img src={EduGlobe1} alt="contact" />
        </div>
      </div>

    </section>
  );
};

export default Ready;
