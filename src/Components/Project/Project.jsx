import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Project.css';

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // ensures animation only happens on first scroll
    });
    AOS.refresh();
  }, []); // ✅ empty dependency array = only on first mount

  const projects = [
    {
      title: 'To-Do List Application',
      description: 'A responsive to-do list app built with React to manage daily tasks efficiently.',
      link: 'https://github.com/Sundarapandi531/To-Do-List.git',
    },
    {
      title: 'Spam Detection Model',
      description: 'A machine learning model using scikit-learn to classify sms as spam or ham.',
      link: 'https://github.com/Sundarapandi531/Spam-ham-Detection.git',
    },
    {
      title: 'Medicinal Plant Identification',
      description: 'Developed a CNN model to identify medicinal plants using VGG16.',
      link: 'https://github.com/yourusername/medicinal-plant-cnn',
    },
    {
      title: 'Sign Language Detection',
      description: 'Implemented sign language detection using Mediapipe and OpenCV.',
      link: 'https://github.com/yourusername/sign-language-detection',
    },
    {
      title: 'Album Finder (Spotify API)',
      description: 'A React app that lets users search for albums using Spotify API.',
      link: 'https://github.com/Sundarapandi531/Web-Project.git',
    },
  ];

  return (
    <div className="projects">
      <h2 className="projects-title" data-aos="fade-up">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
