import React from "react";
import Program from "../../../assets/Image/program.png";
import { LuMessagesSquare } from "react-icons/lu";
import { TbVectorSpline } from "react-icons/tb";
import { IoBook } from "react-icons/io5";
import "./ProgramOverview.css";

const features = [
  {
    icon: <LuMessagesSquare />,
    title: "Speaking Excellence",
    description: "Build confidence in everyday conversations and professional settings",
  },
  {
    icon: <TbVectorSpline />,
    title: "Active Listening",
    description: "Develop comprehension skills for various accents and contexts",
  },
  {
    icon: <IoBook />,
    title: "Practical Application",
    description: "Real-world scenarios and interactive learning activities",
  },
];

const FeatureItem = ({ icon, title, description }) => (
  <div className="program__feature_item">
    <div className="program__feature_icon">{icon}</div>
    <div className="program__feature_text">
      <h3 className="program__feature_title">{title}</h3>
      <p className="program__feature_desc">{description}</p>
    </div>
  </div>
);

const ProgramOverview = () => {
  return (
    <section className="program_overview">
      <div className="program_overview_image">
        <img src={Program} alt="Program Overview" />
      </div>
      <div className="program_overview_content">
        <h4 className="program_overview_subtitle">Program Overview</h4>
        <h1 className="program_overview_title">Transform Your English Skills</h1>
        <p className="program_overview_desc">
          The English Plus Programs (EPP) is designed to help students develop
          comprehensive English language skills through immersive learning
          experiences. Our program focuses on practical communication, cultural
          understanding, and academic excellence.
        </p>
        <div className="program_overview_features">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
