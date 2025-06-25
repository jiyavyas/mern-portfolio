import React from 'react';
import "./About.css";
import Jump from "react-reveal/Jump"

const About = ({ isSidebarCollapsed }) => {
  return (
    <>
    <Jump>
    <div className={`about ${isSidebarCollapsed ? 'collapsed' : ''}`} id="about">
      <div className="row about-row">
        <div className="col-md-6 about-img">
          <img
            src="https://media.istockphoto.com/id/2170578930/photo/about-me.jpg?s=612x612&w=0&k=20&c=rLsmKZUGN35N0u6me1QDbVi6q6ewvncCRhEprrXJe98="
            alt="profile"
          />
        </div>
        <div className="col-md-6 about-content">
          <p>
            Hi! I'm a passionate MERN Stack Developer with a strong focus on
            building full-stack web applications using MongoDB, Express.js,
            React, and Node.js. I love turning complex problems into simple,
            beautiful, and intuitive solutions. With experience in both frontend
            and backend development, I enjoy crafting seamless user experiences,
            writing clean and efficient code, and building robust APIs.
          </p>
        </div>
      </div>
    </div>
    </Jump>
    </>
  );
};

export default About;
