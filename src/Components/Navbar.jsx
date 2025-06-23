import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false); // close sidebar after clicking
  };

  return (
    <>
      <div className='navbar'>
        <div className="nav-logo">S-P</div>

        {/* Hamburger Icon */}
        {/*<div className="hamburger" onClick={() => setSidebarOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>*/}

        <div className="nav-right">
          <ul className="nav-menu">
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('resume')}>Resume</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
          <div className="hamburger" onClick={() => setSidebarOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</button>
        <ul className="sidebar-menu">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('resume')}>Resume</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>

      {/* Overlay behind sidebar */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
    </>
  );
};

export default Navbar;
