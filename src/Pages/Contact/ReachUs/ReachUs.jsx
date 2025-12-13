import React from "react";
import ReachUsData from "./ReachUsData";
import "./ReachUs.css";

const ReachUs = () => {
  return (
    <section className="reach">
      {/* Header */}
      <header className="reach__header">
        <h1 className="reach__title">How to Reach Us</h1>
        <p className="reach__description">
          Multiple ways to connect with our team
        </p>
      </header>

      {/* Content */}
      <div className="reach__grid">
        {ReachUsData.map(({ id, icon, title, value, description }) => (
          <article key={id} className="reach__card">
            <img
              src={icon}
              alt={title}
              className="reach__icon"
              loading="lazy"
            />

            <div className="reach__content">
              <h2 className="reach__cardTitle">{title}</h2>
              <span className="reach__value">{value}</span>
              <p className="reach__cardDesc">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReachUs;
