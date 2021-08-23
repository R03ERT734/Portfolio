import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <Projects />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);


