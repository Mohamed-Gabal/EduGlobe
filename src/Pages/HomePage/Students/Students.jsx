import React from "react";
import StudentData from "./StudentData";
import { MdOutlineStarPurple500 } from "react-icons/md";
import "./Students.css";

const iconsMap = {
  star: <MdOutlineStarPurple500 />,
};

const Students = () => {
  return (
    <section className="students">
      <header className="students__header">
        <h5 className="students__header_title">Student Success Stories</h5>
        <h1 className="students__header_head">What Our Students Say</h1>
        <p className="students__header_desc">
          Real feedback from learners who achieved their English language goals with us
        </p>
      </header>

      <div className="students__cards">
        {StudentData.map(({ id, icon, description, urlImage, name, role }) => (
          <article className="students__card" key={id}>
            
            {/* 5 نجوم حسب المفتاح icon */}
            <div className="students__card_icons">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{iconsMap[icon]}</span>
              ))}
            </div>

            <p className="students__card_description">{description}</p>

            <div className="students__card_profile">
              <img src={urlImage} alt={name} className="image__profile" />
              <div className="students__card_profile_info">
                <h3 className="profile__name">{name}</h3>
                <p className="profile__role">{role}</p>
              </div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Students;
