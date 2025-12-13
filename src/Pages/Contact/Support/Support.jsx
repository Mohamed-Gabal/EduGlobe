import React from "react";
import Whats from "../../../assets/Icons/whats.svg";
import Call from "../../../assets/Icons/call.svg";
import "./Support.css";

const Support = () => {
  return (
    <section className="support">
      <div className="support__content">
        <h2 className="support__title">Need Immediate Assistance?</h2>
        <p className="support__description">
          Our support team is here to assist you.
        </p>
        <div className="support__buttons">
          <button className="support__buttons_call">
            <img src={Call} alt="call" />
            Call Now
          </button>
          <button className="support__buttons_whats">
            <img src={Whats} alt="whats" />
            Send WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Support;
