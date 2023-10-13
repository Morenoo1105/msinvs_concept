import React from "react";
import "./feature.css";

const Feature = ({ title, text, icon }) => {
  return (
    <div className="msinvs__features-container__feature">
      <div className="msinvs__features-container__feature-title">
        {/* SVG used to create a gradient so I could link it to the fill of the icon */}
        <svg width="0" height="0">
          <linearGradient id="blue-gradient" x1="100%" y1="50%" x2="0%" y2="0%">
            <stop stopColor="rgba(27, 120, 222, 1)" offset="0%" />
            <stop stopColor="rgba(4, 44, 84, 1)" offset="100%" />
          </linearGradient>
        </svg>
        {icon}
        <div />
        <h1>{title}</h1>
      </div>
      <div className="msinvs__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
