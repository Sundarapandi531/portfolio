import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';
import { FaLaptopCode, FaChartLine, FaBrain } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Frontend Website Development',
      description: 'Building responsive, accessible, and dynamic websites using React, HTML, CSS, and JavaScript.',
    },
    {
      icon: <FaBrain />,
      title: 'Machine Learning Solutions',
      description: 'Designing and deploying machine learning models for image processing, predictions, and automation.',
    },
    {
      icon: <FaChartLine />,
      title: 'Data Analysis',
      description: 'Exploring datasets, uncovering patterns, and providing actionable insights using Python and tools like Pandas and Matplotlib.',
    },
  ];

  return (
    <div className="services" data-aos="fade-up">
      <h2 className="services-title">What I Do</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index} data-aos="zoom-in-up">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
