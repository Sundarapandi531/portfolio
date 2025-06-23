import React, { useState } from "react";
import "./Resume.css";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = ["education", "skills", "experience", "projects"];

  return (
    <div className="resume-container" id="resume">
      {/* Resume Title */}
      <div className="resume-title">
        <h2>Fresher</h2>
        <h1>Sundara Pandi's Resume</h1>
      </div>

      {/* Tab Navigation */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Education Section */}
        {activeTab === "education" && (
          <div className="resume-section education-section">
            <h2>Educational Background</h2>
            <div className="resume-card">
              <h1>
                Bachelor's in Artificial Intelligence & Data Science (AI & DS)
              </h1>
              <span>Rajalakshmi Institute of Technology (2023 – 2027)</span>
              <span className="highlight">8.5 / 10 CGPA</span>
              <p>
                Focused on AI, ML, and software engineering. Participated in
                various hackathons and projects related to automation and deep
                learning.
              </p>
            </div>
            <div className="resume-card">
              <h3>Online Certifications</h3>
              <span>
                Coursera, Udemy, Scalar , Great Learning (2024 – Present)
              </span>
              <p>
                Completed courses on ML, Deep Learning, and Frontend Development
                (HTML, CSS, JavaScript, React).
              </p>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeTab === "skills" && (
          <div className="skills-section">
            <h2>Professional Skills</h2>

            <div className="skills-container">
              {/* Left Column: Core ML & AI */}
              <div className="skill-group">
                <h3 className="skill-heading">Core Skills</h3>
                <h2>Machine Learning & AI Skills</h2>

                <div className="progress-bar">
                  <label>
                    Python <span>95%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div className="progress-bar">
                  <label>
                    TensorFlow & PyTorch <span>90%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="progress-bar">
                  <label>
                    NLP (spaCy, Transformers) <span>85%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="progress-bar">
                  <label>
                    Model Deployment (Docker, FastAPI) <span>80%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div className="progress-bar">
                  <label>
                    Data Visualization (Matplotlib, Seaborn) <span>85%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>

              {/* Right Column: UI Skills */}
              <div className="skill-group">
                <h3 className="skill-heading">Additional Skills</h3>
                <h2>UI/Frontend Development Skills</h2>

                <div className="progress-bar">
                  <label>
                    HTML5 <span>85%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="progress-bar">
                  <label>
                    CSS3 & Bootstrap <span>80%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div className="progress-bar">
                  <label>
                    JavaScript & React <span>85%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="progress-bar">
                  <label>
                    Adobe XD <span>75%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "75%" }}></div>
                  </div>
                </div>

                <div className="progress-bar">
                  <label>
                    Figma <span>70%</span>
                  </label>
                  <div className="bar">
                    <div style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <div className="resume-section experience-section">
            <h2>Experience</h2>
            <div className="resume-card">
              <h3>Artificial Intelligence Intern</h3>
              <span>Acmegrade (Nov 2023 – Jan 2024)</span>
              <p>
                Worked on spam/ham detection using NLP techniques and created
                end-to-end ML pipelines.
              </p>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === "projects" && (
          <div className="resume-section projects-section">
            <h2>Highlighted Projects</h2>
            <div className="resume-card">
              <h3>Medicinal Plant Identification</h3>
              <p>
                Used CNN (VGG16, YOLOv8) to classify medicinal plants from leaf
                images.
              </p>
            </div>
            <div className="resume-card">
              <h3>Sign Language Detection</h3>
              <p>
                Developed a real-time sign language translator using OpenCV and
                deep learning.
              </p>
            </div>
            <div className="resume-card">
              <h3>Album Finder (Spotify API)</h3>
              <p>
                Built a React app that fetches and displays album data using
                Spotify’s REST API.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
