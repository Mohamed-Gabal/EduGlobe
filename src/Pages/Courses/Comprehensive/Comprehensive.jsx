import React from "react";
import ComprehensiveData from "./ComprehensiveData";
import "./Comprehensive.css";

const Comprehensive = () => {
  return (
    <section className="comprehensive">
      <h3 className="comprehensive__title">Comprehensive Curriculum</h3>
      <h1 className="comprehensive__header">What We Focus On</h1>
      <p className="comprehensive__description">
        Our curriculum covers all essential aspects of English language learning
      </p>

      <div className="comprehensive__grid">
        {ComprehensiveData.map(({ id, icon, title, description }) => (
          <article key={id} className="comprehensive__grid_card">
            <img src={icon} alt={title} className="comprehensive__icon" />

            <h2 className="comprehensive__card_title">{title}</h2>
            <p className="comprehensive__card_desc">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Comprehensive;
