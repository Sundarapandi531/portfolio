import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Services from './Components/Services/Services.jsx';
import Project from './Components/Project/Project.jsx';
import Resume from './Components/Resume/Resume.jsx';
import Contact from './Components/Contact/Contact.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Project /></div>
      <div id="resume"><Resume /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
