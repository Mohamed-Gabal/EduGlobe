import React from "react";
import ApplicationData from "./ApplicationData";
import "./Application.css";

const Application = () => {
  return (
    <section className="application">
      <h2 className="application__title">Your Application Journey</h2>
      <p className="application__description">
        Complete these simple steps to begin your learning adventure
      </p>

      <div className="application__steps">
        {ApplicationData.map(({ id, icon, title, step, description }) => (
          <article key={id} className="application__step_card">
            <span className="application__step_number">{step}</span>
            <img src={icon} alt={title} className="application__step_icon" />
            <h3 className="application__step_title">{title}</h3>
            <p className="application__step_desc">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Application;
