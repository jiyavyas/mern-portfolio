import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import { BsFillSunFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import './home.css';
import { Slide } from 'react-awesome-reveal';
import Resume from '../../assets/docs/resume.pdf';

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <MdOutlineDarkMode size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>

      <div className="container home-content">
        {/* Slide from Right */}
        <Slide direction="right" triggerOnce>
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ['FullStack Developer!', 'MERN Stack Developer!'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Slide>

        {/* Slide from Bottom */}
        <Slide direction="up" triggerOnce>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href={`https://api.whatsapp.com/send?phone=7976738890`}
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              className="btn btn-cv"
              href={Resume}
              download="your_name.pdf"
            >
              My Resume
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
