
import React from "react";
import OurProgramsData from "./OurProgramsData";
import { FaStar } from "react-icons/fa6";
import { MdGroups2, MdOutlineWatchLater } from "react-icons/md";
import "./OurPrograms.css";

const OurPrograms = () => {
  return (
    <section className="our-programs">
      <div className="our-programs__header">
        <h5 className="our-programs__subtitle">Our Programs</h5>
        <h1 className="our-programs__title">Choose Your Perfect Course</h1>
        <p className="our-programs__description">
          Tailored programs designed to meet your specific goals, from exam
          preparation to business English.
        </p>
      </div>

      <div className="our-programs__grid">
        {OurProgramsData.map((program) => (
          <div className="program-card" key={program.id}>
            <img
              src={program.imageUrl}
              alt={program.title}
              className="program-card__image"
            />
            <div className="program-card__info">
              <div className="program-card__rating">
                <span
                  className={`program-card__level level-${program.level
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {program.level}
                </span>
                <span className="program-card__score">
                  {program.rating} <FaStar className="program-card__star" />
                </span>
              </div>
              <h2 className="program-card__title">{program.title}</h2>
              <p className="program-card__description">{program.description}</p>
              <div className="program-card__meta">
                <span className="program-card__duration">
                  <MdOutlineWatchLater className="duration_1" /> {program.duration}
                </span>
                <span className="program-card__students">
                  <MdGroups2 className="duration_1" /> {program.maxStudents}
                </span>
              </div>
              <div className="program-card__footer">
                <span className="program-card__price-value">${program.price}</span>
                <span className="program-card__price-type">/{program.type}</span>
                <button className="program-card__button">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;

