import React from "react";
import ProgramLevelsData from "./ProgramLevelsData";
import "./ProgramLevels.css";

const ProgramLevels = () => {
  return (
    <div className="program__levels">
      <h3 className="program__levels_title">Choose Your Level</h3>
      <h1 className="program__levels_header">Program Levels</h1>
      <p className="program__levels_desc">
        Start at the right level and progress at your own pace with our
        structured learning path
      </p>
    </div>
  );
};

export default ProgramLevels;
