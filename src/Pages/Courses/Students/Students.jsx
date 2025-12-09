import React from "react";
import StudentsData from "./StudentsData";
import starIcon from "../../../assets/Icons/student_icon.svg"; // ← هنا صح
import "./Students.css";

const Students = () => {
  return (
    <section className="students">
      <header className="students__header">
        <h3 className="students__subtitle">Student Success Stories</h3>
        <h1 className="students__title">What Our Students Say</h1>
        <p className="students__description">
          Real experiences from students who transformed their English skills with EPP
        </p>
      </header>

      <div className="students__grid">
        {StudentsData.map(({ id, image, name, rating, description }) => (
          <article key={id} className="students__card">
            <div className="students__card_header">
              <img src={image} alt={name} loading="lazy" className="students__avatar" />
              <div className="students__card_title_rating">
                <h2>{name}</h2>
                <div className="students__stars">
                  {Array.from({ length: rating }).map((_, index) => (
                    <img key={index} src={starIcon} alt="star" loading="lazy" />
                  ))}
                </div>
              </div>
            </div>
            <p className="students__card_desc">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Students;
