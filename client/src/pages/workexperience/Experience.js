import React from "react";
import "./experience.css";
import { SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="work" id="work">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work experience
        </h2>
        <hr />
        <Fade direction="up" triggerOnce>
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="November 2023 - January 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                MERN Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Pregrad Online Internship
              </h4>
              <p>
               Built and deployed end-to-end MERN stack projects, fusing intuitive interfaces with robust backend logic to solve real-world problems with clean, scalable code.
              </p>
            </VerticalTimelineElement>
             <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="November 2023 - January 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaJava />}
            >
              <h3 className="vertical-timeline-element-title">
                CORE JAVA Trainee
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               SAMYAK IT SOLUTIONS
              </h4>
              <p>
               Trained in Core Java at Samyak, gaining practical experience in key concepts like OOPs, exception handling, and file I/O.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Fade>
      </div>
    </div>
  );
};

export default Experience;
