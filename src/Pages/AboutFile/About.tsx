import React from "react";
import "./AboutStyle.css";
import { aboutData } from "../../Data";

const About = () => {
  return (
    <div className="about">
      {aboutData.map((data) => (
        <div className="about--text" key={data.id}>
          <img className="about--image" src={data.image} alt="" />
          <span className="articles">{data.article}</span>
        </div>
      ))}
    </div>
  );
};

export default About;
