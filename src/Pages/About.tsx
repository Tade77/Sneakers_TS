import React from "react";
import Preview from "../Components/Preview";
import { aboutData } from "../Data";

const About = () => {
  return (
    <div className="about">
      {aboutData.map((data) => (
        <div className="about--text" key={data.id}>
          <img className="about--image" src={data.image} alt="" />
          <span>{data.article}</span>
        </div>
      ))}
    </div>
  );
};

export default About;
