import React from "react";
import LearningData from "./LearningData";
import "./Learning.css";

const Learning = () => {
  return (
    <section className="learning">
      <header className="learning__heading">
        <h3 className="learning__subtitle">Learning Journey</h3>
        <h1 className="learning__title">What You Will Learn</h1>
        <p className="learning__description">
          Follow our structured learning path to English mastery.
        </p>
      </header>

      <div className="learning__grid">
        {LearningData.map(({ id, counter, title, description, icon }) => (
          <article key={id} className="learning__card">
            <div className="learning__content">
              <span className="learning__counter">{counter}</span>

              <div className="learning__text">
                <h2 className="learning__cardTitle">{title}</h2>
                <p className="learning__cardDesc">{description}</p>
              </div>

              <img src={icon} alt={title} className="learning__icon" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Learning;
