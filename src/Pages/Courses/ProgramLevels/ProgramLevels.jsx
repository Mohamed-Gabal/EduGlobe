import React from "react";
import ProgramLevelsData from "./ProgramLevelsData";
import "./ProgramLevels.css";

const ProgramLevels = () => {
  return (
    <section className="programLevels">
      <h3 className="programLevels__subtitle">Choose Your Level</h3>
      <h1 className="programLevels__title">Program Levels</h1>

      <p className="programLevels__description">
        Start at the right level and progress at your own pace with our
        structured learning path.
      </p>

      <div className="programLevels__grid">
        {ProgramLevelsData.map(
          ({ id, image, title, description, time, duration, intake, location }) => (
            <article key={id} className="programLevels__card">
              
              <img src={image} alt={title} className="programLevels__image" />

              <h2 className="programLevels__cardTitle">{title}</h2>
              <p className="programLevels__cardDesc">{description}</p>

              <ul className="programLevels__details">
                <li><strong>Time:</strong> {time}</li>
                <li><strong>Duration:</strong> {duration}</li>
                <li><strong>Intake:</strong> {intake}</li>
                <li><strong>Location:</strong> {location}</li>
              </ul>
              
              <button className="programLevels__details_btn">Learn More</button>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default ProgramLevels;
