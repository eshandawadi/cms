import React from "react";
import { sections } from "../mockData/sectionData";
import "./topSection.scss";
import Icon from "../assets/images/Icon.png";
const TopSection = () => {
  return (
    <div className="top-section">
      <div className="select">
        <div className="h2">Add New User</div>
        <i class="fa-solid fa-chevron-right"></i>
        <div className="title">Registration</div>
      </div>
      <div className="sections">
        {sections.map((section, map) => (
          <div className="section">
            <div className="icon">
              <img src={Icon} alt="" />
            </div>
            <div className="sub-title">{section.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
