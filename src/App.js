import React, { useEffect } from 'react';

import ReactGA from 'react-ga';

import Navigation from './components/Navigation';
import Education from './containers/Education';
import Experience from './containers/Experience';
import Feedbacks from './containers/Feedbacks';
import GithubProfile from './containers/GithubProfile';
import Greetings from './containers/Greetings';
import Proficiency from './containers/Proficiency';
import Projects from './containers/Projects';
import Skills from './containers/Skills';

const initilizaDataLayer = () => {
  ReactGA.initialize("G-30WGJX7EJ9");
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const App = () => {
  useEffect(() => {
    initilizaDataLayer();
  }, []);
  return (
    <>
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfile />
    </>
  );
};

export default App;
