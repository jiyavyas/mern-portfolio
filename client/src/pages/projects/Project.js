import React from "react";
import "./project.css";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center fw-bolder">👉 HERE ARE MY PROJECT</p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img src="Amazon.png" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Ecommerce Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/jiyavyas/amazon_clone.git"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React.Js</span>
                <img src="weather.png" alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>

                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Weather App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/jiyavyas/weatherApp.git"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img src="taskmanager.png" alt="project3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>

                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Task Manager App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/jiyavyas"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img src="Chatbot.png" alt="project4" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">admin dashboard</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/jiyavyas"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src="portfolio.jpg " alt="project5" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Node</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">My portfolio</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/jiyavyas"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React</span>
                <img src="Dashboard.png" alt="project6" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">API</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Dashboard</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/jiyavyas"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
