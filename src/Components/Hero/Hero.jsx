import "./Hero.css";
import { useState, useEffect } from "react";
import portfo from "../../assets/portfo.jpg";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const titles = [
    "Frontend Developer",
    "ML Engineer",
    "Data Analyst",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 30 : 60;
    const holdDelay = 700;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentTitle.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, titles]);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-name"><span>I'm</span> Sundara Pandi P</div>
        <h2 className="hero-title">
          a <span className="animated-text">{displayedText}</span>
          <span className="cursor">|</span>
        </h2>
        <p>
          I'm Sundarapandi P, an aspiring Frontend Developer and Machine Learning Engineer pursuing a Bachelor's degree in Artificial Intelligence and
          Data Science (AIDS) at Rajalakshmi Institute of Technology. I specialize in
          building seamless and responsive web applications, machine learning,
          and deep learning. My projects range from To-Do List application to
          building models.
        </p>
        <div className="hero-action">
          <div className="hero-connect">FIND ME ON</div>
          <a
            href="https://www.linkedin.com/in/sundara-pandi-557a87295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <img src={portfo} alt="Profile" />
    </div>
  );
};

export default Hero;
