import React from "react";
import WhyChooseData from "./WhyChooseData";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <header className="why-choose__header">
        <h5 className="why-choose__subtitle">Why Choose Us</h5>
        <h1 className="why-choose__title">Your Success is Our Priority</h1>
        <p className="why-choose__description">
          Experience the difference with our proven approach to language learning
        </p>
      </header>

      <div className="why-choose__grid">
        {WhyChooseData?.map(({ id, image, title, description }) => (
          <article className="why-choose__card" key={id}>
            <img 
              src={image} 
              alt={title} 
              className="why-choose__image" 
              loading="lazy"
            />
            <h3 className="why-choose__card-title">{title}</h3>
            <p className="why-choose__card-desc">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
